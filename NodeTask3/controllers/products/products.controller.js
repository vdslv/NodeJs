const { productsService } = require("../../services/");

module.exports = {
  getAllProducts: (req, res) => {
    const products = productsService.getAllProducts();

    res.json(products);
  },

  getProduct: (req, res) => {
    const { id } = req.params;
    const product = productsService.getProduct(+id);

    res.json(...product);
  },

  updateProduct: (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    productsService.updateProduct({id,name,price});
    res.end();
  },

  createProduct: (req, res) => {
    const { id, name, price } = req.body;

    productsService.createProduct({ id, name, price });
    res.json();
  },

  deleteProduct: (req, res) => {
    const { id } = req.params;

    productsService.deleteProduct(+id);
    res.end();
  },
};
