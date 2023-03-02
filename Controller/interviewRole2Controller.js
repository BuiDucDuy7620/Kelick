const interviewRole2Model = require('../Model/interviewRole2Model.js')
const { IterviewRole2Validate } = require('../Middleware/validate.js')

class IterviewRole2Controller {
    newIterviewRole2 = async (req, res) => {
        const { error, value } = IterviewRole2Validate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new interviewRole2Model(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })

    }
    getAllIterviewRole2 = async (req, res) => {
        interviewRole2Model.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getIterviewRole2ById = (req, res) => {
        interviewRole2Model.find({ _id: req.params.id })
            .exec((error, Organization) => {
                if (error) {
                    res.send(error)

                } else {
                    res.json(Organization)
                    console.log(Organization)
                }
            })
    }
    updateIterviewRole2ById = async (req, res) => {
        try {
            const { name } = req.body
            const data = await interviewRole2Model.findOne({ _id: req.params.id })
            if (data) {
                const userData = await interviewRole2Model.findByIdAndUpdate({ _id: req.params.id }, {
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

    deleteIterviewRole2ById = (req, res) => {
        interviewRole2Model.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };

}
module.exports = new IterviewRole2Controller()