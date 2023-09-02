import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../chatbot/UserContext';

const Countdown = (chatCompleted) => {
  const { userName, userAge } = useUser();
  const countdownTime = 5;
  const navigate = useNavigate();
  
  const [secondsRemaining, setSecondsRemaining] = useState(countdownTime);

  useEffect(() => {
    if (chatCompleted) {
      const timerInterval = setInterval(() => {
        setSecondsRemaining((prevSeconds) => {
          if (prevSeconds <= 0) {
            clearInterval(timerInterval);
            navigate(`/LastPage/${userName}/${userAge}`);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [navigate, userName, userAge, chatCompleted]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <>
      <div id="countdown">Countdown: {minutes}:{seconds < 10 ? '0' : ''}{seconds}</div>
    </>
  );
};


export default Countdown;
