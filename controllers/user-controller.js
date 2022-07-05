const userService = require('../service/user-service');

class UserController {

  async login(req, res, next) {
    try {
      const { roomId, login, password } = req.body;
      const userData = await userService.login(roomId, login, password);
      console.log(userData);
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
      console.log('cooki', req);
      const { refreshToken } = req.cookies;
      const roomData = await userService.refresh(refreshToken);
      res.cookie('refreshToken', roomData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(roomData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();