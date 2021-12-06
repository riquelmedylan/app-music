import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { NavbarPrivate } from "../components/NavbarPrivate";
import { ShoppingCartScreen } from "../components/pages/ShoppingCartScreen";

export const Auth = () => {
     return (
          <>
               <NavbarPrivate>
                    <Switch>
                         <Route
                              exact
                              path="/shoppingCart"
                              component={ShoppingCartScreen}
                         />

                         <Redirect to="/auth/login" />
                    </Switch>
               </NavbarPrivate>
          </>
     );
};
