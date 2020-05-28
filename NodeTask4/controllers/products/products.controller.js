const { productsService } = require("../../services/");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      let products = await productsService.getAllProducts();
      res.json(products);
    } catch (e) {
      res.json(e);
    }
  },

  getProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productsService.getProduct(+id);
      res.json(product);
    } catch (e) {
      res.json(e);
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;

      await productsService.updateProduct(id,req.body);
    } catch (e) {
      res.json(e);
    }
    res.end();
  },

  createProduct: async (req, res) => {
    try {
      await productsService.createProduct(req.body);
    } catch (e) {
      res.json(e);
    }
    res.end();
  },

  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      await productsService.deleteProduct(+id);

      res.end();
    } catch (e) {
      res.json(e);
    }
  },
};
