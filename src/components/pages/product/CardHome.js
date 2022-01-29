import React from "react";
import { Link } from "react-router-dom";

export const CardHome = (data) => {
     return (
          data && (
               <Link to={`/product/${data.category}/${data._id}`}>
                    <article className="card__swiper">
                         <picture className="card__picture">
                              <img
                                   className="card__img"
                                   alt={data.nameProductBrand}
                                   src={data.image}
                              />
                         </picture>
                         <section className="section__description">
                              <p>{data.nameProductBrand}</p>
                              <p>{data.price}</p>
                         </section>
                    </article>
               </Link>
          )
     );
};
