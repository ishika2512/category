const { category } = require("../model");

//  Create category
    const createCategory = async (reqBody) => {
    return category.create(reqBody);
};

module.exports = {
    createCategory,
};