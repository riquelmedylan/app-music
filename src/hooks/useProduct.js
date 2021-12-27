import { useEffect, useState } from "react";
import { getProductsById } from "../helpers/getProductsById";

export const useProduct = (categoryAndId) => {
     const [data, setData] = useState();
     useEffect(() => {
          getProductsById(categoryAndId).then((info) => {
               setData(info);
          });
     }, [categoryAndId]);
     return data;
};
