const UserModel = require("../Model/userModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
    registerValidate,
    loginValidate,
} = require("../Middleware/validate.js");

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

    // getUserById = (req, res) => {
    //     UserModel.find({ _id: req.params.id }).exec((err, user) => {
    //         if (err) {
    //             res.send("Khong the lay thong tin user");
    //         } else {
    //             console.log("Lay thanh cong thong tin user");
    //             console.log(user);
    //             res.json(user);
    //         }
    //     });
    // };

    // updateUserById = (req, res) => {
    //     const { error, value } = userUpdateValidate(req.body);
    //     if (error) return res.status(400).send(error.details[0].message);

    //     // const user = new UserModel(value);
    //     UserModel.findOneAndUpdate(
    //         { _id: req.params.id },
    //         value,
    //         { new: true },
    //         (err) => {
    //             if (err) {
    //                 res.send("Da xay ra loi khi update thong tin");
    //             } else {
    //                 res.send("Update thong tin thanh cong");
    //             }
    //         }
    //     );
    // };

    // getTotalsUsers = (req, res) => {
    //     UserModel.countDocuments((err, total) => {
    //         if (err) {
    //             res.send("Loi lay tong so users!!");
    //         } else {
    //             res.send(`Lay tong so users thanh cong!! Co ${total} user`);
    //         }
    //     });
    // };

    // deleteUserById = (req, res) => {
    //     UserModel.findOneAndDelete({ _id: req.params.id }, (err) => {
    //         if (err) {
    //             res.send("Da co loi xay ra khi delete user");
    //         } else {
    //             res.send("Xoa user thanh cong");
    //         }
    //     });
    // };

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
        const token = jwt.sign({ id: user._id }, "chuoibimatkhongthetietlo");
        // const tokenn = jwt.sign({})
        // 5. Return token for user
        res.header("auth-token", token).send(token);
    };
}
module.exports = new UserController();
