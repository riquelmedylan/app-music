import React from "react";
import { useProducts } from "../../../hooks/useProducts";
import { ContainerProductScreen } from "./ContainerProductScreen";
export const InstrumentProductScreen = ({ product }) => {
     const category = useProducts(product);

     return (
          <div className="container__products-section">
               {product && (
                    <>
                         <h2>
                              {product
                                   .charAt(0)
                                   .toUpperCase()
                                   .concat(
                                        product.substring(1, product.length)
                                   )}
                         </h2>
                         <section className="main__container">
                              {category &&
                                   category.map((data, i) => (
                                        <ContainerProductScreen
                                             {...data}
                                             key={i}
                                        />
                                   ))}
                         </section>
                    </>
               )}
          </div>
     );
};
