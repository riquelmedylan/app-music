import React, { useEffect, useState } from "react";
import { getUserShoppingCart } from "../../../helpers/getRequestUser";
import { ProductCartUser } from "./ProductCartUser";

export const ShoppingCartScreen = () => {
     const [arrayCart, setArrayCart] = useState([]);
     const [finalPrice, setFinalPrice] = useState(null);

     useEffect(() => {
          const isCart = async () => {
               const uid = localStorage.getItem("uid");
               const { finalPrice, shoppingCart } = await getUserShoppingCart(
                    uid
               );
               setFinalPrice(finalPrice);
               setArrayCart(shoppingCart);
          };
          isCart();
     }, []);

     return (
          <section className="center">
               <title className="container__main-text">
                    <h2>Shopping Cart</h2>
               </title>
               {arrayCart.length > 0 ? (
                    <>
                         <article className="main__container-cart">
                              {arrayCart.map((data, i) => (
                                   <div
                                        className="container__product-shop"
                                        key={i}
                                   >
                                        <ProductCartUser key={i} {...data} />
                                   </div>
                              ))}
                         </article>
                         <p className="final-price">
                              Precio total: {finalPrice}
                         </p>
                    </>
               ) : (
                    <h2>No hay productos en el carro</h2>
               )}
          </section>
     );
};
