import { errorHandler } from "../utils/errorHandler.js";
import { buildItemQuery } from "../utils/queryBuilder.js";
import Item from "../models/item.modal.js";

export const createItem = async (req, res, next) => {
  const priceTag = req.body.priceTag;
  const itemName = req.body.itemName;
  const category = req.body.category;

  if (!itemName || !priceTag || !category) {
    next(errorHandler(400, "All field are required ba"));
  }

  const tempSlug = req.body.itemName + req.body.priceTag;

  const validSlug = tempSlug
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");

  const newItem = new Item({
    ...req.body,
    slug: validSlug,
    userId: "001",
  });

  try {
    const savedItem = await newItem.save();
    res.status(200).json(savedItem);
  } catch (error) {
    next(error);
  }
};

export const getItems = async (req, res, next) => {
  try {
    const page = isNaN(parseInt(req.query.page)) ? 1 : parseInt(req.query.page);
    const limit = isNaN(parseInt(req.query.limit))
      ? 5
      : parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const sortDirection = req.query.order === "asc" ? 1 : -1;

    const filters = buildItemQuery(req.query);
    const items = await Item.find(filters)
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalItems = await Item.countDocuments(filters);

    res.status(200).json({
      items,
      totalItems,
      page,
      totalPages: Math.ceil(totalItems / limit),
    });
  } catch (error) {
    next(error);
  }
};
