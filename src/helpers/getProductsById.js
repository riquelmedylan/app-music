import axios from "axios";

export const getProductsById = async (categoryAndId) => {
     try {
          const { REACT_APP_GET_PRODUCTS } = process.env;

          const res = await axios.get(
               `${REACT_APP_GET_PRODUCTS}/${categoryAndId}`
          );
          return res.data;
     } catch (error) {
          console.error(error);
     }
};
