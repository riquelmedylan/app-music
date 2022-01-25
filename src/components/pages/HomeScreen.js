import React from "react";
import { getRemoveSidebar } from "../../helpers/getRemoveSidebar";
import { useGetProducts } from "../../hooks/useGetProducts";
import { Load } from "../Load";

export const HomeScreen = () => {
     const { data, loading } = useGetProducts();

     return loading ? (
          <Load />
     ) : (
          <div className="main__container">
               <section onClick={getRemoveSidebar} className="section__uno">
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
               </section>
          </div>
     );
};
