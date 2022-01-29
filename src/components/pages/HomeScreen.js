import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { useGetProducts } from "../../hooks/useGetProducts";
import { Load } from "../Load";
import { CardHome } from "./product/CardHome";

export const HomeScreen = () => {
     const { data, loading } = useGetProducts();
     const dataArrayVisited = [];

     const isDataArrayVisited = () => {
          let visitedArray = [];
          data &&
               data.map((data) => {
                    visitedArray.push(data.visited);
                    return visitedArray.sort((a, b) => b - a);
               });
          const arrayVisited = visitedArray.slice(0, 8);

          arrayVisited.forEach((visited) => {
               data.forEach((data) => {
                    data.visited === visited && dataArrayVisited.push(data);
               });
          });
     };
     isDataArrayVisited();

     return loading ? (
          <Load />
     ) : (
          <section className="section__container">
               <h2>Productos mas visitados</h2>
               <Swiper
                    autoHeight={true}
                    autoplay={{
                         delay: 3000,
                         autoplayDisableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={30}
                    breakpoints={{
                         640: {
                              slidesPerView: 2,
                         },
                         940: {
                              slidesPerView: 3,
                         },
                         1440: {
                              slidesPerView: 4,
                         },
                    }}
               >
                    {dataArrayVisited.length > 1 &&
                         dataArrayVisited.map((data, i) => (
                              <SwiperSlide key={i}>
                                   <CardHome {...data} />
                              </SwiperSlide>
                         ))}
               </Swiper>
               <h2>Nuevos Productos</h2>
               {/* <section onClick={getRemoveSidebar} className="section__uno">
                    <p>
                         LOrem LOrem LOrem LOrem LOremLOrem LOrem LOrem LOrem
                         LOrem LOremLOrem LOrem LOrem LOrem LOrem LOremLOrem
                         LOrem LOrem LOrem LOrem LOremLOrem
                    </p>
               </section>
               <section onClick={getRemoveSidebar} className="section__dos">
                    <p>
                         LOrem LOrem LOrem LOrem LOremLOrem LOrem LOrem LOrem
                         LOrem LOremLOrem LOrem LOrem LOrem LOrem LOremLOrem
                         LOrem LOrem LOrem LOrem LOremLOrem
                    </p>
               </section>
               <section onClick={getRemoveSidebar} className="section__uno">
                    <p>
                         LOrem LOrem LOrem LOrem LOremLOrem LOrem LOrem LOrem
                         LOrem LOremLOrem LOrem LOrem LOrem LOrem LOremLOrem
                         LOrem LOrem LOrem LOrem LOremLOrem
                    </p>
               </section>
               <section onClick={getRemoveSidebar} className="section__uno">
                    <p>
                         LOrem LOrem LOrem LOrem LOremLOrem LOrem LOrem LOrem
                         LOrem LOremLOrem LOrem LOrem LOrem LOrem LOremLOrem
                         LOrem LOrem LOrem LOrem LOremLOrem
                    </p>
               </section>
               <section onClick={getRemoveSidebar} className="section__uno">
                    <p>
                         LOrem LOrem LOrem LOrem LOremLOrem LOrem LOrem LOrem
                         LOrem LOremLOrem LOrem LOrem LOrem LOrem LOremLOrem
                         LOrem LOrem LOrem LOrem LOremLOrem
                    </p>
               </section> */}
          </section>
     );
};
