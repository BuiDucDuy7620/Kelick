const interviewRole1Model = require('../Model/interviewRole1Model.js')
const { IterviewRole1Validate } = require('../Middleware/validate.js')

class IterviewRole1Controller {
    newIterviewRole1 = async (req, res) => {
        const { error, value } = IterviewRole1Validate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new interviewRole1Model(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })

    }
    getAllIterviewRole1 = async (req, res) => {
        interviewRole1Model.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getIterviewRole1ById = (req, res) => {
        interviewRole1Model.find({ _id: req.params.id })
            .exec((error, Organization) => {
                if (error) {
                    res.send(error)

                } else {
                    res.json(Organization)
                    console.log(Organization)
                }
            })
    }
    updateIterviewRole1ById = async (req, res) => {
        try {
            const { name } = req.body
            const data = await interviewRole1Model.findOne({ _id: req.params.id })
            if (data) {
                const userData = await interviewRole1Model.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        name: name
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

    deleteIterviewRole1ById = (req, res) => {
        interviewRole1Model.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };

}
module.exports = new IterviewRole1Controller()