import { useRef, useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../helpers/getRequestProduct";

export const useGetProducts = () => {
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
          getProducts().then(
               (data) =>
                    isMounted &&
                    setTimeout(() => {
                         setDataProducts({ data, loading: false });
                    }, 2000)
          );
     }, []);

     return dataProducts;
};
