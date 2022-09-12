const userService = require('../service/user-service');
const ApiError = require('../exceptions/api-error');

class UserController {

  async signin(req, res, next) {
    try {
      const { name, password } = req.body;
      const userData = await userService.signin(name, password);
      console.log('userData', userData);
      // res.cookie('refreshToken', userData.token, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookie;
      const token = await userService.logout(refreshToken);
      // res.clearCookies('refreshToken');
      return res.json(token);
    } catch (e) {
      next(e)
    }
  }

  async getUser(req, res, next) {
    try {
      let token = req.headers.authorization;
      if (token) token = token.split(' ')[1];
      const roomData = await userService.getUser(token);
      return res.json(roomData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();