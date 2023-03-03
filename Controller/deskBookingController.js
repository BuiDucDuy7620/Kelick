
const deskBookingModel = require('../Model/deskBookingModel.js')
const { deskBookingValidate } = require('../Middleware/validate.js')

class deskbookingController {
    newDeskBooking = async (req, res) => {
        const { error, value } = deskBookingValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new deskBookingModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })
    }
    getAllDeskBooking = async (req, res) => {
        deskBookingModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getDeskBookingById = (req, res) => {
        deskBookingModel.find({ _id: req.params.id })
            .exec((error, value) => {
                if (error) {
                    res.send(error)
                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    updateDeskBookingById = async (req, res) => {
        try {
            const { bookingDate} = req.body
            const data = await deskBookingModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await deskBookingModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        bookingDate: bookingDate
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

    deleteDeskBookingById = (req, res) => {
        appraisalTemplateModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    }
}
module.exports = new deskbookingController()