import React from "react";
import { GoogleLogout } from "react-google-login";
import { FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { getRemoveSidebar } from "../helpers/getRemoveSidebar";

export const Sidebar = () => {
     const user = localStorage.getItem("user");
     let history = useNavigate();

     const { REACT_APP_USER_ID } = process.env;

     const onSuccess = () => {
          localStorage.removeItem("user");
          history("/auth/login");
     };

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
                    {!user ? (
                         <>
                              <NavLink
                                   to="/auth/login"
                                   className="navbar__text"
                              >
                                   Iniciar Sesión
                              </NavLink>
                              <NavLink
                                   to="/auth/register"
                                   className="navbar__text"
                              >
                                   Registrarse
                              </NavLink>
                         </>
                    ) : (
                         <>
                              <GoogleLogout
                                   onClick={getRemoveSidebar}
                                   onLogoutSuccess={onSuccess}
                                   clientId={REACT_APP_USER_ID}
                                   render={(renderProps) => (
                                        <button
                                             className="button__logout-user"
                                             disabled={renderProps.disabled}
                                             onClick={renderProps.onClick}
                                        >
                                             Cerrar Sesion
                                        </button>
                                   )}
                              ></GoogleLogout>
                         </>
                    )}
               </div>
          </div>
     );
};
