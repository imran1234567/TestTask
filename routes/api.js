const express = require("express");
const Product = require("../models/products");
const router = express.Router();

router.get("/products", (req, res, next) => {
  Product.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/create/products", (req, res, next) => {
  if (req.body.title) {
    Product.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

router.delete("/products/:id", (req, res, next) => {
  Product.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;

