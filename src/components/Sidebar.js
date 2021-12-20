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
          </div>
     );
};
