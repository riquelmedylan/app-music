import axios from "axios";

export const getProductsCategory = async (category) => {
     try {
          const { REACT_APP_URI_PRODUCTS } = process.env;

          const res = await axios.get(`${REACT_APP_URI_PRODUCTS}/${category}`);

          return await res.data.product;
     } catch (error) {
          return console.error(error);
     }
};

export const getProducts = async () => {
     const { REACT_APP_URI } = process.env;

     const res = await axios.get(`${REACT_APP_URI}products`);

     return await res.data.products;
};

export const getProductsById = async (categoryAndId) => {
     try {
          const { REACT_APP_URI_PRODUCTS } = process.env;

          const res = await axios.get(
               `${REACT_APP_URI_PRODUCTS}/${categoryAndId}`
          );

          return res.data;
     } catch (error) {
          console.error(error);
     }
};

export const getPostProduct = async (id, number) => {
     try {
          const { REACT_APP_URI_PRODUCTS } = process.env;
          await fetch(`${REACT_APP_URI_PRODUCTS}/${id}`, {
               method: "PUT",
               headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({ visited: number + 1 }),
          });
     } catch (error) {
          console.error(error);
     }
};
