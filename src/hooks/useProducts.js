import { useEffect, useState } from "react";
import { getProductsCategory } from "../helpers/getRequestProduct";

export const useProducts = (category) => {
     const [data, setData] = useState();

     useEffect(() => {
          getProductsCategory(category).then((data) => setData(data));
     }, [category]);

     return data;
};
