import $api from '../http';
export default class AuthService {
  static async signin(password, email) {
    return $api.post('/signin', { password, email });
  }

  static async registration(name, password, email) {
    return $api.post('/registration', { name, password, email });
  }

  static async logout() {
    return $api.post('/logout');
  }
}
