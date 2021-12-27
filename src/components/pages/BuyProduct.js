import React from "react";
import { useLocation } from "react-router-dom";

import { useProduct } from "../../hooks/useProduct";

export const BuyProduct = () => {
     const { pathname } = useLocation();
     console.log(pathname);
     const categoryAndId = pathname.substring(9);
     const product = useProduct(categoryAndId);

     return (
          <div>
               <h1>hola</h1>
          </div>
     );
};
