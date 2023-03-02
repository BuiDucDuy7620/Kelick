const orgAnnouncementModel = require('../Model/orgAnnouncementModel.js')
const { orgAnnouncementValidate } = require('../Middleware/validate.js')

class OrgAnnouncementController {
    newOrgAnnouncement = async (req, res) => {
        const { error, value } = orgAnnouncementValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new orgAnnouncementModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })
    }
    getAllOrgAnnouncement = async (req, res) => {
        orgAnnouncementModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getOrgAnnouncementById = (req, res) => {
        orgAnnouncementModel.find({ _id: req.params.id })
            .exec((error, Organization) => {
                if (error) {
                    res.send(error)
                } else {
                    res.json(Organization)
                    console.log(Organization)
                }
            })
    }
    updateOrgAnnouncementById = async (req, res) => {
        try {
            const { title, content, branchOutlet, publishDate, department, publishStatus} = req.body
            const data = await orgAnnouncementModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await orgAnnouncementModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        title: title
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
    deleteOrgAnnouncementById = (req, res) => {
        orgAnnouncementModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };
}
module.exports = new OrgAnnouncementController()