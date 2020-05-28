const db = require("../../db").getInstance();

module.exports = {
  createProduct: (newProduct) => {
    const ProductModel = db.getModel("Product");
    ProductModel.create(newProduct);
  },

  updateProduct: (productId, productProps) => {
    const { name, price } = productProps;
    const ProductModel = db.getModel("Product");

    ProductModel.update(
      {
        name,
        price,
      },
      {
        where: {
          id: productId,
        },
      }
    );
  },

  getAllProducts: () => {
    const ProductModel = db.getModel("Product");

    return ProductModel.findAll({});
  },

  getProduct: (productId) => {
    const ProductModel = db.getModel("Product");

    return ProductModel.findByPk(productId);
  },

  deleteProduct: (productId) => {
    const ProductModel = db.getModel("Product");
    ProductModel.destroy({
      where: {
        id: productId,
      },
    });
  },
};
