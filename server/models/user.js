const { Schema, model } = require('mongoose');

const schema = new Schema({
  idRoom: {
    type: String,
    required: false,
  },
  login: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
     required: true
  },
})

module.exports = model('User', schema)