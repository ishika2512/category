const express = require("express");
const { categoryValidation } = require("../validations");
const { categoryController } = require("../controllers");
const validate = require("../middlewares/validate");
const { upload } = require("../middlewares/upload");
const router = express.Router();

// create category
router.post(
    "/create-category",
    upload.single("category_images"),
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

// category list
router.get(
    "/list",
    categoryController.categoryList
);

// delete-category
router.delete(
    "/delete/:categoryId",
    categoryController.deleteRecord
);

// get category by id
router.get(
    "/get-details/:categoryId",
    categoryController.getCategoryDetails
);

// update category by id
router.put(
    "/update-category/:categoryId",
    categoryController.updateCategory
);

module.exports = router;
