const solutionsRouter = require('./solutionsRouter')
const userRouter = require('./userRouter')

const Router = (app) => {
    // app.get('/',(req,res)=>{res.send('hello')})
    app.use('/kelick/solutions', solutionsRouter)
    app.use('/kelick/user', userRouter)

}
module.exports = Router