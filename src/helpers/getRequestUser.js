import axios from "axios";
const { REACT_APP_SECRET_OR_PRIVATE_KEY } = process.env;
export const getUserLogin = async (emailUser, pass) => {
     try {
          const res = await axios({
               method: "GET",
               url: `http://localhost:8080/user/${emailUser}/${pass}`,
          });

          const { token, email, msg, password } = res.data;

          return { token, email, msg, password };
     } catch (error) {
          throw new Error(error);
     }
};

export const postUser = (nickname, email, password, token) => {
     axios({
          method: "POST",
          url: "http://localhost:8080/user/",
          headers: {
               Authorization: REACT_APP_SECRET_OR_PRIVATE_KEY,
          },
          data: {
               nickname: nickname,
               email: email,
               password: password,
               token: token,
          },
     }).then((data) => data);
};

export const postUserGoogle = (tokenId) => {
     axios({
          method: "POST",
          url: "http://localhost:8080/auth/google",
          data: { tokenId: tokenId },
     }).then((data) => console.log(data.data));
};
