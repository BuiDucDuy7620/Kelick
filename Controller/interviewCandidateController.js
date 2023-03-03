const InterviewCandidateModel = require('../Model/interviewCandidateModel.js')
const { InterviewCandidateValidate } = require('../Middleware/validate.js')

class InterviewCandidateController {
    newInterviewCandidate = async (req, res) => {
        const { error, value } = InterviewCandidateValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new InterviewCandidateModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })

    }
    getAllInterviewCandidate = async (req, res) => {
        InterviewCandidateModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getInterviewCandidateById = (req, res) => {
        InterviewCandidateModel.find({ _id: req.params.id })
            .exec((error, Organization) => {
                if (error) {
                    res.send(error)

                } else {
                    res.json(Organization)
                    console.log(Organization)
                }
            })
    }
    updateInterviewCandidateById = async (req, res) => {
        try {
            const { name } = req.body
            const data = await InterviewCandidateModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await InterviewCandidateModel.findByIdAndUpdate({ _id: req.params.id }, {
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

    deleteInterviewCandidateById = (req, res) => {
        InterviewCandidateModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };

}
module.exports = new InterviewCandidateController()