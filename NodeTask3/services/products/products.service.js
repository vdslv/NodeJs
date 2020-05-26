let { products } = require("../../db/productsDb");

class ProductsService {
  createProduct(newProduct) {
    products.push(newProduct);
  }

  updateProduct(productForUpdate) {
    const { id, name, price } = productForUpdate;
    let index = products.findIndex((el) => el.id === +productForUpdate.id);
    products[index] = { ...products[index], id, name, price };
  }

  getAllProducts() {
    return products;
  }

  getProduct(productId) {
    return products.filter((el) => el.id === productId);
  }

  deleteProduct(productId) {
    products = products.filter((el) => el.id !== productId);
  }
}

module.exports = new ProductsService();
