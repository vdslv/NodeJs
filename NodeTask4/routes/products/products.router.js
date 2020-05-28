const { Router } = require("express");

const productsRouter = Router();
const { productsController } = require("../../controllers");
const productValidation = require("../../middlewares/products/product-validation.middleware");

productsRouter.get("/", productsController.getAllProducts);

productsRouter.get("/:id", productsController.getProduct);

productsRouter.put("/:id", productValidation, productsController.updateProduct);

productsRouter.post("/", productValidation, productsController.createProduct);

productsRouter.delete("/:id", productsController.deleteProduct);

module.exports = productsRouter;
