require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const server = require('http').Server(app);
// eslint-disable-next-line no-unused-vars
const io = require('socket.io')(server, { cors: { origin: '*' } });
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./routers/index');
// eslint-disable-next-line no-undef
const PORT = process.env.PORT_SERVER || 4000;

// setting
app.use(
  // eslint-disable-next-line no-undef
  cors({ credentials: true, origin: process.env.CLIENT_URL }),
  express.json(),
  express.urlencoded({ extended: true }),
  cookieParser()
);

app.use('/', router);

const startServer = async () => {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
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
