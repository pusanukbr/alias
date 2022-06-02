const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });
const cors = require('cors');
const mongoose = require('mongoose');

const authRouter = require('./authRouter');

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
// app.use('/login', authRouter);

app.post('/rooms', async (req, res) => {

  console.log('test');
  const { roomId, userName } = await req.body;
  const roomsHas = await Rooms.findOne({ roomId: roomId });
  if(!roomsHas) {
    const roomsTest = new Rooms({
      roomId,
      users: [{
        userName,
      }],
    })
    await roomsTest.save();
  } else {
    roomsHas.users.push({userName: userName});
    await roomsHas.save();
  }

  res.send({
    roomId,
    userName,
    test: 'test',  
  });
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