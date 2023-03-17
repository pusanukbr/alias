import userService from "../service/user-service.js";

export default class UserController {
  async registration(req, res, next) {
    try {
      const userData = await new userService().registration(req.body);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async signin(req, res, next) {
    try {
      const userData = await new userService().signin(req.body);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  logout(req, res, next) {
    try {
      let token = req.headers.authorization;
      if (token) token = token.split(" ")[1];
      new userService().logout(token);
      return res.status(200).send("logOut");
    } catch (e) {
      next(e);
    }
  }

  async getUser(req, res, next) {
    try {
      let token = req.headers.authorization;
      if (token) token = token.split(" ")[1];
      const userData = await new userService().getUser(token);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
}