const solutionsRouter = require('./solutionsRouter')
const userRouter = require('./userRouter')

const eventCalendarRouter = require('./eventCalendarRouter')
const notificationRouter = require('./notificationRouter')
const organizationRouter = require('./organizationRouter')
const departmentRouter = require('./departmentRouter')
const organizationDepartmentRouter = require('./organizationDepartmentRouter')
const organizationBranchOutletRouter = require('./organizationBranchOutletRouter')
const orgAnnouncementRouter = require('./orgAnnouncementRouter')
const orgHolidayWorkListRouter = require('./orgHolidayWorkListRouter')
const interviewRole1Router = require('./interviewRole1Router')
const interviewRole2Router = require('./interviewRole2Router')


const Router = (app) => {
    // app.get('/',(req,res)=>{res.send('hello')})
    app.use('/kelick/solutions', solutionsRouter)
    app.use('/kelick/user', userRouter)
    app.use('/kelick/eventCalendar', eventCalendarRouter)
    app.use('/kelick/notification', notificationRouter)
    app.use('/kelick/organization', organizationRouter)
    app.use('/kelick/department', departmentRouter)

    app.use('/kelick/organizationDepartment', organizationDepartmentRouter)
    app.use('/kelick/organizationBranchOutlet', organizationBranchOutletRouter)
    app.use('/kelick/orgAnnouncement', orgAnnouncementRouter)
    app.use('/kelick/orgHolidayWorkList', orgHolidayWorkListRouter)
    app.use('/kelick/interviewRole1', interviewRole1Router)
    app.use('/kelick/interviewRole2', interviewRole2Router)


}
module.exports = Router