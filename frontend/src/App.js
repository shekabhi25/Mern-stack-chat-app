// import { Button } from "@chakra-ui/react";
import "./App.css";

import { Route } from "react-router-dom";
// import ReactDOM from "react-dom";

import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div>
      <Route path="/" component={HomePage} exact></Route>
      <Route path="/chat" component={ChatPage}></Route>
    </div>
  );
}

export default App;
