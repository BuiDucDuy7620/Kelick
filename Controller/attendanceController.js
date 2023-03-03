const attendanceModel = require('../Model/attendanceModel.js')
const { attendanceValidate } = require('../Middleware/validate.js')

class AttendanceController {
    newAttendance = async (req, res) => {
        const { error, value } = attendanceValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new attendanceModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })
    }
    getAllAttendance = async (req, res) => {
        attendanceModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getAttendanceById = (req, res) => {
        attendanceModel.find({ _id: req.params.id })
            .exec((error, value) => {
                if (error) {
                    res.send(error)
                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    updateAttendanceById = async (req, res) => {
        try {
            const { employeeName, checkInLocation, checkOutLocation, validity, checkInDate, checkInTime, checkOutDate, checkOutTime } = req.body
            const data = await attendanceModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await attendanceModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        employeeName: employeeName,
                        checkInLocation: checkInLocation,
                        checkOutLocation: checkOutLocation,
                        validity: validity,
                        checkInDate: checkInDate,
                        checkInTime: checkInTime,
                        checkOutDate: checkOutDate,
                        checkOutTime: checkOutTime
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

    deleteAttendanceById = (req, res) => {
        attendanceModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };


}
module.exports = new AttendanceController()