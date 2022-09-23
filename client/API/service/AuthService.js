import $api from "../http";

export default class AuthService {

  static async signin(name, password, idRoom) {
    return $api.post('/signin', { name, password, idRoom });
  }

  static async logout() {
    return $api.post('/logout');
  }
}