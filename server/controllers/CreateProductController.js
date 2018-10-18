import productDB from '../../model/product';

class CreateProductClass {
  static createProduct(req, res) {
    if (!req.body.quantity) {
      return res.status(400).send({
        success: 'false',
        message: 'quantity is required',
      });
    } if (!req.body.cost) {
      return res.status(400).send({
        success: 'false',
        message: 'cost is required',
      });
    } if (!req.body.stockDate) {
      return res.status(400).send({
        success: 'false',
        message: 'stock date is required',
      });
    } if (!req.body.status) {
      return res.status(400).send({
        success: 'false',
        message: 'status is required',
      });
    }
    const product = {
      id: productDB.length + 1,
      quantity: req.body.quantity,
      cost: req.body.cost,
      stockDate: req.body.stockDate,
      status: req.body.status,
    };
    productDB.push(product);
    return res.status(201).send({
      success: 'true',
      message: 'product added successfully',
      product,
    });
  }
}

export default CreateProductClass;
