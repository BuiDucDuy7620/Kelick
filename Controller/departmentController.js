const departmentModel = require('../Model/departmentModel.js')
const { departmentValidate } = require('../Middleware/validate.js')

class departmentController {
    newDepartment = (req, res) => {
        const { error, value } = departmentValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        // const value=req.body.task
        let detailListdepartment = new departmentModel(value)
        detailListdepartment.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                console.log('tao value thanh cong');
                res.send(value)
            }
        })
    }

    getAllDepartment = (req, res) => {
        departmentModel.find({}, { content: 0 }).exec((err, value) => {
            if (err) {
                res.send('khong the lay thong tin ')
            } else {
                res.json(value)
            }
        })
    }


    getDepartmentById = (req, res) => {
        departmentModel.find({ _id: req.params.id }).exec((err, value) => {
            if (err) {
                res.send('khong the lay thong tin o')
            } else {
                console.log('lay thanh cong ', value)
                res.json(value)
            }
        })
    }
}
module.exports = new departmentController()