import React, { useEffect, useState } from "react";
import { getUserShoppingCart } from "../../../helpers/getRequestUser";
import { ComingSoon } from "../../ComingSoon";
import { ProductCartUser } from "./ProductCartUser";

export const ShoppingCartScreen = () => {
     const [arrayCart, setArrayCart] = useState([]);
     const [finalPrice, setFinalPrice] = useState(null);
     const [comingSoon, setComingSoon] = useState(false);
     const uid = localStorage.getItem("uid");

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

     const buyProducts = () => {
          setComingSoon(true);
     };

     return (
          <>
               {uid ? (
                    <section className="center">
                         <title className="container__main-text">
                              <h2>Shopping Cart</h2>
                         </title>
                         {arrayCart.length > 0 ? (
                              <>
                                   <article className={`main__container-cart`}>
                                        {arrayCart.map((data, i) => (
                                             <div key={i}>
                                                  <ProductCartUser
                                                       key={i}
                                                       finalPrice={finalPrice}
                                                       {...data}
                                                  />
                                             </div>
                                        ))}
                                   </article>
                                   <p className="final-price">
                                        Precio total: ${finalPrice}
                                   </p>
                                   <h2
                                        onClick={buyProducts}
                                        className="button-buy"
                                   >
                                        Comprar
                                   </h2>
                                   {comingSoon && (
                                        <ComingSoon
                                             setComingSoon={setComingSoon}
                                        />
                                   )}
                              </>
                         ) : (
                              <h2>No hay productos en el carro</h2>
                         )}
                    </section>
               ) : (
                    <h2>Tenes que iniciar Sesión</h2>
               )}
          </>
     );
};
