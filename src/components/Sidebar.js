import React from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { getRemoveSidebar } from "../helpers/getRemoveSidebar";

export const Sidebar = () => {
     return (
          <div className="navbar__bars-sidebar">
               <div className="sidebar__container-section">
                    <FaTimes
                         onClick={getRemoveSidebar}
                         className="sidebar__times"
                    />
                    <NavLink
                         onClick={getRemoveSidebar}
                         className="navbar__text"
                         to="/instrumentos"
                    >
                         Instrumentos musicales
                    </NavLink>
                    <NavLink
                         onClick={getRemoveSidebar}
                         className="navbar__text"
                         to="/product/electronica y audio"
                    >
                         Electrónica y audio
                    </NavLink>
                    <NavLink
                         onClick={getRemoveSidebar}
                         className="navbar__text"
                         to="/product/baterias"
                    >
                         Baterías
                    </NavLink>
                    <NavLink
                         onClick={getRemoveSidebar}
                         className="navbar__text"
                         to="/product/guitarras"
                    >
                         Guitarras
                    </NavLink>
                    <NavLink
                         onClick={getRemoveSidebar}
                         className="navbar__text"
                         to="/product/bajos"
                    >
                         Bajos
                    </NavLink>
                    <NavLink
                         onClick={getRemoveSidebar}
                         className="navbar__text"
                         to="/product/teclados"
                    >
                         Teclados
                    </NavLink>
                    <NavLink
                         onClick={getRemoveSidebar}
                         className="navbar__text"
                         to="/product/ukeleles"
                    >
                         Ukeleles
                    </NavLink>
                    <NavLink
                         onClick={getRemoveSidebar}
                         className="navbar__text"
                         to="/product/accesorios"
                    >
                         Accesorios
                    </NavLink>
                    <NavLink
                         onClick={getRemoveSidebar}
                         className="navbar__text"
                         to="/auth/login"
                    >
                         Iniciar Sesión
                    </NavLink>
                    <NavLink
                         onClick={getRemoveSidebar}
                         className="navbar__text"
                         to="/auth/register"
                    >
                         Registrarse
                    </NavLink>
               </div>
          </div>
     );
};
