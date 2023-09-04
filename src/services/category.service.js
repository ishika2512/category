const { Category } = require("../model");

//  Create category
    const createCategory = async (reqBody) => {
    return Category.create(reqBody);
};

module.exports = {
    createCategory,
};