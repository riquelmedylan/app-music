import React from "react";
import { InstrumentProductScreen } from "./InstrumentProductScreen";

export const Instruments = () => {
     return (
          <div>
               <div className="container__main-text">
                    <h2>Instrumentos</h2>
               </div>

               <InstrumentProductScreen product={"guitarras"} />
               <InstrumentProductScreen product={"bajos"} />
               <InstrumentProductScreen product={"baterias"} />
               <InstrumentProductScreen product={"teclados"} />
               <InstrumentProductScreen product={"ukeleles"} />
               <InstrumentProductScreen product={"electronica y audio"} />
          </div>
     );
};
