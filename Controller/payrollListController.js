const payrollListModel = require('../Model/payrollListModel.js')
const { payrollListValidate } = require('../Middleware/validate.js')
const ejs = require('ejs')
const pdf = require('html-pdf')
const fs = require('fs')
const path = require('path')
class PayrollListController {

    exportPDFPayrollList = async (req, res) => {
        try {

            const payrollList = await payrollListModel.find({})
            const data = {
                payrollListModel: payrollList
            }
            // console.log('dddddddddddddddddddddddddd', payrollList)
            const filePathName = path.resolve(__dirname, '../view/htmltopdf.ejs')
            const htmlString = fs.readFileSync(filePathName).toString()
            const options = {
                format: 'Letter'
            }
            const ejsData = ejs.render(htmlString, data)
            pdf.create(ejsData, options).toFile('data.pdf', (err, response) => {
                if (err) console.log(err)
                const filePath = path.resolve(__dirname, '../data.pdf')
                fs.readFile(filePath, (err, file) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).send('could not dload file')
                    }
                    res.setHeader('Content-Type', 'application/pdf');
                    res.setHeader('Content-Disposition', `attachment; filename="data.pdf"`);
                    res.send(file)
                })
            })
        }
        catch (e) {
            console.log(e.message);
        }
    }



    newPayrollList = async (req, res) => {
        const { error, value } = payrollListValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new payrollListModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })

    }
    getAllPayrollList = async (req, res) => {
        payrollListModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getPayrollListById = (req, res) => {
        payrollListModel.find({ _id: req.params.id })
            .exec((error, value) => {
                if (error) {
                    res.send(error)

                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    updatePayrollListById = async (req, res) => {
        try {
            const { name } = req.body
            const data = await payrollListModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await payrollListModel.findByIdAndUpdate({ _id: req.params.id }, {
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

    deletePayrollListById = (req, res) => {
        payrollListModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };


}
module.exports = new PayrollListController()