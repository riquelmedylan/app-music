import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostProduct } from "../../../helpers/getPostProduct";
import { putUserShoppingCart } from "../../../helpers/getRequestUser";

export const Product = ({ name, description, price, image, visited }) => {
     const { id } = useParams();
     const navigate = useNavigate();

     const isBuy = (e) => {
          e.preventDefault();
          const uid = localStorage.getItem("uid");
          putUserShoppingCart(uid, id);
          navigate("/auth/shop");
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

               <button onClick={isBuy} className="single__product-buy">
                    Comprar
               </button>
          </section>
     );
};
