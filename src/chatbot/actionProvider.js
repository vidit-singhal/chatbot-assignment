import { useState } from 'react';
import React from 'react';
import { useUser } from './UserContext';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const { userName, setUserName, userAge, setUserAge } = useUser();
  const [chatCompleted, setChatCompleted] = useState(false);

  const afterAgeMessage = (selectedAge) => {
    if (!chatCompleted) {
      setUserAge(selectedAge);
      const message = createChatBotMessage('Thank you. In 5 seconds, bot will exit', { widget: 'countdown' });
      updateState(message);
      setChatCompleted(true);
    }
  }

  const afterNameMessage = (name) => {
    if (!chatCompleted) {
      setUserName(name);
      const message = createChatBotMessage('Enter your Age', { widget: 'ageselect' });
      updateState(message);
    }
  }

  const initialAction = () => {
    const message = createChatBotMessage('Enter your Name');
    updateState(message);
  }

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            afterNameMessage,
            afterAgeMessage
          },
          userName, // Pass userName to children components
          userAge,  // Pass userAge to children components
        });
      })}
    </div>
  );
  
};

export default ActionProvider;
