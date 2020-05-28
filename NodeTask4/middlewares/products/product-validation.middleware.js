module.exports = (req, res, next) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      throw new Error("Product is not valid");
    }
    if (+price < 1) {
      throw Error("Price is not valid");
    }
    if (name.length < 3) {
      throw new Error("Name should be at least 3 characters long");
    }

    next();
  } catch (e) {
    res.end(e);
  }
};
