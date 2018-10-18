import saleOrdersDB from '../../model/saleOrders';

class Saleclass {
  static getAllSales(req, res) {
    return res.send(saleOrdersDB);
  }

  static getSingleSale(req, res) {
    const id = parseInt(req.params.id, 10);
    saleOrdersDB.map((sale) => {
      if (sale.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'sale order retrieved successfully',
          sale,
        });
      }
    });
    return res.status(404).send({
      success: 'false',
      message: 'unable to retreive sale orer',
    });
  }
}

export default Saleclass;
