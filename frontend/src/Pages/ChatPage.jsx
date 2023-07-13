import axios from "axios";
import React, { useEffect, useState } from "react";

const ChatPage = () => {
  const [chats, setChat] = useState([]);

  // use axiox.get and  we get data in from backend to frontend

  // const fecthChats = async () => {
  //   const data = await axios.get("/api/chat");
  //   console.log(data);
  //   setChat(data);
  // };

  const fetchChats = async () => {
    const response = await axios.get("/api/chat");
    const data = response.data; // Access the 'data' property of the response
    console.log(data);
    setChat(data);
  };

  // useEffect is a hook in react which run when the component is render for the first time
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
      <p>heelo char</p>
    </div>
  );
};

export default ChatPage;
