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


module.exports = { postSolutionsValidate, registerValidate, loginValidate, userUpdateValidate, eventCalendarValidate, notificationValidate }