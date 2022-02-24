import axios from "axios";

export const deleteProductCart = (uid, _id, price, finalPrice) => {
     axios({
          method: "PUT",
          url: `https://app-music-be.herokuapp.com/user/shopping/${uid}`,
          data: { _id: _id, price: price, finalPrice: finalPrice.toFixed(3) },
     });
};
