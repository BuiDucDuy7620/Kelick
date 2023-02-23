const solutionsModel = require('../Model/solutionsModel.js')
const { postSolutionsValidate } = require('../Middleware/validate.js')

class solutionsController {

    createPostDetailListSolutions = (req, res) => {
        const { error, value } = postSolutionsValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        // const value=req.body.task
        let detailListSolutions = new solutionsModel(value)
        detailListSolutions.save((error, value) => {
            if (error) {
                res.send(error)
            } else {
                console.log('tao value thanh cong');
                res.send(value)
            }
        })
    }

    getAllListPost= (req, res) => {
        solutionsModel.find({}, { content: 0 }).exec((err, value) => {
            if (err) {
                res.send('khong the lay thong tin ')
            } else {
                res.json(value)
            }
        })
    }

    getListPostByType= (req, res) => {
        solutionsModel.find({type:req.params.type}).exec((err, value) => {
            if (err) {
                res.send('khong the lay thong tin ')
            } else {
                res.json(value)
            }
        })
    }
    getListPostById = (req, res) => {
        solutionsModel.find({ _id: req.params.id }).exec((err, value) => {
            if (err) {
                res.send('khong the lay thong tin o')
            } else {
                console.log('lay thanh cong ', value)
                res.json(value)
            }
        })
    }
}
module.exports = new solutionsController()