const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Rooms = require('./models/rooms');

// Date Base MongoDB
function startDB() {
  try {
    mongoose.connect('mongodb+srv://alias_bd:v4XGaWSMVemXrFZ6@cluster0.1iraz.mongodb.net/aliasDB', {
      useNewUrlParser: true,
    });
  } catch (e) {
    console.error(e);
  }
}
async function startServer() {
  await server.listen(8080, (err) => {
    if(err) {
        throw Error(err);
    } else {
      console.log('Server started!');
    }
  });
}

// CORS setting
app.use(
  cors({
    origin: '*',
  }),
  express.json(),
  express.urlencoded({ extended: true })
)

// client
// app.use(authRouter);

app.post('/login', async (req, res) => {
  try {
    const { userName, roomId, password } = req.body;

    const roomsHas = await Rooms.findOne({ roomId: roomId });
    const hashPassword = bcrypt.hashSync(password, 7)
    if(!roomsHas) {
      const roomsTest = new Rooms({
        roomId,
        users: [{
          userName,
        }],
        password: hashPassword,
      });
      await roomsTest.save();
      return req.json();
    }
    roomsHas.users.push({ userName: userName });
    await roomsHas.save();
    return req.json();
  } catch (e) {
      res.send({message: "Server error"})
  }
  // res.send({
  //   roomId,
  //   userName,
  //   test: 'test',  
  // });
})


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

// START server and DB
startDB()

// server
startServer();