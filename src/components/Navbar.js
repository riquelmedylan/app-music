import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Sidebar } from "./Sidebar";
import { getSidebar } from "../helpers/getSidebar";
import { getRemoveSidebar } from "../helpers/getRemoveSidebar";

export const Navbar = () => {
     return (
          <nav onClick={getRemoveSidebar} className="navbar">
               <div className="navbar__section-logo">
                    <Link to="/" className="navbar__logo">
                         App Music
                    </Link>
               </div>
               <div className="navbar__section-flex">
                    <div className="navbar__section-links-ds">
                         <NavLink
                              className="navbar__text"
                              to="/product/electronica y audio"
                         >
                              Electrónica y audio
                         </NavLink>
                         <NavLink className="navbar__text" to="/instrumentos">
                              Instrumentos musicales
                         </NavLink>
                         <NavLink
                              className="navbar__text"
                              to="/product/baterias"
                         >
                              Baterías
                         </NavLink>
                         <NavLink
                              className="navbar__text"
                              to="/product/guitarras"
                         >
                              Guitarras
                         </NavLink>
                         <NavLink className="navbar__text" to="/product/bajos">
                              Bajos
                         </NavLink>
                         <NavLink
                              className="navbar__text"
                              to="/product/teclados"
                         >
                              Teclados
                         </NavLink>
                         <NavLink
                              className="navbar__text"
                              to="/product/ukeleles"
                         >
                              Ukeleles
                         </NavLink>
                    </div>
                    <div className="navbar__section-links-auth">
                         <NavLink to="/auth/login" className="navbar__text">
                              Iniciar Sesión
                         </NavLink>
                         <NavLink to="/auth/register" className="navbar__text">
                              Registrarse
                         </NavLink>
                    </div>
               </div>

               <div className="navbar__section-links">
                    <FaBars onClick={getSidebar} className="navbar__bars" />
               </div>

               <Sidebar />
          </nav>
     );
};
