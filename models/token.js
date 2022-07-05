const { Schema, model } = require('mongoose');

const schema = new Schema ({
  roomId: {type: Schema.Types.ObjectId, ref: 'Rooms'},
  refreshToken: {type: String, required: true}
})

module.exports = model('Token', schema)