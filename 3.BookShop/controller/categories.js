//controller ==> MVC==> Model View Controller
exports.getCategories = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "categories list",
    user: req.userId,
  });
};

exports.getCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `get categories => ${req.params.id} `,
  });
};

exports.createCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `create categories`,
  });
};
exports.updateCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `update categories => ${req.params.id} `,
  });
};

exports.deleteCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `delete categories => ${req.params.id} `,
  });
};
