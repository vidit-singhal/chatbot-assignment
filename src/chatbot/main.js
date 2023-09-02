import React from 'react'
import {useNavigate} from "react-router-dom"


const Main = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/chatbot"); // Navigate to the chatbot page
  };

  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={handleButtonClick}>Go to Chatbot</button>
    </div>
  );
}

export default Main