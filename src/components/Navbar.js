import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Sidebar } from "./Sidebar";
export const Navbar = () => {
     const addSidebar = (e) => {
          const sidebar = document.querySelector(".navbar__bars-sidebar");
          const main = document.querySelector(".main");

          sidebar.classList.add("active__sidebar");
          sidebar.classList.remove("remove__sidebar");

          e.target === main && sidebar.classList.remove("remove__sidebar");
     };

     return (
          <nav className="navbar">
               <div className="navbar__section-logo">
                    <Link to="/" className="navbar__logo">
                         App Music
                    </Link>
               </div>
               <div className="navbar__section-links-ds">
                    <NavLink className="navbar__text" to="/instrumentos">
                         Instrumentos musicales
                    </NavLink>
                    <NavLink className="navbar__text" to="/electronica-y-audio">
                         Electrónica y audio
                    </NavLink>
                    <NavLink className="navbar__text" to="/baterias">
                         Baterías
                    </NavLink>
                    <NavLink className="navbar__text" to="/guitarras">
                         Guitarras
                    </NavLink>
                    <NavLink className="navbar__text" to="/bajos">
                         Bajos
                    </NavLink>
                    <NavLink className="navbar__text" to="/teclas">
                         Teclas
                    </NavLink>
                    <NavLink className="navbar__text" to="/ukeleles">
                         Ukeleles
                    </NavLink>
                    <NavLink className="navbar__text" to="/accesorios">
                         Accesorios
                    </NavLink>
               </div>
               <div className="navbar__section-links">
                    <FaBars onClick={addSidebar} className="navbar__bars" />
               </div>
               <Sidebar />
          </nav>
     );
};
