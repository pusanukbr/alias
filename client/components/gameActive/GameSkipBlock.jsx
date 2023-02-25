import React from 'react';

function GameSkipBlock({ skip }) {
  return (
    <div className="skipBlock">
      {skip.map((word) => (
        <div key={word}>{word}</div>
      ))}
    </div>
  );
}

export default GameSkipBlock;
