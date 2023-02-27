const NotificationModel = require("../Model/notificationModel.js");
const {
    notificationValidate
} = require("../Middleware/validate.js");
const { request } = require("express");

const getAllNotification = (req, res) => {
    NotificationModel.find().exec((err, Notification) => {
        if (err) {
            res.send("Khong the lay thong tin Notification");
        } else {
            console.log("Lay thanh cong thong tin tat ca Notification");
            console.log(Notification);
            res.json(Notification);
        }
    });
};

const getNotificationById = (req, res) => {
    NotificationModel.find({ _id: req.params.id })
        .populate("user")
        .exec((err, Notification) => {
            if (err) {
                res.send(err);
            } else {
                console.log("Lay thanh cong thong tin Notification");
                console.log(Notification);
                res.json(Notification);
            }
        });
};
const getNotificationByDate = (req, res) => {
    // console.log(req.body.dateCreated)
    // console.log(new Date(`${req.body.dateCreated}`)
    // )
    NotificationModel.find({
        dateCreated: {
            $gte: new Date(`${req.body.date}`),
            // $lt: new Date(`${req.body.dateEnd}`)
            // [Op.between]: [6, 10],     // BETWEEN 6 AND 10
// $between: new Date(`${req.body.date}`)
        }
    })
        .populate("user")
        .exec((err, Notification) => {
            if (err) {
                res.send(err);
            } else {
                console.log("Lay thanh cong thong tin Notification");
                console.log(Notification);
                res.json({ total: Notification.length, Notification })

            }
        });
}
const newNotification = (req, res) => {
    const { error, value } = notificationValidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let Notification = new NotificationModel(value);

    Notification.save((err, Notification) => {
        if (err) {
            res.send("Error luu thong tin Notification");
        } else {
            console.log("Luu thong tin Notification thanh cong", Notification);
            res.send(Notification);
        }
    });
};




module.exports = {
    getAllNotification,
    getNotificationById,
    getNotificationByDate,
    newNotification
}
