import { Schema, model } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    require: true,
  },
});

export default model("User", schema);
