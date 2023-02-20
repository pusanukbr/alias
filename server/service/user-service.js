const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dtos');
const userExceptTokenDto = require('../dtos/userExceptToken-dtos');
const ApiError = require('../exceptions/api-error');
const user = require('../models/user');

class UserService {
  async registration(name, password) {

  }
  async signin(name, password) {
    const users = await UserModel.find({ name });
    let user;
    let newToken = '';
    if (Object.keys(users)) {  // Авторизация
      user = users.find(async (item) => await bcrypt.compare(password, item.password)); // Проверяем на пароль
      if (!user) {
        // TODO: Переделать ошибки
        throw ApiError.BadRequest('Неверный пароль');
      }
      newToken = tokenService.genarateToken({ ...user }); // генерим токен
    } else {  // Регистрация
      const hashPassword = await bcrypt.hash(password, 3);
    
      user = await UserModel.create({ login: name, password: hashPassword, idRoom });
      newToken = tokenService.genarateToken({ ...user }); // генерим токен
      user.save();
    }
    user.token = newToken;
    const userDto = new UserDto(user); // Фильтруем данные от не нужных полей

    return { user: { ...userDto } };
  }

  async logout(deleteToken) {
    const token = await tokenService.removeToken(deleteToken); // TODO: removeToken
    return token;
  }

  async getUser(token) {
    if(!token) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateAccessToken(token);
    if (!userData) {
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findOne(userData._id);
    const dataExceptToken = new userExceptTokenDto(user);
    const newToken = tokenService.genarateToken({ ...dataExceptToken });
    user.token = newToken;
    const userDto = new UserDto(user);
    
    return { user: { ...userDto } };
  }
}

module.exports = new UserService();