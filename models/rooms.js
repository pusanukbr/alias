const { Schema, model } = require('mongoose');

const schema = new Schema ({
  roomId: {
    type: String,
    required: true,
  },
  users: [
    {
      userName: {
        type: String,
        require: true,
      },
    }
  ],
})

module.exports = model('Rooms', schema)