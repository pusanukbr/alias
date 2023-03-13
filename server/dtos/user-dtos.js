export default class UserDto {
  token;
  email;
  name;
  id;

  constructor(model) {
    this.id = model._id;
    this.name = model.name;
    this.email = model.email;
    this.token = model.token;
  }
}
