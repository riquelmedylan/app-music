import axios from "axios";
const { REACT_APP_SECRET_OR_PRIVATE_KEY } = process.env;

export const getUserLogin = async (emailUser, pass) => {
     const res = await axios({
          method: "GET",
          url: `http://localhost:8080/user/${emailUser}/${pass}`,
     });

     const { token, email, msg, password, uid } = res.data;

     return { token, email, msg, password, uid };
};

export const getUserShoppingCart = async (uid) => {
     const res = await axios({
          method: "GET",
          url: `http://localhost:8080/user/id/${uid}`,
     });
     const { shoppingCart, finalPrice } = res.data;

     return { shoppingCart, finalPrice };
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

export const putUserShoppingCart = (uid, id, price) => {
     axios({
          method: "PUT",
          url: `http://localhost:8080/user/uid/${uid}`,
          data: { _id: id, amount: price },
     });
};
