import productDB from '../../model/product';

class ProductClass {
  static getAllProduct(req, res) {
    return res.send(productDB);
  }
}
export default ProductClass;
