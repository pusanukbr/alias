const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');

class TokenService {
  genarateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30d'});
    return accessToken;
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  async findToken(token) {
    const tokenDB = await UserModel.findOne({ token });
    return tokenDB;
  }

  removeToken() {
    
  }
}

module.exports = new TokenService();