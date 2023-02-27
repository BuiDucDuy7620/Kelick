const UserModel = require("../Model/userModel.js");
const bcrypt = require("bcryptjs");
const config = require("../config/config")
const jwt = require("jsonwebtoken");

const { userUpdateValidate,
    registerValidate,
    loginValidate,
} = require("../Middleware/validate.js");

const nodemailer = require('nodemailer')
const randomstring = require('randomstring');
const getAllUsers = (req, res) => {
    UserModel.find().exec((err, users) => {
        if (err) {
            res.send("Khong the lay thong tin users");
        } else {
            console.log("Lay thanh cong thong tin tat ca users");
            console.log(users);
            res.json({data:users});
        }
    });
};
const sendResetPasswordMail = async (name, email, token) => {
    try {
        // const transporter = nodemailer.createTransport({
        //     // host: 'smtp.mailtrap.io',
        //     host: 'smtp.gmail.com',

        //     port: 2525,
        //     secure: false,
        //     requireTLS: true,
        //     // service:'gmail',
        //     auth: {
        //         user: config.emailUser,
        //         pass: config.emailPassword
        //     }
        // })
        // const mailOptions = {
        //     from:config.emailUser,
        //     to:email,
        //     subject:'for reset password',
        //     html:'<>Hii'+name+', please copy the link<a href="http://localhost:3000/api/reset-Password?token='+token+'">   reset your password </a>'
        // }
        // transporter.sendMail(mailOptions,function(error,info){
        //     if(error){
        //         console.log(error)
        //     }else{
        //         console.log('mail hass been sent:-',info.response)
        //     }
        // })
        let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    catch (error) {
        res.status(400).send({ success: false, msg: error.message })
    }
}

const securePassword = async (password) => {
    try {
        // const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hash(password, 10);
        return hashPassword
    }
    catch (error) {
        // res.status(400).send({ success: false, msg: error.message })
        res.status(400).send(error.message)
    }
}
const register = async (req, res) => {
    try {
        const { error } = registerValidate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const spassword = await securePassword(req.body.password);
        const user = new UserModel()
        user.email = req.body.email,
            user.phone = req.body.phone,
            user.organizationName = req.body.organizationName,
            user.passwordHash = spassword,
            user.organizationID = req.body.organizationID,
            user.organizationCountryBasedIn = req.body.organizationCountryBasedIn
        const userData = await UserModel.findOne({ email: req.body.email })
        if (userData) {
            res.status(200).send({ success: false, msg: "this email is already exists" })
        } else {
            const newUser = await user.save()
            res.status(200).send({ success: true, data: newUser })
        }
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}
const createToken = async (id) => {
    try {
        const token = await jwt.sign({ _id: id }, config.secret_jwt)
        return token
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}
const login = async (req, res) => {
    // 1. Validate user info
    const { error } = loginValidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // 2. Check email of user exists in db
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email not exists in db");
    // 3. check password in database
    const loginPassword = await bcrypt.compareSync(
        req.body.password,
        user.passwordHash
    );
    if (!loginPassword) return res.status(400).send("Password Incorrect");
    // 4. generated token string
    // const token = jwt.sign({ id: user._id }, config.secret_jwt);
    const token = await createToken(user._id)
    // const tokenn = jwt.sign({})
    // 5. Return token for user
    res.header("auth-token", token).send(token);
};

const updateUser = async (req, res) => {
    try {
        const { user_id, password, phone, organizationName, organizationID, organizationCountryBasedIn } = req.body
        const data = await UserModel.findOne({ _id: user_id })
        // console.log(data)

        if (data) {

            const newPassword = await securePassword(password)
            const userData = await UserModel.findByIdAndUpdate({ _id: user_id }, {
                $set: {
                    passwordHash: newPassword,
                    phone: phone,
                    organizationName: organizationName,
                    organizationID: organizationID,
                    organizationCountryBasedIn: organizationCountryBasedIn
                }
            })
            res.status(200).send({ success: true, msg: "your password has been updated" })
        } else {
            res.status(200).send({ success: false, msg: 'User Id not found' })
        }
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}
const forgetPassword = async (req, res) => {
    try {
        const email = req.body.email
        const userData = await UserModel.find({ email: email })
        if (userData) {
            const randomString = randomstring.generate()
            const data = await UserModel.updateOne({ email: email },
                { $set: { token: randomString } })
            sendResetPasswordMail(userData.name, userData.email, randomString)
            res.status(200).send({ success: true, msg: "pls check you inbox of mail and reset  " })


        } else {
            res.status(200).send({ success: true, msg: "pls check you inbox of mail and reset  " })
        }
    }
    catch (error) {
        res.status(400).send({ success: false, msg: error.message })
    }
}


// class UserController {
//     getAllUsers = (req, res) => {
//         UserModel.find().exec((err, users) => {
//             if (err) {
//                 res.send("Khong the lay thong tin users");
//             } else {
//                 console.log("Lay thanh cong thong tin tat ca users");
//                 console.log(users);
//                 res.json(users);
//             }
//         });
//     };
// forgetPassword = async (req, res) => {
//     try {
//         const email = req.body.email
//         const userData = await UserModel.find({ email: email })
//         if (userData) {
//             const randomString = randomstring.generate()
//             const data = await UserModel.updateOne({ email: email }, { $set: { token: randomString } })
//             sendResetPasswordMail(userData.name, userData.email, randomString)
//         } else {
//             res.status(200).send({ success: true, msg: "tpls check you inbox of mail and reset  " })
//         }
//     }
//     catch (error) {
//         res.status(400).send({ success: false, msg: error.message })
//     }
// }
//     updateUser = async (req, res) => {
//         try {
//             const { userId } = req.body
//             const { password } = req.body
//             const data = await UserModel.findOne({ _id: userId })
//             if (data) {
//                 const newPassword = await se
//             }
//         }
//         catch (e) {
//             res.status(400).send({ success: false, msg: error.message })
//         }
//     }


//     // register = async (req, res) => {

//     //     // 1. Validate user info
//     // const { error } = registerValidate(req.body);
//     //     if (error) return res.status(400).send(error.details[0].message);
//     //     // 2. Check email exist in db
//     //     const emailExists = await UserModel.findOne({ email: req.body.email });
//     //     if (emailExists) return res.status(400).send("Email exists in db");
//     //     // 3. Bcryptjs to encrypt password
//     //     // const salt = bcrypt.genSaltSync(10);
//     //     // const hashPassword = bcrypt.hashSync(req.body.password, salt);
//     //     // const x=req.body.password
//     //    const a= securePassword(req.body.password)
//     //     // 4. Create a new user
// const newUser = new UserModel();
// newUser.email = req.body.email;
// newUser.phone = req.body.phone;
// newUser.organizationName = req.body.organizationName;
// newUser.passwordHash = a;
// newUser.organizationID = req.body.organizationID;
// newUser.organizationCountryBasedIn = req.body.organizationCountryBasedIn;

//     //     // 5. Return user for client
//     //     try {
//     //         const user = await newUser.save();
//     //         res.send(user);
//     //     } catch (e) {
//     //         console.log(e);
//     //         res.status(400).send(e);
//     //     }
//     // };


//     login = async (req, res) => {
//         // 1. Validate user info
//         const { error } = loginValidate(req.body);
//         if (error) return res.status(400).send(error.details[0].message);

//         // 2. Check email of user exists in db
//         const user = await UserModel.findOne({ email: req.body.email });
//         if (!user) return res.status(400).send("Email not exists in db");
//         // 3. check password in database
//         const loginPassword = await bcrypt.compareSync(
//             req.body.password,
//             user.passwordHash
//         );
//         if (!loginPassword) return res.status(400).send("Password Incorrect");
//         // 4. generated token string
//         const token = jwt.sign({ id: user._id }, config.secret_jwt);
//         // const tokenn = jwt.sign({})
//         // 5. Return token for user
//         res.header("auth-token", token).send(token);
//     };
// }

// module.exports = new UserController();

module.exports = { register, login, updateUser, forgetPassword,getAllUsers }