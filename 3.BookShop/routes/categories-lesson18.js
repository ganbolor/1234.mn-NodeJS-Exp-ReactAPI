const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    myMethod: "GET",
    data: "categories list",
  });
});

router.get("/:idCategory", (req, res) => {
  res.status(200).json({
    myMethod: "GET",
    data: `get info categories => ${req.params.idCategory} `,
  });
});
router.post("/", (req, res) => {
  res.status(200).json({
    myMethod: "POST",
    data: "may be new add",
  });
});

router.put("/:idCategory", (req, res) => {
  res.status(200).json({
    myMethod: "PUT",
    data: `change categories => ${req.params.idCategory} `,
  });
});

router.delete("/:idCategory", (req, res) => {
  res.status(200).json({
    myMethod: "DELETE",
    data: `delete categories => ${req.params.idCategory} `,
  });
});

module.exports = router;
