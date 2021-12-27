import axios from "axios";

export const getProductsCategory = async (category) => {
     try {
          const { REACT_APP_GET_PRODUCTS } = process.env;

          const res = await axios.get(`${REACT_APP_GET_PRODUCTS}/${category}`);

          return await res.data.product;
     } catch (error) {
          return console.error(error);
     }
};
