import dotenv from 'dotenv';
import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
const app = express();
import http from 'http';
const server = http.Server(app);
// const io = require('socket.io')(server, { cors: { origin: '*' } });
import cors from 'cors';
import { connect } from 'mongoose';

import router from './routers/index.js';
const PORT = process.env.PORT_SERVER || 4000;

dotenv.config();

// setting
app.use(
  cors({ credentials: true, origin: process.env.CLIENT_URL }),
  json(),
  urlencoded({ extended: true }),
  cookieParser()
);

app.use('/', router);

const startServer = async () => {
  try {
    await connect(process.env.DB_URL, { useNewUrlParser: true });
    server.listen(PORT, () => console.log(`Server start on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
// client
// app.use(authRouter);

// app.post('/login', async (req, res) => {
//   try {
//     const { userName, roomId, password } = req.body;

//     const roomsHas = await Rooms.findOne({ roomId: roomId });
//     const hashPassword = bcrypt.hashSync(password, 7)
//     if(!roomsHas) {
//       const roomsTest = new Rooms({
//         roomId,
//         users: [{
//           userName,
//         }],
//         password: hashPassword,
//       });
//       await roomsTest.save();
//       return req.json();
//     }
//     roomsHas.users.push({ userName: userName });
//     await roomsHas.save();
//     return req.json();
//   } catch (e) {
//       res.send({message: "Server error"})
//   }
//   // res.send({
//   //   roomId,
//   //   userName,
//   //   test: 'test',
//   // });
// })

// // socket
// io.on('connection', (socket) => {
//   console.log('connection');
//   socket.on('ROOM:JOIN', async ({ roomId, userName }) => {
//     socket.join(roomId);
//     socket.to(roomId).emit('ROOM:SET_USERS');
//     // test
//     const roomsHas = await Rooms.findOne({ roomId: roomId });
//     if(!roomsHas) {
//       // const roomsTest = new Rooms({
//       //   roomId,
//       //   users: [{
//       //     userName,
//       //   }],
//       // })
//       // await roomsTest.save();
//     } else {
//       // roomsHas.users.push({userName: userName});
//       // await roomsHas.save();
//     }
//   });

//   socket.on('ROOM:NEW_MESSAGES', ({ roomId, userName, text }) => {
//     const obj = {
//       userName,
//       text,
//     }
//     socket.to(roomId).emit('ROOM:SET_MESSAGES', obj);
//   });
//   socket.on('disconnect', () => {
//     console.log('disconnect');
//   })
// })

// server
startServer();
