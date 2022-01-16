import React from "react";
import { useLocation } from "react-router-dom";
import { getPostProduct } from "../../../helpers/getPostProduct";

export const Product = ({ name, description, price, image, visited }) => {
     const { pathname } = useLocation();
     const id = pathname.substring(33);
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
                              <div key={i} className="single__container-imgs">
                                   <img
                                        className="much__imgs"
                                        src={colors}
                                        alt={name}
                                   />
                              </div>
                         ))}
               </div>
               <p>{name}</p>
               <div className="single__container-description">
                    <strong>Descripción:</strong>
                    <p>{description}</p>
               </div>
               <strong className="single__container-price">
                    Precio: {price}
               </strong>

               <button className="single__product-buy">Comprar</button>
          </section>
     );
};
