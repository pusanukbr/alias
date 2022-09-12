module.exports = class UserDto {
  idRoom = 0;
  token;
  login;
  id;

  constructor(model) {
    this.id = model._id;
    this.login = model.login;
    this.idRoom = model.idRoom;
    this.token = model.token;
  }
}