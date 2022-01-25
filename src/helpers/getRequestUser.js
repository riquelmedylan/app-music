import axios from "axios";
const { REACT_APP_SECRET_OR_PRIVATE_KEY } = process.env;
export const getUserLogin = async (emailUser, pass) => {
     try {
          const res = await axios({
               method: "GET",
               url: `http://localhost:8080/user/${emailUser}/${pass}`,
          });

          const { token, email, msg, password, uid } = res.data;

          return { token, email, msg, password, uid };
     } catch (error) {
          throw new Error(error);
     }
};

export const getUserShoppingCart = async (uid) => {
     try {
          const res = await axios({
               method: "GET",
               url: `http://localhost:8080/user/id/${uid}`,
          });
          console.log(res.data.shoppingCart);
          return res.data.shoppingCart;
     } catch (error) {
          throw new Error(error);
     }
};

export const postUser = async (nickname, email, password, token) => {
     const res = await axios({
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
     });
     return res.data.user.uid;
};

export const postUserGoogle = async (tokenId) => {
     const res = await axios({
          method: "POST",
          url: "http://localhost:8080/auth/google",
          data: { tokenId: tokenId },
     });
     return res.data.user.uid;
};

export const putUserShoppingCart = (uid, id) => {
     axios({
          method: "PUT",
          url: `http://localhost:8080/user/uid/${uid}`,
          data: { _id: id },
     });
};
