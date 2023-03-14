export default class UserDto {
  name;
  email;

  constructor(model) {
    this.email = model.email;
    this.name = model.name;
  }
}
