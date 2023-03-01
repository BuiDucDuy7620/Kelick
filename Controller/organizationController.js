const organizationModel = require('../Model/organizationModel.js')
const { organizationValidate } = require('../Middleware/validate.js')
const { upload } = require('../Middleware/upload.js')
const fs = require('fs')
const path = require('path')

class organizationController {
    newOrganizationDetail = async (req, res) => {
        const { error, value } = organizationValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        // const value=req.body.task
        // docj file base64 vaf taoj link de luu vao mongodb
        if (value.file) {
            let uploadFile = await upload(value.file);
            let document = {
                type: uploadFile.type,
                url: `http://localhost:3000/static/document/${Date.now()}`,
                data: fs.writeFileSync(
                    path.join(`./public/document/${Date.now()}`),
                    uploadFile.data,
                    (err) => {
                        if (err) throw err
                    }
                )

            }
            value.file = document.url 
        }
        // var x = path.join(`./public/document/${new Date().toLocaleDateString}`)

        //     console.log('joinnnnnnnnnnnnnnnnnnnnnnnnnn', x)
        //     console.log('dirnamennnnnnnnnnnnnnnnnnnnnnnnnn', __dirname)

        let organization = new organizationModel(value)
        organization.save((error, organization) => {
            if (error) {
                res.send(error)
                console.log(error);
            } else {
                console.log('Gui organization  thanh cong');
                res.send(organization)
            }
        })
    }
    getAllOrganization = async(req, res) => {
        organizationModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getOrganizationById = (req, res) => {
        organizationModel.find({ _id: req.params.id }).exec((err, Organization) => {
            if (err) {
                res.send('khong the lay thong tin Organization')
            } else {
                res.json(Organization)
            }
        })
    }
}
module.exports = new organizationController()