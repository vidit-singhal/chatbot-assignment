import React from "react";
import Chatbot from 'react-chatbot-kit';

import 'react-chatbot-kit/build/main.css';

import Config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/actionProvider";
import LastPage from "./chatbot/lastPage";

import './App.css';

function ChatBot() {
  return (
    <div className="App">
        <div style={{maxwidth : "300px"}}>
          <Chatbot config = {Config} messageParser={MessageParser} actionProvider={ActionProvider}/>
          
        </div>
        
        
    </div>
  );
}

export default ChatBot;
