import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { BuyProduct } from "../components/pages/BuyProduct";
import { ErrorScreen } from "../components/pages/ErrorScreen";
import { HomeScreen } from "../components/pages/HomeScreen";
import { Instruments } from "../components/pages/Instruments";
import { ProductsScreen } from "../components/pages/ProductsScreen";
import { getRemoveSidebar } from "../helpers/getRemoveSidebar";

export const PublicUi = () => {
     return (
          <>
               <Navbar />
               <main onClick={getRemoveSidebar} className="main">
                    <Routes>
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
                         <Route path="/" element={<HomeScreen />} />
                         <Route path="/home" element={<HomeScreen />} />
                         <Route path="*" element={<ErrorScreen />} />
                    </Routes>
               </main>

               <Footer />
          </>
     );
};
