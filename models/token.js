const { Schema, model } = require('mongoose');

const schema = new Schema ({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  refreshToken: {type: String, required: true}
})

module.exports = model('Token', schema)