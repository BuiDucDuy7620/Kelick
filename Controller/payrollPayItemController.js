const payrollPayItemModel = require('../Model/payrollPayItemModel.js')
const { payrollPayItemValidate } = require('../Middleware/validate.js')

class PayrollPayItemController {
    newPayrollPayItem = async (req, res) => {
        const { error, value } = payrollPayItemValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new payrollPayItemModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })

    }
    getAllPayrollPayItem = async (req, res) => {
        payrollPayItemModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getPayrollPayItemById = (req, res) => {
        payrollPayItemModel.find({ _id: req.params.id })
            .exec((error, value) => {
                if (error) {
                    res.send(error)

                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    updatePayrollPayItemById = async (req, res) => {
        try {
            const { description, category, CPFType, IRBACode, defaultAmount, tecurringPayItemSettings, attendanceConditions, status } = req.body
            const data = await payrollPayItemModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await payrollPayItemModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        description: description,
                        category: category,
                        CPFType: CPFType,
                        IRBACode: IRBACode,
                        defaultAmount: defaultAmount,
                        tecurringPayItemSettings: tecurringPayItemSettings,
                        attendanceConditions: attendanceConditions,
                        status: status,

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

    deletePayrollPayItemById = (req, res) => {
        payrollPayItemModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };


}
module.exports = new PayrollPayItemController()