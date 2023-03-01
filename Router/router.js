const solutionsRouter = require('./solutionsRouter')
const userRouter = require('./userRouter')

const eventCalendarRouter = require('./eventCalendarRouter')
const notificationRouter = require('./notificationRouter')
const organizationRouter = require('./organizationRouter')

const Router = (app) => {
    // app.get('/',(req,res)=>{res.send('hello')})
    app.use('/kelick/solutions', solutionsRouter)
    app.use('/kelick/user', userRouter)
    app.use('/kelick/eventCalendar', eventCalendarRouter)
    app.use('/kelick/notification', notificationRouter)
    app.use('/kelick/organization', organizationRouter)


}
module.exports = Router