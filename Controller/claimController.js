const claimModel = require('../Model/claimModel.js')
const { claimValidate } = require('../Middleware/validate.js')

class ClaimController {
    newClaim = async (req, res) => {
        const { error, value } = claimValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new claimModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })
    }
    getAllClaim = async (req, res) => {
        claimModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getClaimById = (req, res) => {
        claimModel.find({ _id: req.params.id })
            .exec((error, value) => {
                if (error) {
                    res.send(error)
                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    updateClaimById = async (req, res) => {
        try {
            const { employeeName, claimType, claimAmount, approvalStatus, hasGST, totalAmount, dateOfExpenditure, receipt, remarks } = req.body
            const data = await claimModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await claimModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        employeeName: employeeName,
                        claimType: claimType,
                        claimAmount: claimAmount,
                        approvalStatus: approvalStatus,
                        hasGST: hasGST,
                        totalAmount: totalAmount,
                        dateOfExpenditure: dateOfExpenditure,
                        receipt: receipt,

                        remarks: remarks,
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

    deleteClaimById = (req, res) => {
        claimModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };


}
module.exports = new ClaimController()