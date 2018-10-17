import saleOrderDB from '../../model/saleOrders';

class Saleclass {
  static getAllSales(req, res) {
    return res.send(saleOrderDB);
  }
}

export default Saleclass;
