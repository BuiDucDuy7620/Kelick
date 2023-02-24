const eventCalendarModel = require('../Model/eventCalendarModel.js')
const { eventCalendarValidate } = require('../Middleware/validate.js')

class eventCalendarController {

    createEventCalendar = (req, res) => {
        const { error, value } = eventCalendarValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let event = new eventCalendarModel(value)
        event.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                console.log('tao value thanh cong');
                res.send(value)
            }
        })
    }

    getAllEventCalendar= (req, res) => {
        eventCalendarModel.find({}, { content: 0 }).exec((err, value) => {
            if (err) {
                res.send('khong the lay thong tin ')
            } else {
                res.json(value)
            }
        })
    }

    getEventCalendarById = (req, res) => {
        eventCalendarModel.find({ _id: req.params.id }).exec((err, value) => {
            if (err) {
                res.send('khong the lay thong tin o')
            } else {
                console.log('lay thanh cong ', value)
                res.json(value)
            }
        })
    }
}
module.exports = new eventCalendarController()