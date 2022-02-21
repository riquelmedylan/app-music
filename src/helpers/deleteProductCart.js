import axios from "axios";

export const deleteProductCart = (uid, _id) => {
     axios({
          method: "PUT",
          url: `http://localhost:8080/user/shopping/${uid}`,
          data: { _id: _id },
     });
};
