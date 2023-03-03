const interviewHiringModel = require('../Model/interviewHiringModel.js')
// const { IterviewHiringValidate } = require('../Middleware/validate.js')

class IterviewHiringController {
    newIterviewHiring = async (req, res) => {
        // const { error, value } = IterviewHiringValidate(req.body)
        // if (error) return res.status(400).send(error.details[0].message)
    const value=req.body
        let data = new interviewHiringModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })
    }
    getAllIterviewHiring = async (req, res) => {
        interviewHiringModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getIterviewHiringById = (req, res) => {
        interviewHiringModel.find({ _id: req.params.id })
            .exec((error, Organization) => {
                if (error) {
                    res.send(error)

                } else {
                    res.json(Organization)
                    console.log(Organization)
                }
            })
    }
    updateIterviewHiringById = async (req, res) => {
        try {
            const { hiringStatus } = req.body
            const data = await interviewHiringModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await interviewHiringModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        hiringStatus: hiringStatus
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

    deleteIterviewHiringById = (req, res) => {
        interviewHiringModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };
    

}
module.exports = new IterviewHiringController()