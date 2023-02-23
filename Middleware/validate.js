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


// const userUpdateValidate = (data) => {
//     const schema = Joi.object({
//         name: Joi.string().min(3),
//         email: Joi.string().email().min(10),
//         passwordHash: Joi.string(),
//         phone: Joi.string(),
//         street: Joi.string(),
//         city: Joi.string(),
//         country: Joi.string(),
//         avatar: Joi.string(),
//     });
//     return schema.validate(data);
// };

const registerValidate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().min(10).required(),
        phone: Joi.string(),required,
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
module.exports = { postSolutionsValidate ,registerValidate,loginValidate}