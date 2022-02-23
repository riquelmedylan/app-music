import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getPostProduct } from "../../../helpers/getRequestProduct";
import { putUserShoppingCart } from "../../../helpers/getRequestUser";

export const Product = ({ name, description, price, image, visited }) => {
     const { id } = useParams();
     const [boolean, setBoolean] = useState(null);
     const isBuy = (e) => {
          e.preventDefault();
          const uid = localStorage.getItem("uid");
          putUserShoppingCart(uid, id, price);
          uid ? setBoolean(true) : setBoolean(false);
     };

     return (
          <section
               onLoad={() => {
                    getPostProduct(id, visited);
               }}
               className="single__product-container"
          >
               <img className="single__product-img" src={image[0]} alt={name} />
               <div className="single__container">
                    {image[0].length > 1 &&
                         image[0].map((colors, i) => (
                              <picture
                                   key={i}
                                   className="single__container-imgs"
                              >
                                   <img
                                        className="much__imgs"
                                        src={colors}
                                        alt={name}
                                   />
                              </picture>
                         ))}
               </div>
               <p>{name}</p>
               <div className="single__container-description">
                    <strong>Descripción:</strong>
                    <p>{description}</p>
               </div>
               <strong className="single__container-price">
                    Precio: ${price}
               </strong>

               <button onClick={isBuy} className="single__product-buy">
                    Comprar
               </button>
               {boolean === false && (
                    <div className="container__error-buy">
                         <p>Necesita iniciar sesion/registrarse para comprar</p>
                    </div>
               )}
               {boolean === true && (
                    <div className="container__check-buy">
                         <p>La compra se agregó al carrito</p>
                    </div>
               )}
          </section>
     );
};
