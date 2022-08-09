const RoomsModel = require('../models/rooms');
const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dtos');
const ApiError = require('../exceptions/api-error');

class UserService {

  async signin(name, password) {
    const users = await UserModel.find({ name });
    let user;
    if (Boolean(users.length)) {
      user = users.find(async (user) => await bcrypt.compare(password, user.password));
      if (!user) {
        throw ApiError.BadRequest('Неверный пароль');
      }
    } else {
      const hashPassword = await bcrypt.hash(password, 3);
      user = await UserModel.create({ name, password: hashPassword });
    }
    
    const userDto = new UserDto(user)
    const tokens = tokenService.genarateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    }
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if(!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDB) {
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.genarateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user
    }
  }
}

module.exports = new UserService();