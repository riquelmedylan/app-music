import axios from "axios";

export const getProductsCategory = async (category) => {
     const { REACT_APP_URI_PRODUCTS } = process.env;

     const res = await axios.get(`${REACT_APP_URI_PRODUCTS}/${category}`);

     return await res.data.product;
};

export const getProducts = async () => {
     const { REACT_APP_URI } = process.env;

     const res = await axios.get(`${REACT_APP_URI}products`);

     return await res.data.products;
};

export const getProductsById = async (categoryAndId) => {
     const { REACT_APP_URI_PRODUCTS } = process.env;

     const res = await axios.get(`${REACT_APP_URI_PRODUCTS}/${categoryAndId}`);

     return res.data;
};

export const getPostProduct = async (id, number) => {
     const { REACT_APP_URI_PRODUCTS } = process.env;
     await fetch(`${REACT_APP_URI_PRODUCTS}/${id}`, {
          method: "PUT",
          headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
          },
          body: JSON.stringify({ visited: number + 1 }),
     });
};
