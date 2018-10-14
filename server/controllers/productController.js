import productDB from '../../model/product';

class ProductClass {
  static getAllProduct(req, res) {
    return res.send(productDB);
  }

  static getSingleProduct(req, res) {
    const id = parseInt(req.params.id, 10);
    productDB.map((product) => {
      if (product.productId === id) {
        return res.status(200).send({
          success: 'true',
          message: 'product retrieved successfully',
          product,
        });
      }
    });
    return res.status(404).send({
      success: 'false',
      message: 'unable to retreive product',
    });
  }
}

export default ProductClass;
