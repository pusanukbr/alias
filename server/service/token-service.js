import jwt from 'jsonwebtoken';
import UserModel from '../models/user.js';

class TokenService {
  genarateToken(payload) {
    try {
      // eslint-disable-next-line no-undef
      const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30d' });
      return accessToken;
    } catch (e) {
      return null;
    }
  }

  validateAccessToken(token) {
    try {
      // eslint-disable-next-line no-undef
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  async findToken(token) {
    try {
      const tokenDB = await UserModel.findOne({ token });
      return tokenDB;
    } catch (e) {
      return null;
    }
  }

  removeToken(token) {
    try {
      const user = this.findToken(token);
      delete user.token;
      user.save();
    } catch (e) {
      return null;
    }
  }
}

export default new TokenService();
