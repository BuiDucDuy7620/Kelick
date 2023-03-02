const orgHolidayWorkListModel = require('../Model/orgHolidayWorkListModel.js')
const { orgHolidayWorkListValidate } = require('../Middleware/validate.js')

class orgHolidayWorkListController {
    newOrgHolidayWorkList = async (req, res) => {
        const { error, value } = orgHolidayWorkListValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new orgHolidayWorkListModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })

    }
    getAllOrgHolidayWorkList = async (req, res) => {
        orgHolidayWorkListModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getOrgHolidayWorkListById = (req, res) => {
        orgHolidayWorkListModel.find({ _id: req.params.id })
            .exec((error, Organization) => {
                if (error) {
                    res.send(error)

                } else {
                    res.json(Organization)
                    console.log(Organization)
                }
            })
    }
    updateOrgHolidayWorkListById = async (req, res) => {
        try {
            const { dateStart, dateEnd, postalCode } = req.body
            const data = await orgHolidayWorkListModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await orgHolidayWorkListModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        dateStart: dateStart,
                        dateEnd: dateEnd,
                        postalCode: postalCode
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

    deleteOrgHolidayWorkListById = (req, res) => {
        orgHolidayWorkListModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };

}
module.exports = new orgHolidayWorkListController()