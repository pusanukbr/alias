module.exports = class RoomsDto {
  roomId;
  login;
  id;
  constructor(model) {
    this.roomId = model.roomId;
    this.id = model._id;
    this.login = model.login;
  }
}