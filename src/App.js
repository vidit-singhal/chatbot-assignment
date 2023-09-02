import React from "react";
import Chatbot from "react-chatbot-kit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes from react-router-dom

import "react-chatbot-kit/build/main.css";

import Config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/actionProvider";
import LastPage from "./chatbot/lastPage"; // Import the LastPage component
import Main from "./chatbot/main";

import "./App.css";

import { UserProvider } from './chatbot/UserContext';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/LastPage/:name/:age" element={<LastPage />} />
          <Route
            path="/chatbot"
            element={
              <UserProvider>
                <ActionProvider>
                  <Chatbot config={Config} messageParser={MessageParser} actionProvider={ActionProvider} />
                </ActionProvider>
              </UserProvider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



