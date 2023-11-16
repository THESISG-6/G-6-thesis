import React, { useEffect } from "react";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
import useAuthStore from "../store/auth.store";

const ChatsPage = ({ username }) => {
  const { user } = useAuthStore();
  const chatProps = useMultiChatLogic(
    "ff6458f9-303c-41e7-8254-760a56de2d42",
    user.username, //. Use the passed username prop
    user.username // Use the passed username prop
  );

  useEffect(() => {
    console.log("Chatspage:", user);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatsPage;
