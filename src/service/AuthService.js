import $api from "../http";

export default class AuthService {

  static async signin(name, password) {
    return $api.post('/signin', { name, password });
  }

  static async logout() {
    return $api.post('/logout');
  }
}