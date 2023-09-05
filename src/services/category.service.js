const { category } = require("../model");

//  Create category
const createCategory = async (reqBody) => {
    return category.create(reqBody);
};

const getCategoryByName = async (category_name) => {
    return category.findOne({ category_name });
};

const getCategoryList = async (filter, options) => {
    return category.find();
};

const deleteCategory = async (categoryId) => {
    return category.findByIdAndDelete(categoryId);
};

const getCategoryById = async (categoryId) => {
    return category.findById(categoryId);
};

const updateDetails = async () => {
    return category.findByIdAndUpdate();
};

module.exports = {
    createCategory,
    getCategoryByName,
    getCategoryList,
    deleteCategory,
    getCategoryById,
    updateDetails
};