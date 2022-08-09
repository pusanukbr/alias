const userService = require('../service/user-service');

class UserController {

  async signin(req, res, next) {
    try {
      const { name, password } = req.body;
      const userData = await userService.signin(name, password);
      console.log('userData', userData);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookie;
      const token = await userService.logout(refreshToken);
      res.clearCookies('refreshToken');
      return res.json(token);
    } catch (e) {
      next(e)
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const roomData = await userService.refresh(refreshToken);
      res.cookie('refreshToken', roomData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      roomData.test = 'test';
      return res.json(roomData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();