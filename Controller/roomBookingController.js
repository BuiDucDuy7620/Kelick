const roomBookingModel = require('../Model/roomBookingModel.js')
const { roomBookingValidate } = require('../Middleware/validate.js')

class RoomBookingController {
    newRoomBooking = async (req, res) => {
        const { error, value } = roomBookingValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new roomBookingModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })
    }
    getAllRoomBooking = async (req, res) => {
        roomBookingModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getRoomBookingById = (req, res) => {
        roomBookingModel.find({ _id: req.params.id })
            .exec((error, value) => {
                if (error) {
                    res.send(error)
                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    updateRoomBookingById = async (req, res) => {
        try {
            const { bookingDate, branchOutlet, bookingTime, employeeBooked } = req.body
            const data = await roomBookingModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await roomBookingModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        bookingDate: bookingDate,
                        branchOutlet: branchOutlet,
                        bookingTime: bookingTime,
                        employeeBooked: employeeBooked

                    }
                })
                res.status(200).send({ success: true, msg: "update success" })
            } else {
                res.status(200).send({ success: false, msg: 'error update' })
            }
        }
        catch (e) {
            res.status(400).send(e.message)
        }
    }

    deleteRoomBookingById = (req, res) => {
        roomBookingModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };


}
module.exports = new RoomBookingController()