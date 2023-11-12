import axios from "axios";



const useChatEngine = () => {
  const auth = async (user) => {
    return await new Promise((resolve, reject) => {
      axios
        .put("https://api.chatengine.io/users/", user, {
          headers: { "Private-Key": "0553c728-18f4-478f-b8ae-c73ae37390e8" },
        })
        .then((res) => {
          const data = res.data;
          const result = { ...user, data };
          resolve(result);
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  };
  return { auth };
};
export default useChatEngine;
