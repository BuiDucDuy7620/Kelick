const { required } = require("joi");
const Joi = require("joi");

const postSolutionsValidate = (data) => {
    const schema = Joi.object({
        type: Joi.string().min(1).required(),

        title: Joi.string().min(1).required(),
        content: Joi.string().min(1).required()
    });
    return schema.validate(data);
};


const userUpdateValidate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().min(10).required(),
        phone: Joi.string(), required,
        password: Joi.string().min(6).required(),

    });
    return schema.validate(data);
};

const registerValidate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().min(10).required(),
        phone: Joi.string(), required,
        password: Joi.string().min(6).required(),
        organizationName: Joi.string().min(2).required(),
        organizationID: Joi.string().min(2).required(),
        organizationCountryBasedIn: Joi.string().min(2).required()
    });
    return schema.validate(data);
};

const loginValidate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().min(10).required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
};
const eventCalendarValidate = (data) => {
    const schema = Joi.object({
        dateStart: Joi.date().iso().required(),
        dateEnd: Joi.date().iso().greater(Joi.ref('dateStart')).required(),
        content: Joi.string().min(1).required(),

        // const messagesUpdateObj = {
        //     startTime: Joi.date().iso().required(),
        //     endTime : Joi.date().iso().greater(Joi.ref('startTime')).required()
        //   };
        // let schema =  Joi.object().keys(messagesUpdateObj);
        // console.log(Joi.validate({startTime : '2018-08-28T11:46:30.120',endTime : '2018-08-29T11:46:30.120'}, schema));

    });
    return schema.validate(data);
};
const notificationValidate = (data) => {
    const schema = Joi.object({
        user: Joi.string().min(1).required(),
        notificationType: Joi.string().min(1).required(),
        content: Joi.string().min(1).required(),
        detail: Joi.string().min(1).required(),
        status: Joi.string().min(1),
        date: Joi.date()
    });
    return schema.validate(data);
};
const organizationValidate = (data) => {
    const schema = Joi.object({
        department_id: Joi.string().min(1).required(),

        organizationName: Joi.string().min(1).required(),
        countryBased: Joi.string().min(1).required(),
        business: Joi.string().min(1),
        industry: Joi.string().min(1),
        organizationId: Joi.string().min(1).required(),
        dateOfIncorporation: Joi.date(),
        logo: Joi.string().min(1).required(),
        businessRegistrantionNumber: Joi.string().min(1), detail: Joi.string().min(1),
        postalCode: Joi.string().min(1), detail: Joi.string().min(1),
        country: Joi.string().min(1), detail: Joi.string().min(1),
        addressLine1: Joi.string().min(1), detail: Joi.string().min(1),
        addressLine2: Joi.string().min(1), detail: Joi.string().min(1),
        addressLine3: Joi.string().min(1), detail: Joi.string().min(1),

    });
    return schema.validate(data);
};
const departmentValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(1).required(),
        description: Joi.string().min(1).required(),

    });
    return schema.validate(data);
};

const organizationDepartmentValidate = (data) => {
    const schema = Joi.object({
        organization_id: Joi.string().min(1).required(),
        department_id: Joi.string().min(1).required()

    });
    return schema.validate(data);
};
const organizationBranchOuletValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(1).required(),
        // country: Joi.string().min(1).required(),
        // postalCode: Joi.string().min(1).required(),
        // officeNo: Joi.string().min(1).required(),
        // noOfEmployees: Joi.string().min(1).required(),
        // status: Joi.boolean().required(),
        // address: Joi.string().min(1).required(),
    });
    return schema.validate(data);
};
const orgAnnouncementValidate = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(1).required(),
        content: Joi.string().min(1).required(),
        branchOutlet: Joi.string().min(1).required(),
        publishDate: Joi.string().min(1).required(),
        department: Joi.string().min(1).required(),
        publishStatus: Joi.boolean().required(),
    });
    return schema.validate(data);
};
const orgHolidayWorkListValidate = (data) => {
    const schema = Joi.object({
        dateStart: Joi.date().min(1).required(),
        dateEnd: Joi.date().min(1).required(),
        postalCode: Joi.string().min(1).required(),
    });
    return schema.validate(data);
};
const iterviewRole1Validate = (data) => {
    const schema = Joi.object({
        dateStart: Joi.date().min(1).required(),
        dateEnd: Joi.date().min(1).required(),
        postalCode: Joi.string().min(1).required(),
    });
    return schema.validate(data);
};
const iterviewRole2Validate = (data) => {
    const schema = Joi.object({
        dateStart: Joi.date().min(1).required(),
        dateEnd: Joi.date().min(1).required(),
        postalCode: Joi.string().min(1).required(),
    });
    return schema.validate(data);
};
const iterviewCandidateValidate = (data) => {
    const schema = Joi.object({
        appliedRole: Joi.string().min(1),
        candidateName: Joi.string().min(1).required(),
        createdDate: Joi.date().min(1),
        yearsExperience: Joi.number().min(1),
        monthExperience: Joi.number().min(1),
        nationality: Joi.string().min(1),
        expectedSalary: Joi.string().min(1),
        phoneNumber: Joi.string().min(1),
        email: Joi.string().email().min(1),
        attachment: Joi.string().min(1),
    });
    return schema.validate(data);
};
const payrollListValidate = (data) => {
    const schema = Joi.object({
        payslip: Joi.string().min(0),
        name: Joi.string().min(0),
        nric: Joi.string().min(0),
        takeHomeSalary: Joi.number().min(0),
        grossSalaray: Joi.number().min(0),
        otherItem: Joi.number().min(0),
        shg: Joi.number().min(0),
        employeeCPF: Joi.number().min(0),
        employeerCPF: Joi.number().min(0),
        totalCPF: Joi.number().min(0),
        SDL: Joi.number().min(0),

    });
    return schema.validate(data);
};
const payrollPayItemValidate = (data) => {
    const schema = Joi.object({
        payslip: Joi.string().min(0),
        name: Joi.string().min(0),
        nric: Joi.string().min(0),
        takeHomeSalary: Joi.number().min(0),
        grossSalaray: Joi.number().min(0),
        otherItem: Joi.number().min(0),
        shg: Joi.number().min(0),
        employeeCPF: Joi.number().min(0),
        employeerCPF: Joi.number().min(0),
        totalCPF: Joi.number().min(0),
        SDL: Joi.number().min(0),
    });
    return schema.validate(data);
};
const assetValidate = (data) => {
    const schema = Joi.object({
        assetName: Joi.string().min(0).required(),
        description: Joi.string().min(0),
        availability: Joi.string().min(0).required(),
        assignedTo: Joi.string().min(0),
    });
    return schema.validate(data);
};
const attendanceValidate = (data) => {
    const schema = Joi.object({
        employeeName: Joi.string().min(0).required(),
        checkInLocation: Joi.string().min(0).required(),
        checkOutLocation: Joi.string().min(0),
        validity: Joi.string().min(0),
        checkInDate: Joi.string().min(0).required(),
        checkInTime: Joi.string().min(0).required(),
        checkOutDate: Joi.string().min(0),
        checkOutTime: Joi.string().min(0)
    });
    return schema.validate(data);
};
const shiftValidate = (data) => {
    const schema = Joi.object({
        shiftType: Joi.string().min(0).required(),
        outletBranch: Joi.string().min(0).required(),
        timeIn: Joi.string().min(0),
        timeOut: Joi.string().min(0),
    });
    return schema.validate(data);
};
const shiftTemplateValidate = (data) => {
    const schema = Joi.object({
        shiftTemplateName: Joi.string().min(0).required(),
        shiftType: Joi.string().min(0).required(),
        noOfDay: Joi.string().min(0),
        ouletBranch: Joi.string().min(0),
        timeIn: Joi.string().min(0),
        timeOut: Joi.string().min(0)
    });
    return schema.validate(data);
};
const claimValidate = (data) => {
    const schema = Joi.object({
        employeeName: Joi.string().min(0).required(),
        claimType: Joi.string().min(0).required(),
        claimAmount: Joi.string().min(0).required(),
        ouletBranch: Joi.string().min(0),
        approvalStatus: Joi.string().min(0),
        hasGST: Joi.boolean(),
        totalAmount: Joi.string().min(0),
        dateOfExpenditure: Joi.date().min(0),
        receipt: Joi.string().min(0),
        remarks: Joi.string().min(0)
    });
    return schema.validate(data);
};
const leaveValidate = (data) => {
    const schema = Joi.object({
        employeeName: Joi.string().min(0).required(),
        leaveType: Joi.string().min(0).required(),
        leaveDate: Joi.string().min(0).required(),
        approvalStatus: Joi.string().min(0),
        halfDayAM: Joi.string().min(0),
        halfDayPM: Joi.boolean(),
        totalAmount: Joi.boolean(),
        remarks: Joi.string().min(0).required(),
        attacchProof: Joi.string().min(0)
    });
    return schema.validate(data);
};
const appraisalSummaryValidate = (data) => {
    const schema = Joi.object({
        appraisal: Joi.string().min(0).required(),
        employee: Joi.string().min(0).required(),
        templateName: Joi.string().min(0).required(),
        appraisalStartDate: Joi.string().min(0),
        employeeEndDate: Joi.string().min(0),
        appraisalStartDate: Joi.string().min(0),

        appraisalStatus: Joi.boolean(),
        reviewer: Joi.boolean(),

    });
    return schema.validate(data);
};
const appraisalTemplateValidate = (data) => {
    const schema = Joi.object({
        templateName: Joi.string().min(0),
        description: Joi.string().min(0),
        numberOfReviewers: Joi.date().min(0),
        employeesIncluded: Joi.date().min(0),
        createdDate: Joi.date().min(0),
    });
    return schema.validate(data);
};
const appraisalPeriodValidate = (data) => {
    const schema = Joi.object({
        templateName: Joi.string().min(0),
        description: Joi.string().min(0),
        numberOfReviewers: Joi.date().min(0),
        employeesIncluded: Joi.date().min(0),
        createdDate: Joi.date().min(0),
    });
    return schema.validate(data);
};
const deskBookingValidate = (data) => {
    const schema = Joi.object({
        bookingDate: Joi.date().min(0),
        branchOulet: Joi.string().min(0),
        bookingTime: Joi.string().min(0),
        floor: Joi.string().min(0),
        employeeBooked: Joi.string().min(0),
    });
    return schema.validate(data);
};
const roomBookingValidate = (data) => {
    const schema = Joi.object({
        bookingDate: Joi.date().min(0).required(),
        branchOutlet: Joi.string().min(0).required(),
        bookingTime: Joi.string().min(0).required(),
        employeeBooked: Joi.string().min(0).required()
    });
    return schema.validate(data);
};
const manageRoomValidate = (data) => {
    const schema = Joi.object({
        roomName: Joi.string().min(0).required(),
        branchOutlet: Joi.string().min(0).required(),
        uploadRoomImage: Joi.string().min(0).required(),
        amenitiesSelection: Joi.string().min(0).required()
    });
    return schema.validate(data);
};
module.exports = {  manageRoomValidate,roomBookingValidate,deskBookingValidate, appraisalPeriodValidate,appraisalTemplateValidate, appraisalSummaryValidate, leaveValidate, claimValidate, shiftTemplateValidate, shiftValidate, attendanceValidate, assetValidate, payrollPayItemValidate, payrollListValidate, iterviewCandidateValidate, iterviewRole2Validate, iterviewRole1Validate, orgHolidayWorkListValidate, orgAnnouncementValidate, organizationBranchOuletValidate, organizationDepartmentValidate, departmentValidate, postSolutionsValidate, registerValidate, loginValidate, userUpdateValidate, eventCalendarValidate, notificationValidate, organizationValidate }