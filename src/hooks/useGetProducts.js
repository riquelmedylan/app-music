import { useRef, useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../helpers/getRequestProduct";

export const useGetProducts = () => {
     const user = localStorage.getItem("user");

     const isMounted = useRef(true);

     const [dataProducts, setDataProducts] = useState({
          data: null,
          loading: true,
     });

     useEffect(() => {
          return () => {
               isMounted.current = false;
          };
     }, []);

     useEffect(() => {
          user &&
               getProducts().then(
                    (data) =>
                         isMounted &&
                         setTimeout(() => {
                              setDataProducts({ data, loading: false });
                         }, 2000)
               );
     }, [user]);
     console.log(dataProducts);
     return dataProducts;
};
