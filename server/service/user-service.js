import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import tokenService from "./token-service.js";
import userExceptTokenDto from "../dtos/userExceptToken-dtos.js";
import ApiError from "../exceptions/api-error.js";

export default class UserService {
  async registration({ name, email, password }) {
    const findUser = await UserModel.find({ email });
    if (findUser && findUser.length) {
      throw ApiError.BadRequest("Пользователь с таким Email уже существует");
    }

    // Регистрация
    const hashPassword = await bcrypt.hash(password, 3);
    const date = new Date().toISOString().slice(0, 10);
    const token = tokenService.genarateToken({ name, email }); // генерим токен
    const user = await UserModel.create({
      token,
      name,
      password: hashPassword,
      email,
      date,
    });
    user.save();

    return { user };
  }
  async signin({ password, email }) {
    const user = await UserModel.findOne({ email });
    if (!user) throw ApiError.BadRequest("Пользователь не найден");

    // Авторизация
    const passwordCompare = await bcrypt.compare(password, user.password); // Проверяем на пароль
    if (!passwordCompare) throw ApiError.BadRequest("Пароль не верен");

    const token = tokenService.genarateToken({ name: user.name, email }); // генерим токен
    user.token = token;
    user.save();

    return { user };
  }

  logout(deleteToken) {
    tokenService.removeToken(deleteToken);
    return;
  }

  async getUser(token) {
    if (!token) throw ApiError.UnauthorizedError();

    const userData = tokenService.validateAccessToken(token);
    if (!userData) throw ApiError.UnauthorizedError();

    const user = await UserModel.findOne({ email: userData.email });
    const dataExceptToken = new userExceptTokenDto(user);
    const newToken = tokenService.genarateToken({ ...dataExceptToken });
    user.token = newToken;
    user.save();

    return { user };
  }
}
