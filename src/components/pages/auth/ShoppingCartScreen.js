import React, { useEffect } from "react";
import { getUserShoppingCart } from "../../../helpers/getRequestUser";

export const ShoppingCartScreen = () => {
     const uid = localStorage.getItem("uid");

     const isCart = async () => {
          const data = await getUserShoppingCart(uid);
          console.log(data);
          return data;
     };

     useEffect(() => {
          isCart();
     });

     return (
          <div>
               <div className="container__main-text">
                    <h2>Shopping Cart</h2>
               </div>
               <section className="main__container"></section>
          </div>
     );
};
