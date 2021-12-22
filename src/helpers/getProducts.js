import axios from "axios";

export const getProductsCategory = async (category) => {
     const { REACT_APP_GET_PRODUCTS_BY_CATEGORY } = process.env;

     const res = await axios.get(
          `${REACT_APP_GET_PRODUCTS_BY_CATEGORY}/${category}`
     );
     return console.log(res);
};
