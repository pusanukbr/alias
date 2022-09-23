const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dtos');
const userExceptTokenDto = require('../dtos/userExceptToken-dtos');
const ApiError = require('../exceptions/api-error');

class UserService {

  async signin(name, password, idRoom = '') {
    const users = await UserModel.find({ name });
    let user;
    if (Boolean(users.length)) {  // Авторизация
      user = users.find(async (item) => await bcrypt.compare(password, item.password)); // Проверяем на пароль
      console.log('user', user);
      if (!user) {
        // TODO: Переделать ошибки
        throw ApiError.BadRequest('Неверный пароль');
      }
    } else {  // Регистрация
      const hashPassword = await bcrypt.hash(password, 3);
      
      const token = tokenService.genarateToken({user, password: hashPassword, idRoom}); // генерим токен
      user = await UserModel.create({ login: name, password: hashPassword, idRoom, token });
      // await user.push({ token: token });
      user.save();
    }
    console.log('user---=======', user);
    const userDto = new UserDto(user); // Фильтруем данные от не нужных полей

    return { user: { ...userDto } };
  }

  async logout(deleteToken) {
    const token = await tokenService.removeToken(deleteToken); // TODO: removeToken
    return token;
  }

  async getUser(token) {
    console.log('getUser', token);
    if(!token) {
      throw ApiError.UnauthorizedError();
    }
    console.log('getUser after');
    const userData = tokenService.validateAccessToken(token);
    console.log('getUser', userData);
    const tokenFromDB = await tokenService.findToken(token);
    if (!userData || !tokenFromDB) {
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findById(userData.id);
    const dataExceptToken = new userExceptTokenDto(user);
    const newToken = tokenService.genarateTokens({...dataExceptToken});
    const userDto = new UserDto(tokenService.tokenSave(newToken, user.id));

    return userDto;
  }
}

module.exports = new UserService();