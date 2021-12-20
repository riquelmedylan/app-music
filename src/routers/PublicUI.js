import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ErrorScreen } from "../components/pages/ErrorScreen";
import { HomeScreen } from "../components/pages/HomeScreen";
import { ProductsScreen } from "../components/pages/ProductsScreen";
import { getRemoveSidebar } from "../helpers/getRemoveSidebar";

export const PublicUi = () => {
     return (
          <>
               <Navbar />
               <main onClick={getRemoveSidebar} className="main">
                    <Routes>
                         <Route
                              path="/product/:category"
                              element={<ProductsScreen />}
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
