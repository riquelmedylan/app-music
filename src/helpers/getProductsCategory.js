import axios from "axios";

export const getProductsCategory = async (category) => {
     try {
          const { REACT_APP_URI_PRODUCTS } = process.env;
          const eso = process.env;
          console.log(eso);

          const res = await axios.get(`${REACT_APP_URI_PRODUCTS}/${category}`);
          return await res.data.product;
     } catch (error) {
          return console.error(error);
     }
};
