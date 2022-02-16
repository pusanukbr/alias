import React, { useState, useEffect } from 'react';
import './Game.css';
// import socket from '../socket';
import Timer from './Timer';

function Chat({ userName, roomId, word, newWord, startTimer, stateTimer }) {
  return (
    <div className='game'>
        <div className='game__gamer'>Игрок <span>({userName})</span></div>
        <div className='game__id'>Id room <span>({roomId})</span></div>
        <div className='game__score'>Счет <strong>0</strong> - <strong>1</strong></div>
        <div className='game__points'>Баллы <strong>0</strong></div>
        <div className='game__pass'>Пропуски <strong>0</strong></div>
        <div className='game__timer'>{stateTimer}</div>
        <div className='game__word'>{word}</div>
        <div className='game__start'>
          <button
           type="button"
            className='btn btn-secondary btn__start'
            onClick={startTimer}>Start</button>
          </div>
        <div className='game__button'>
          <button type="button" className='btn btn-primary btn__right' onClick={newWord}>Угадал</button>
          <button type="button" className='btn btn-warning btn__pass'onClick={newWord}>Не Угадал</button>
        </div>
        <div className='game_continue'>
          <button type="button" className='btn btn-secondary btn__continue'>Продолжить</button>
        </div>
    </div>
  );
}

export default Chat;