import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ErrorScreen } from "../components/pages/ErrorScreen";
import { HomeScreen } from "../components/pages/HomeScreen";

export const PublicUi = () => {
     return (
          <>
               <Navbar />
               <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/home" element={<HomeScreen />} />
                    <Route path="*" element={<ErrorScreen />} />
               </Routes>
               <Footer/>
          </>
     );
};
