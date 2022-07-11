import $api from "../http";

export default class AuthService {
  static async login(roomId, login, password) {
    return $api.post('/login', { roomId, login, password });
  }

  static async logout() {
    return $api.post('/logout');
  }

  static async checkAuth() {
    return $api.get('/refresh');
  }
}