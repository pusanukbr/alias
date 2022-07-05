const RoomsModel = require('../models/rooms');
const bcrypt = require('bcrypt');
const tokenService = require('./token-service');
const RoomsDto = require('../dtos/rooms-dtos');
const ApiError = require('../exceptions/api-error');

class UserService {
  async login(roomId, login, password) {
    let room = await RoomsModel.findOne({roomId});
    if (room) {
      const isPassEquals = await bcrypt.compare(password, room.password);
      if (!isPassEquals) {
        throw ApiError.BadRequest('Неверный пароль');
      }
    } else {
      const hashPassword = await bcrypt.hash(password, 3);
      room = await RoomsModel.create({ roomId, login: [{userName: login}], password: hashPassword });
    }
    
    const roomsDto = new RoomsDto(room)
    const tokens = tokenService.genarateTokens({...roomsDto});
    await tokenService.saveToken(roomsDto.id, tokens.refreshToken);

    return {
      ...tokens,
      rooms: roomsDto
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
    const roomData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = await tokenService.findToken(refreshToken);
    if (!roomData || !tokenFromDB) {
      throw ApiError.UnauthorizedError();
    }
    const room = await RoomsModel.findById(roomData.id);
    const roomsDto = new RoomsDto(room);
    const tokens = tokenService.genarateTokens({...roomsDto});
    await tokenService.saveToken(roomsDto.id, tokens.refreshToken);

    return {
      ...tokens,
      rooms: roomsDto
    }
  }
}

module.exports = new UserService();