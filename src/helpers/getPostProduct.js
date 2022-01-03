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
