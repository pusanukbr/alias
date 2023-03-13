export default class UserDto {
  name;
  email;

  constructor(model) {
    this.id = model.email;
    this.login = model.name;
  }
}
