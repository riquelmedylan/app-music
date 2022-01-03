import { useEffect, useState } from "react";
import { getProductsById } from "../helpers/getProductsById";

export const useProduct = (categoryAndId) => {
     const [data, setData] = useState();
     useEffect(() => {
          getProductsById(categoryAndId).then((info) => {
               setData({
                    name: info.product.nameProductBrand,
                    description: info.product.descriptionProduct,
                    price: info.product.price,
                    image: [info.product.image],
                    category: info.product.category,
                    visited: info.product.visited,
                    productColors: [info.product.productColors],
               });
          });
     }, [categoryAndId]);
     return data;
};
