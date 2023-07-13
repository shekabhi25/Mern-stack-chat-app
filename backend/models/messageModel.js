import mongoose, { model } from "mongoose";

const messageModel = mongoose.Schema(
  {
    // 1) name of sender/ id of sender
    // 2) content of chat
    //    3) refrence to chat to it belong to

    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },

  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageModel);
modele.export = Message;
