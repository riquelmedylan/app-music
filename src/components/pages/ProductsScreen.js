import React from "react";
import { useLocation } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { ContainerProductScreen } from "./ContainerProductScreen";

export const ProductsScreen = () => {
     const { pathname } = useLocation();
     const category = pathname.substring(9);
     console.log(category);
     const eso = useProducts(category);
     console.log(eso);
     return (
          <div className="main__container">
               {category === "electronica%20y%20audio" ? (
                    <h2>Electronica y audio</h2>
               ) : (
                    <h2>
                         {category
                              .charAt(0)
                              .toUpperCase()
                              .concat(category.substring(1, category.length))}
                    </h2>
               )}

               {eso &&
                    eso.map((data, i) => (
                         <ContainerProductScreen {...data} key={i} />
                    ))}
          </div>
     );
};
