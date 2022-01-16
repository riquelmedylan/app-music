import React from "react";
import { useLocation } from "react-router-dom";

import { useProduct } from "../../../hooks/useProduct";
import { Product } from "./Product";

export const BuyProduct = () => {
     const { pathname } = useLocation();
     const categoryAndId = pathname.substring(9);
     const product = useProduct(categoryAndId);

     return (
          <section className="single__product">
               {product && <Product {...product} />}
          </section>
     );
};
