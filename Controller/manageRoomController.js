const manageRoomModel = require('../Model/manageRoomModel.js')
const { manageRoomValidate } = require('../Middleware/validate.js')

class manageRoomController {
    newManageRoom = async (req, res) => {
        const { error, value } = manageRoomValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        let data = new manageRoomModel(value)
        data.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.send(value)
            }
        })
    }
    getAllManageRoom = async (req, res) => {
        manageRoomModel.find({}).exec((error, value) => {
            if (error) {
                res.send(error)
            } else {
                res.json(value)
            }
        })
    }
    getManageRoomById = (req, res) => {
        manageRoomModel.find({ _id: req.params.id })
            .exec((error, value) => {
                if (error) {
                    res.send(error)
                } else {
                    res.json(value)
                    console.log(value)
                }
            })
    }
    updateManageRoomById = async (req, res) => {
        try {
            const { roomName, branchOutlet, uploadRoomImage, amenitiesSelection } = req.body
            const data = await manageRoomModel.findOne({ _id: req.params.id })
            if (data) {
                const userData = await manageRoomModel.findByIdAndUpdate({ _id: req.params.id }, {
                    $set: {
                        roomName: roomName,
                        branchOutlet: branchOutlet,
                        uploadRoomImage: uploadRoomImage,
                        amenitiesSelection: amenitiesSelection

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

    deleteManageRoomById = (req, res) => {
        manageRoomModel.findOneAndDelete({ _id: req.params.id }, (error) => {
            if (error) {
                res.send("Da co loi xay ra khi delete ");
            } else {
                res.send("Xoa  thanh cong");
            }
        });
    };


}
module.exports = new manageRoomController()