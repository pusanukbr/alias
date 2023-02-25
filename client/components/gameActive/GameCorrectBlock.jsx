import React from 'react';

function GameCorrectBlock({ win }) {
  return (
    <div className="correctBlock">
      {win.map((word) => (
        <div key={word.slice(' ')[0]}>{word}</div>
      ))}
    </div>
  );
}

export default GameCorrectBlock;
