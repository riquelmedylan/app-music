import axios from "axios";

export const getUserGoogle = (tokenId) => {
     axios({
          method: "POST",
          url: "http://localhost:8080/auth/google",
          data: { tokenId: tokenId },
     }).then((data) => console.log(data.data));
};
