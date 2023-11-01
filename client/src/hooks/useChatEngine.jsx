import axios from "axios";

// "https://api.chatengine.io/users/",
//   { username: username, secret: username, first_name: username },
//   { headers: { "Private-Key": "73f23754-462e-4272-8660-c5f5ac432878" } };

const useChatEngine = () => {
  const auth = async (user) => {
    return await new Promise((resolve, reject) => {
      axios
        .put("https://api.chatengine.io/users/", user, {
          headers: { "Private-Key": "5ec26b0f-4db5-45a7-914f-4144ba7b57fc" },
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
