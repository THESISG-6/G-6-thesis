import React, { useEffect } from "react";
import ASidebar from "../../components/AlumniSide/ASidebar";
import AAlumniboardView from "../../components/AlumniSide/AAlumniboardView";
import ChatsPage from "../../realtimechat/ChatsPage";
import useChatEngine from "../../hooks/useChatEngine";
import useAuthStore from "../../store/auth.store";

const AForums = () => {
  const { auth } = useChatEngine();
  // const setUser = useAuthStore((state) => state.setUser);
  const { user, setUser } = useAuthStore();
  const _user = { username: "nige", secret: "nige", first_name: "nige" };

  const authenticateChatEngine = async () => {
    await auth(_user)
      .then((res) => {
        setUser(res);
        
        console.log("user: ", user);
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
        <ASidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <AAlumniboardView />
        <div>
          {/* <h1>User: {user.username}</h1> */}
          <ChatsPage username={user.username} />
        </div>
      </div>
    </div>
  );
};

export default AForums;
