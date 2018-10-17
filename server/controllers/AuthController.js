import jwt from 'jsonwebtoken';
import Users from '../../model/Users';
import dotenv from 'dotenv';

dotenv.config();

const { SECRET } = process.env;

class AuthController {
  static login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        message: 'email and password fields are required',
      });
    }
    const userFound = Users.filter((user) => {
      let checkedUser;
      if (user.email === email && user.password === password) {
        checkedUser = user;
      }
      return checkedUser;
    });

    if (userFound.length) {
      const userPayload = {
        id: userFound[0].id,
        role: userFound[0].role,
      };
      const token = jwt.sign(userPayload, SECRET);
      return res.status(200).send({
        message: 'login successful',
        token,
      });
    }
    return res.status(401).send({
      message: 'login not successful',
    });
  }
}

export default AuthController;
