import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../../hooks/useProduct";
import { Load } from "../../Load";
import { Product } from "./Product";

export const BuyProduct = () => {
     const { id, category } = useParams();
     const paramsData = `${category}/${id}`;

     const { data, loading } = useProduct(paramsData);

     return loading ? (
          <Load />
     ) : (
          <section className="single__product">
               {data && <Product {...data} />}
          </section>
     );
};
