import React from "react";

export const ContainerProductScreen = ({ image, nameProductBrand, price }) => {
     return (
          <div>
               <img src={image} alt={nameProductBrand} />
               <div>{nameProductBrand}</div>
               <div>{price}</div>
          </div>
     );
};
