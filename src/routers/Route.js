import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { BuyProduct } from "../components/pages/product/BuyProduct";
import { ErrorScreen } from "../components/pages/ErrorScreen";
import { HomeScreen } from "../components/pages/HomeScreen";
import { Instruments } from "../components/pages/product/Instruments";
import { ProductsScreen } from "../components/pages/product/ProductsScreen";
import { getRemoveSidebar } from "../helpers/getRemoveSidebar";
import { LoginScreen } from "../components/pages/auth/LoginScreen";
import { RegisterScreen } from "../components/pages/auth/RegisterScreen";
import { ShoppingCartScreen } from "../components/pages/auth/ShoppingCartScreen";

export const Routers = () => {
     return (
          <>
               <Navbar />
               <main onClick={getRemoveSidebar} className="main">
                    <Routes>
                         <Route path="/auth/login" element={<LoginScreen />} />
                         <Route
                              path="/auth/register"
                              element={<RegisterScreen />}
                         />
                         <Route
                              path="/instrumentos"
                              element={<Instruments />}
                         />
                         <Route
                              path="/product/:category"
                              element={<ProductsScreen />}
                         />
                         <Route
                              path="/product/:category/:id"
                              element={<BuyProduct />}
                         />
                         <Route
                              path="/auth/shop"
                              element={<ShoppingCartScreen />}
                         />
                         <Route path="/" element={<HomeScreen />} />
                         <Route path="/home" element={<HomeScreen />} />
                         <Route path="*" element={<ErrorScreen />} />
                    </Routes>
               </main>

               <Footer />
          </>
     );
};
