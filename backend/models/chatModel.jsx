// chatname
// isgroupchat
// users
// latestmessage
// admin

import mongoose from "mongoose";
const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId, // this is for the user id
        ref: "User", // create a model for the user
      },
    ],
    // this is to show latest message in front/top
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  // also create a time stamp field .in mongoose so that when new chat appired then time also
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;
