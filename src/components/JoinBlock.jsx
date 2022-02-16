import React from "react";
import './JoinBlock.css';


function JoinBlock({ onLogin }) {
  const [roomId, setRoomId] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = () => {
    if(!roomId || !userName) {
      return alert('Введите данные!')
    }
    const obj = {
      roomId,
      userName
    }
    setLoading(true)
    // await axios.post('/rooms', obj);
    onLogin(obj);
  }
  return (
    <div className="join-block">
      <input
      type='text'
      placeholder="Room ID"
      onChange={(e) => setRoomId(e.target.value)}
      value={roomId}/>
      <input
      type='text'
      placeholder="Ваше имя"
      onChange={(e) => setUserName(e.target.value)}
      value={userName}/>
      <button disabled={isLoading} className="btn btn-success" onClick={onEnter}>
        {isLoading ? 'Вход...' : 'Войти'}
        </button>
    </div>
  );
}

export default JoinBlock;