import { Schema, model } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    required: false,
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
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  roomCreated: {
    type: Number,
    required: false,
  },
  gaming: {
    type: Number,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  roomsHistory: {
    type: Array,
    required: false,
  },
});

export default model("User", schema);
