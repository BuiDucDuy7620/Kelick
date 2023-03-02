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

module.exports = {iterviewRole2Validate,iterviewRole1Validate, orgHolidayWorkListValidate, orgAnnouncementValidate, organizationBranchOuletValidate, organizationDepartmentValidate, departmentValidate, postSolutionsValidate, registerValidate, loginValidate, userUpdateValidate, eventCalendarValidate, notificationValidate, organizationValidate }