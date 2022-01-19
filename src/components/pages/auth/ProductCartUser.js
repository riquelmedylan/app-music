import React from "react";

export const ProductCartUser = ({
     nameProductBrand,
     price,
     image,
     _id,
     quantity,
}) => {
     console.log(nameProductBrand, price, image, _id, quantity);
     return (
          <>
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
                              <div className="item__quantity">
                                   <p>1</p>
                                   <button className="quantity__button">
                                        +
                                   </button>
                                   <button className="quantity__button">
                                        -
                                   </button>
                              </div>
                              <div>
                                   <p>{price}</p>
                              </div>
                         </div>
                    </div>
               </div>
               <button className="button__delate-product">Delete</button>
          </>
     );
};
