const { categoryService } = require("../services");

// create-category
const createCategory = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.category_images = req.file.filename;
    } 
    else {
      throw new Error("category image is required!");
    }

    const categoryEx = await categoryService.getCategoryByName(reqBody.category_name);
    if (categoryEx) {
      throw new Error(`please add other category this ${categoryEx.category_name} category already created.`);
    }

    const category = await categoryService.createCategory(reqBody);

    res.status(200).json({
      success: true,
      message: "Category create successfully!",
      data: {
        category,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-category
const categoryList = async (req, res) => {
  try {
    const getCategory = await categoryService.getCategoryList();

    res.status(200).json({
      success: true,
      message: "Category List!",
      data: {
        getCategory,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-category
const deleteRecord = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const cateExists = await categoryService.getCategoryById(categoryId);
    if (!cateExists) {
      throw new Error("Category not found!");
    }

    await categoryService.deleteCategory(categoryId);

    res.status(200).json({
      success: true,
      message: "Category delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get category by id
const getCategoryDetails = async (req, res) => {
  try {
    const getDetails = await categoryService.getCategoryById(
      req.params.categoryId
    );
    if (!getDetails) {
      throw new Error("Category not found!");
    }

    res.status(200).json({
      success: true,
      message: "Category details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update category by id
const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const cateExists = await categoryService.getCategoryById(categoryId);
    if (!cateExists) {
      throw new Error("Category not found!");
    }

    await categoryService.updateDetails(categoryId, req.body);

    res.status(200).json({
      success: true,
      message: "Category details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCategory,
  categoryList,
  deleteRecord,
  getCategoryDetails,
  updateCategory
};