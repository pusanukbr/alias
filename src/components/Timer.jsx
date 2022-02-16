import { useTimer } from 'react-timer-hook';

function Timer({ expiryTimestamp }) {
  const { seconds } = useTimer({expiryTimestamp, autoStart: false});

  return (
    <div>
      <span>{seconds}</span>
    </div>
  );
}

export default Timer;