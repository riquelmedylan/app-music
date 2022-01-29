import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Routers } from "./Route";

export const RouterApp = () => {
     return (
          <Router>
               <div className="router">
                    <React.Fragment>
                         <Routers />
                    </React.Fragment>
               </div>
          </Router>
     );
};
