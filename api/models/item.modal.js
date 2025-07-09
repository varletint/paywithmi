import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    /*userId: {
      type: String,
      required: true,
     },*/
    priceTag: {
      type: Number,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    view: {
      type: Number,
      default: 0,
    },
    isfeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
