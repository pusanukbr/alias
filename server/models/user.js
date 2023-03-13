import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    require: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  }
});

export default model('User', schema);
