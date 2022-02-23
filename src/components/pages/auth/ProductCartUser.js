import React, { useState } from "react";
import { deleteProductCart } from "../../../helpers/deleteProductCart";

export const ProductCartUser = ({
     nameProductBrand,
     price,
     image,
     finalPrice,
     _id,
}) => {
     const uid = localStorage.getItem("uid");
     const [transition, setTransition] = useState(false);
     const [display, setDisplay] = useState(false);

     const deleteProduct = (e) => {
          e.preventDefault();
          deleteProductCart(uid, _id, price, finalPrice);
          setTransition(true);
          setTimeout(() => {
               setDisplay(true);
               window.location.reload(true);
          }, 500);
     };

     return (
          <div
               className={`container__product-shop ${
                    transition ? "delete__cart-product--animation" : ""
               } ${display ? "delete___content" : ""}`}
          >
               <div className="container__product-user">
                    <div className="container__image-cart">
                         <img
                              className="image__productCart"
                              src={image[0]}
                              alt={nameProductBrand}
                         />
                    </div>
                    <div className="container__info">
                         <div className="container__name">
                              <p className="name__product">
                                   {nameProductBrand}
                              </p>
                         </div>
                         <div className="items__footer">
                              {/* <div className="item__quantity">
                                   <p>1</p>
                                   <button className="quantity__button">
                                        +
                                   </button>
                                   <button className="quantity__button">
                                        -
                                   </button>
                              </div> */}
                              <div>
                                   <p>Precio: ${price}</p>
                              </div>
                         </div>
                    </div>
               </div>
               <button
                    onClick={deleteProduct}
                    className="button__delate-product"
               >
                    Delete
               </button>
          </div>
     );
};
