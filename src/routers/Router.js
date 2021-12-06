import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { PublicUi } from "./PublicUI";

export const RouterApp = () => {
     return (
          <Router>
               <div>
                    <React.Fragment>
                         <PublicUi />
                    </React.Fragment>
               </div>
          </Router>
     );
};
