const UserModel = require("../Model/userModel.js");
const bcrypt = require("bcryptjs");
const config = require("../config/config")
const jwt = require("jsonwebtoken");

const {
    registerValidate,
    loginValidate,
} = require("../Middleware/validate.js");

// const nodemailer = require('nodemailer')
// const randomstring = require('randomstring');

// const sendResetPasswordMail = async (name, email, token) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             host: 'smtp.gmail.com',
//             port: 578,
//             secure: false,
//             requireTLS: true,
//             auth: {
//                 user: config.emailUser,
//                 pass: config.emailPassword
//             }
//         })
//         const mailOptions = {
//             from:config.emailUser,
//             to:email,
//             subject:'for reset password',
//             html:'<>Hii'+name+', please copy the link<a href="http://localhost:3000/kelick/user/resetPassword?token='+token+'">  and reset your password </a>'
//         }
//         transporter.sendMail(mailOptions,function(error,info){
//             if(error){
//                 console.log(error)
//             }else{
//                 console.log('mail hass been sent:-',info.response)
//             }
//         })
//     }
//     catch (error) {
//         res.status(400).send({ success: false, msg: error.message })
//     }
// }

// const reate_token=async(id)=>{
//     try{
//         const token=await jwt.sign({_id:UserModel.id})
//     }catch(error){
//         res.status(400).send(error.message)
//     }
// }


class UserController {
    getAllUsers = (req, res) => {
        UserModel.find().exec((err, users) => {
            if (err) {
                res.send("Khong the lay thong tin users");
            } else {
                console.log("Lay thanh cong thong tin tat ca users");
                console.log(users);
                res.json(users);
            }
        });
    };
    // forgetPassword = async (req, res) => {
    //     try {
    //         const email = req.body.email
    //         const userData = await UserModel.find({ email: email })
    //         if (userData) {
    //             const randomString = randomstring.generate()
    //             const data = await UserModel.updateOne({ email: email }, { $set: { token: randomString } })
    //         sendResetPasswordMail(userData.name,userData.email,randomString)
    //         } else {
    //             res.status(200).send({ success: true, msg: "tpls check you inbox of mail and reset  " })
    //         }
    //     }
    //     catch (error) {
    //         res.status(400).send({ success: false, msg: error.message })
    //     }
    // }


register = async (req, res) => {
    // 1. Validate user info
    const { error } = registerValidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // 2. Check email exist in db
    const emailExists = await UserModel.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send("Email exists in db");
    // 3. Bcryptjs to encrypt password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
    // 4. Create a new user
    const newUser = new UserModel();
    newUser.email = req.body.email;
    newUser.phone = req.body.phone;
    newUser.organizationName = req.body.organizationName;
    newUser.passwordHash = hashPassword;
    newUser.organizationID = req.body.organizationID;
    newUser.organizationCountryBasedIn = req.body.organizationCountryBasedIn;

    // 5. Return user for client
    try {
        const user = await newUser.save();
        res.send(user);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
};
login = async (req, res) => {
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
    const token = jwt.sign({ id: user._id }, config.secret_jwt);
    // const tokenn = jwt.sign({})
    // 5. Return token for user
    res.header("auth-token", token).send(token);
};
}

module.exports = new UserController();
