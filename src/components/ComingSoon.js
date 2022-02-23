import React from "react";

export const ComingSoon = ({ setComingSoon }) => {
     const closeContainer = () => {
          setComingSoon(false);
     };

     return (
          <div className="container__coming-soon">
               <p onClick={closeContainer} className="close__container-soon">
                    X
               </p>
               <h2 className="text__coming-soon">
                    Las compras se integraran proximente
               </h2>
          </div>
     );
};
