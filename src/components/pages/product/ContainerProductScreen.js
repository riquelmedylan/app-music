import React from "react";
import { Link } from "react-router-dom";

export const ContainerProductScreen = ({
     image,
     nameProductBrand,
     price,
     _id,
     category,
}) => {
     return (
          <Link to={`/product/${category}/${_id}`}>
               <article className="container__product">
                    <img
                         className="container__product-img"
                         src={image}
                         alt={nameProductBrand}
                    />
                    <div className="container__product-text">
                         <p>{nameProductBrand}</p>
                         <p>{price}</p>
                    </div>
               </article>
          </Link>
     );
};
