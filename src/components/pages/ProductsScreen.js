import React from "react";
import { useLocation } from "react-router-dom";
import { getProductsCategory } from "../../helpers/getProducts";
export const ProductsScreen = () => {
     const { pathname } = useLocation();
     const category = pathname.substring(9);
     console.log(category);
     getProductsCategory(category);

     return (
          <div className="main__container">
               <h2>Electronica y audio</h2>
          </div>
     );
};
