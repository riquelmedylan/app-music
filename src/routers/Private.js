import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth } from "./Auth";

return (
     <>
          <Route component={Auth} />
          <Redirect to="/home" />
     </>
);
