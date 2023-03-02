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
    getAllOrganization = async (req, res) => {
        organizationModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getOrganizationById = (req, res) => {
        organizationModel.find({ _id: req.params.id })
            // .populate("Department")
            .exec((err, Organization) => {
                if (err) {
                    res.send(err)

                } else {
                    res.json(Organization)
                    console.log(Organization)
                }
            })
    }
   
    //     updateOrganizationById = (req, res) => {
    //         // const { error, value } = userUpdateValidate(req.body);
    //         // if (error) return res.status(400).send(error.details[0].message);
    // const value=req.body.value
    //         organizationModel.findOneAndUpdate(
    //             { _id: req.params.id },
    //             value,
    //             { new: true },
    //             (err) => {
    //                 if (err) {
    //                     res.send("Da xay ra loi khi update thong tin");
    //                 } else {
    //                     res.send("Update thong tin thanh cong");
    //                 }
    //             }
    //         );
    //     };

    updateOrganizationById = async (req, res) => {
        try {
            const data = await organizationModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await organizationModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        logo: req.body.logo,
                    }
                })
                res.status(200).send({ success: true, msg: "your password has been updated" })
            } else {
                res.status(200).send({ success: false, msg: 'User Id not found' })
            }
        }
        catch (e) {
            res.status(400).send(e.message)
        }
    }

    deleteOrganizationById = (req, res) => {
        organizationModel.findOneAndDelete({ _id: req.params.id }, (err) => {
            if (err) {
                res.send("Da co loi xay ra khi delete user");
            } else {
                res.send("Xoa user thanh cong");
            }
        });
    };

}
module.exports = new organizationController()