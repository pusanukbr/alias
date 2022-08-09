const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token');

class TokenService {
  genarateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '40m'})
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '24h'})
    return {
      accessToken,
      refreshToken
    }
  }

  validateAccessToken(token) {
    try {
      const roomData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return roomData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const roomData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return roomData;
    } catch (e) {
      return null
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await tokenModel.create({userId, refreshToken});
    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await tokenModel.deleteOne({refreshToken});
    return tokenData;
  }

  async findToken(refreshToken) {
    const tokenData = await tokenModel.findOne({refreshToken});
    return tokenData;
  }
}

module.exports = new TokenService();