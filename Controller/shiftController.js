const shiftModel = require('../Model/shiftModel.js')

const shiftTemplateModel = require('../Model/shiftTemplateModel.js')
const { shiftValidate,shiftTemplateValidate } = require('../Middleware/validate.js')

class ShiftController {
    newShift = async (req, res) => {
        const { error, value } = shiftValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new shiftModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })
    }
    getAllShift = async (req, res) => {
        shiftModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getShiftById = (req, res) => {
        shiftModel.find({ _id: req.params.id })
            .exec((error, value) => {
                if (error) {
                    res.send(error)
                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    updateShiftById = async (req, res) => {
        try {
            const { shiftType, outletBranch, timeIn, timeOut } = req.body
            const data = await shiftModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await shiftModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        shiftType: shiftType,
                        outletBranch: outletBranch,
                        timeIn: timeIn,
                        timeOut: timeOut
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

    deleteShiftById = (req, res) => {
        shiftModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };




    newShiftTemplate = async (req, res) => {
        const { error, value } = shiftTemplateValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new shiftTemplateModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })
    }
    getAllShiftTemplate = async (req, res) => {
        shiftTemplateModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getShiftTemplateById = (req, res) => {
        shiftTemplateModel.find({ _id: req.params.id })
            .exec((error, value) => {
                if (error) {
                    res.send(error)
                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    updateShiftTemplateById = async (req, res) => {
        try {
            const { shiftTemplateName, shiftType, timeIn, timeOut ,noOfDay,ouletBranch} = req.body
            const data = await shiftTemplateModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await shiftTemplateModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        shiftTemplateName: shiftTemplateName,
                        shiftType: shiftType,
                        timeIn: timeIn,
                        timeOut: timeOut,
                        noOfDay: noOfDay,
                        ouletBranch: ouletBranch
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

    deleteShiftTemplateById = (req, res) => {
        shiftModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };


}
module.exports = new ShiftController()