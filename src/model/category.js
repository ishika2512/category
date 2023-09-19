const mongoose = require("mongoose");
const config = require("../config/config");
const categorySchema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            trim: true,
        },
        category_description: {
            type: String,
            trim: true,
        },
        category_images: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.category_images) {
                    data.category_images = `${config.base_url}category_images/${data.category_images}`;
                }
            },
        },
    }
);
const category = mongoose.model("category", categorySchema);
module.exports = category;