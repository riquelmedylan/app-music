import React, { useEffect, useState } from "react";
import { Load } from "../../Load";
import { InstrumentProductScreen } from "./InstrumentProductScreen";

export const Instruments = () => {
     const [time, setTime] = useState(true);

     useEffect(() => {
          setTimeout(() => {
               setTime(false);
          }, 2000);
     });
     return time ? (
          <Load />
     ) : (
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
