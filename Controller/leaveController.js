const leaveModel = require('../Model/leaveModel.js')
const { leaveValidate } = require('../Middleware/validate.js')

class leaveController {
    newLeave = async (req, res) => {
        const { error, value } = leaveValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new leaveModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })
    }
    getAllLeave = async (req, res) => {
        leaveModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getLeaveById = (req, res) => {
        leaveModel.find({ _id: req.params.id })
            .exec((error, value) => {
                if (error) {
                    res.send(error)
                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    updateLeaveById = async (req, res) => {
        try {
            const { employeeName, leaveType, leaveDate, approvalStatus, halfDayAM, halfDayPM, totalAmount, remarks, attacchProof } = req.body
            const data = await leaveModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await leaveModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        employeeName: employeeName,
                        leaveType: leaveType,
                        leaveDate: leaveDate,
                        approvalStatus: approvalStatus,
                        halfDayAM: halfDayAM,
                        halfDayPM: halfDayPM,
                        totalAmount: totalAmount,
                        remarks: remarks,

                        attacchProof :attacchProof
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

    deleteLeaveById = (req, res) => {
        leaveModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };


}
module.exports = new leaveController()