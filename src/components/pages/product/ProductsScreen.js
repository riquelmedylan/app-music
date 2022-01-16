import React from "react";
import { useLocation } from "react-router-dom";
import { useProducts } from "../../../hooks/useProducts";
import { ContainerProductScreen } from "./ContainerProductScreen";

export const ProductsScreen = () => {
     const { pathname } = useLocation();
     const category = pathname.substring(9);
     const product = useProducts(category);
     return (
          <div>
               <div className="container__main-text">
                    {category === "electronica%20y%20audio" ? (
                         <h2>Electronica y audio</h2>
                    ) : (
                         <h2>
                              {category
                                   .charAt(0)
                                   .toUpperCase()
                                   .concat(
                                        category.substring(1, category.length)
                                   )}
                         </h2>
                    )}
               </div>

               <section className="main__container">
                    {product &&
                         product.map((data, i) => (
                              <ContainerProductScreen
                                   {...data}
                                   category={category}
                                   key={i}
                              />
                         ))}
               </section>
          </div>
     );
};
