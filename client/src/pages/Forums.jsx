import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Dashboardview from "../components/Dashboardview";
// import App from "../realtimechat/App"; // Correct import path
// import AuthPage from "../realtimechat/AuthPage"; // Correct import path
import ChatsPage from "../realtimechat/ChatsPage"; // Correct import path
import useChatEngine from "../hooks/useChatEngine";
// import useAuthStore from "../store/auth.store";
const Forums = () => {
  // Assuming user is available from some context or state
  const { auth } = useChatEngine();
  const [user, setUser] = useState("");
  const _user = { username: "nige", secret: "nige", first_name: "nige" };

  const authenticateChatEngine = async () => {
    await auth(_user)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  useEffect(() => {
    authenticateChatEngine();
  }, []);

  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] border">
        <Sidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <Dashboardview />
        {/* <App />
      <AuthPage /> */}
        <ChatsPage username={user} /> {/* Pass the user object here */}
      </div>
    </div>
  );
};

export default Forums;
