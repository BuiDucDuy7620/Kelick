const organizationDepartmentModel = require('../Model/organizationDepartmentModel.js')
const { organizationDepartmentValidate } = require('../Middleware/validate.js')

class organizationDepartmentController {
    newOrganizationDepartment = (req, res) => {
        const { error, value } = organizationDepartmentValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        // const value=req.body.task
        let detailListdepartment = new organizationDepartmentModel(value)
        detailListdepartment.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                console.log('tao value thanh cong');
                res.send(value)
            }
        })
    }

    getAllOrganizationDepartment = (req, res) => {
        organizationDepartmentModel.find({}, { content: 0 }).exec((err, value) => {
            if (err) {
                res.send('khong the lay thong tin ')
            } else {
                res.json(value)
            }
        })
    }


    getOrganizationDepartmentById = (req, res) => {
        organizationDepartmentModel.find({ _id: req.params.id })
        .populate("Organization")
        .exec((err, value) => {
            if (err) {
                res.send('khong the lay thong tin o')
            } else {
                console.log('lay thanh cong ', value)
                res.json(value)
            }
        })
    }
}
module.exports = new organizationDepartmentController()