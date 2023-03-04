const assetModel = require('../Model/assetModel.js')
const { assetValidate } = require('../Middleware/validate.js')

class AssetController {
    newAsset = async (req, res) => {
        const { error, value } = assetValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new assetModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })
    }
    getAllAsset = async (req, res) => {
        assetModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json({ total: value.length, value })
            }
        })
    }
    getAssetById = (req, res) => {
        assetModel.find({ _id: req.params.id })
            .exec((error, value) => {
                if (error) {
                    res.send(error)
                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    getAssetByName = (req, res) => {
        assetMode
            // .find({ assetName: req.params.assetName })
            .find({ "assetName": { $regex: req.body.assetName } })
            .exec((error, value) => {
                if (error) {
                    res.send(error)
                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    updateAssetById = async (req, res) => {
        try {
            const { assetName, description, availability, assignedTo } = req.body
            const data = await assetModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await assetModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        assetName: assetName,
                        description: description,
                        availability: availability,
                        assignedTo: assignedTo

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

    deleteAssetById = (req, res) => {
        assetModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };


}
module.exports = new AssetController()