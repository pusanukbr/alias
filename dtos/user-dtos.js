module.exports = class RoomsDto {
  idRoom = 0;
  login;
  id;
  constructor(model) {
    this.idRoom = model.idRoom;
    this.id = model._id;
    this.login = model.login;
  }
}