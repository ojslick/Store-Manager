import saleOrderDB from '../../model/saleOrders';

class CreateSaleClass {
  static createSale(req, res) {
    if (!req.body.quantity) {
      return res.status(400).send({
        success: 'false',
        message: 'quantity is required',
      });
    } if (!req.body.totalcost) {
      return res.status(400).send({
        success: 'false',
        message: 'totalcost is required',
      });
    } if (!req.body.attendantname) {
      return res.status(400).send({
        success: 'false',
        message: 'attendant name is required',
      });
    } if (!req.body.itemname) {
      return res.status(400).send({
        success: 'false',
        message: 'item name is required',
      });
    } if (!req.body.dateofsale) {
      return res.status(400).send({
        success: 'false',
        message: 'date of sale is required',
      });
    }
    const sale = {
      id: saleOrderDB.length + 1,
      quantity: req.body.quantity,
      totalcost: req.body.totalcost,
      attendantname: req.body.attendantname,
      itemname: req.body.itemname,
      dateofsale: req.body.dateofsale,
    };
    saleOrderDB.push(sale);
    return res.status(201).send({
      success: 'true',
      message: 'sale added successfully',
      sale,
    });
  }
}

export default CreateSaleClass;
