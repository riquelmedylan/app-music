import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../hooks/useProducts";
import { ContainerProductScreen } from "./ContainerProductScreen";

export const ProductsScreen = () => {
     const { category } = useParams();

     const product = useProducts(category);
     return (
          <div>
               <div className="container__main-text">
                    <h2>
                         {category
                              .charAt(0)
                              .toUpperCase()
                              .concat(category.substring(1, category.length))}
                    </h2>
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
