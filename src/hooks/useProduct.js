import { useEffect, useRef, useState } from "react";
import { getProductsById } from "../helpers/getRequestProduct";

export const useProduct = (categoryAndId) => {
     const isMounted = useRef(true);

     const [data, setData] = useState({ data: null, loading: true });

     useEffect(() => {
          return () => {
               isMounted.current = false;
          };
     }, []);

     useEffect(() => {
          getProductsById(categoryAndId).then((info) => {
               isMounted &&
                    setTimeout(() => {
                         setData({
                              data: {
                                   name: info.product.nameProductBrand,
                                   description: info.product.descriptionProduct,
                                   price: info.product.price,
                                   image: [info.product.image],
                                   category: info.product.category,
                                   visited: info.product.visited,
                                   productColors: [info.product.productColors],
                              },
                              loading: false,
                         });
                    }, 2000);
          });
     }, [categoryAndId]);
     return data;
};
