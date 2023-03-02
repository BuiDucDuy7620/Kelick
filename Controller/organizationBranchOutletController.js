const OrganizationBranchOutletModel = require('../Model/organizationBranchOutletModel.js')
const { organizationBranchOuletValidate } = require('../Middleware/validate.js')

class organizationBranchOutletController {
    newOrganizationBranchOutlet = async (req, res) => {
        const { error, value } = organizationBranchOuletValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new OrganizationBranchOutletModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })

    }
    getAllOrganizationBranchOutlet = async (req, res) => {
        OrganizationBranchOutletModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getOrganizationBranchOutletById = (req, res) => {
        OrganizationBranchOutletModel.find({ _id: req.params.id })
            // .populate("Department")
            .exec((error, Organization) => {
                if (error) {
                    res.send(error)

                } else {
                    res.json(Organization)
                    console.log(Organization)
                }
            })
    }
    updateOrganizationBranchOutletById = async (req, res) => {
        try {
            const { name, country, postalCode, address, officeNo, noOfEmployees, status ,checkinRadius} = req.body
            const data = await OrganizationBranchOutletModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await OrganizationBranchOutletModel.findByIdAndUpdate({ _id: req.params.id }, {
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

    deleteOrganizationBranchOutletById = (req, res) => {
        OrganizationBranchOutletModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };

}
module.exports = new organizationBranchOutletController()