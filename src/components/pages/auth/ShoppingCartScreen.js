import React, { useEffect, useState } from "react";
import { getUserShoppingCart } from "../../../helpers/getRequestUser";
import { ProductCartUser } from "./ProductCartUser";

export const ShoppingCartScreen = (key) => {
     const [arrayCart, setArrayCart] = useState([]);
     console.log(arrayCart);
     useEffect(() => {
          const uid = localStorage.getItem("uid");
          const isCart = async () => {
               const data = await getUserShoppingCart(uid);
               return setArrayCart(data);
          };
          isCart();
     }, []);

     return (
          <div className="center">
               <div className="container__main-text">
                    <h2>Shopping Cart</h2>
               </div>
               <section className="main__container-cart">
                    {arrayCart.length > 0 &&
                         arrayCart.map((data, i) => (
                              <div className="container__product-shop" key={i}>
                                   <ProductCartUser key={i} {...data} />
                              </div>
                         ))}
               </section>
          </div>
     );
};
