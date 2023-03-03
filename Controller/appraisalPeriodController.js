const appraisalPeriodModel = require('../Model/appraisalPeriodModel.js')
const { appraisalPeriodValidate } = require('../Middleware/validate.js')

class appraisalPeriodController {
    newAppraisalPeriod = async (req, res) => {
        const { error, value } = appraisalPeriodValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new appraisalPeriodModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })
    }
    getAllAppraisalPeriod = async (req, res) => {
        appraisalPeriodModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getAppraisalPeriodById = (req, res) => {
        appraisalPeriodModel.find({ _id: req.params.id })
            .exec((error, value) => {
                if (error) {
                    res.send(error)
                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    updateAppraisalPeriodById = async (req, res) => {
        try {
            const { appraisalName} = req.body
            const data = await appraisalPeriodModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await appraisalPeriodModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        appraisalName: appraisalName
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

    deleteAppraisalPeriodById = (req, res) => {
        appraisalTemplateModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    }
}
module.exports = new appraisalPeriodController()