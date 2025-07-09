export const buildItemQuery = (queryParams) => {
  const filters = {};
  const orConditions = [];

  if (queryParams.userId) filters.userId = queryParams.userId;
  if (queryParams.category) filters.category = queryParams.category;
  if (queryParams.slug) filters.slug = queryParams.slug;
  if (queryParams.itemId) filters._id = queryParams.itemId;
  if (Number(queryParams.priceTag))
    filters.priceTag = Number(queryParams.priceTag);
  if (queryParams.searchTerm) {
    filters.$or = [
      //   { itemName: { $regex: queryParams.searchTerm, $options: "i" } },
      //   { priceTag: { $regex: queryParams.searchTerm, $options: "i" } },

      { itemName: { $regex: queryParams.searchTerm, $options: "i" } },
      { priceTag: { $regex: queryParams.searchTerm, $options: "i" } },
    ];
  }

  if (queryParams.startDate && queryParams.endDate) {
    filters.createdAt = {
      $gte: new Date(queryParams.startDate),
      $lte: new Date(queryParams.endDate),
    };
    // if (queryParams.featured === "true") filters.isFeatured = true;
  }

  return filters;
};
