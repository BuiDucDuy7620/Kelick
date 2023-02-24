const solutionsRouter = require('./solutionsRouter')
const userRouter = require('./userRouter')

const eventCalendarRouter = require('./eventCalendarRouter')

const Router = (app) => {
    // app.get('/',(req,res)=>{res.send('hello')})
    app.use('/kelick/solutions', solutionsRouter)
    app.use('/kelick/user', userRouter)

    app.use('/kelick/eventCalendar', eventCalendarRouter)

}
module.exports = Router