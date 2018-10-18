import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { SECRET } = process.env;

export default class Check {
  static isAdmin(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
      res.status(401).send({
        message: 'provide token',
      });
    }

    jwt.verify(authorization, SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: 'invalid token',
        });
      }

      if (decoded.role !== 'admin') {
        res.status(403).send({
          message: 'unauthorised',
        });
      }
      next();
    });
  }

  static isAttendant(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
      res.status(401).send({
        message: 'provide token',
      });
    }

    jwt.verify(authorization, SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: 'invalid token',
        });
      }

      if (decoded.role !== 'attendant') {
        res.status(403).send({
          message: 'unauthorised',
        });
      }
      next();
    });
  }
}
