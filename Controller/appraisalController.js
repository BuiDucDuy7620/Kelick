const appraisalSummaryModel = require('../Model/appraisalSummaryModel.js')
const { appraisalSummaryValidate } = require('../Middleware/validate.js')

const appraisalTemplateModel = require('../Model/appraisalTemplateModel.js')
const { appraisalTemplateValidate } = require('../Middleware/validate.js')

class appraisalController {
    newAppraisal = async (req, res) => {
        const { error, value } = appraisalSummaryValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new appraisalSummaryModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })
    }
    getAllAppraisal = async (req, res) => {
        appraisalSummaryModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getAppraisalById = (req, res) => {
        appraisalSummaryModel.find({ _id: req.params.id })
            .exec((error, value) => {
                if (error) {
                    res.send(error)
                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    updateAppraisalById = async (req, res) => {
        try {
            const { appraisal, employee, templateName, appraisalStartDate, employeeEndDate, appraisalEndDate, appraisalStatus, reviewer } = req.body
            const data = await appraisalSummaryModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await appraisalSummaryModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        appraisal: appraisal,
                        employee: employee,
                        templateName: templateName,
                        appraisalStartDate: appraisalStartDate,
                        employeeEndDate: employeeEndDate,
                        appraisalEndDate: appraisalEndDate,
                        appraisalStatus: appraisalStatus,
                        reviewer: reviewer
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

    deleteAppraisalById = (req, res) => {
        appraisalTemplateModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };


    // appraisalTemplate
    newAppraisalTemplate = async (req, res) => {
        const { error, value } = appraisalTemplateValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new appraisalTemplateModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })
    }
    getAppraisalTemplate = async (req, res) => {
        appraisalTemplateModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getAppraisalTemplateById = (req, res) => {
        appraisalTemplateModel.find({ _id: req.params.id })
            .exec((error, value) => {
                if (error) {
                    res.send(error)
                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    updateAppraisalTemplateById = async (req, res) => {
        try {
            const { templateName, description, numberOfReviewers, employeesIncluded, createdDate } = req.body
            const data = await appraisalTemplateModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await appraisalTemplateModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        templateName: templateName,
                        description: description,
                        numberOfReviewers: numberOfReviewers,
                        employeesIncluded: employeesIncluded,
                        createdDate: createdDate
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

    deleteAppraisalTemplateById = (req, res) => {
        appraisalTemplateModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };


}
module.exports = new appraisalController()