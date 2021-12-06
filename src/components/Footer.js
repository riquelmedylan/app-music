import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footer = () => {
     return (
          <footer className="footer">
               <div className="footer__container">
                    <div>
                         <p className="footer__email">appguitar@gmail.com</p>
                    </div>
                    <div className="footer__sections">
                         <NavLink className="footer__text" to="/instrumentos">
                              Instrumentos musicales
                         </NavLink>
                         <NavLink
                              className="footer__text"
                              to="/electronica-y-audio"
                         >
                              Electrónica y audio
                         </NavLink>
                         <NavLink className="footer__text" to="/baterias">
                              Baterías
                         </NavLink>
                         <NavLink className="footer__text" to="/guitarras">
                              Guitarras
                         </NavLink>
                         <NavLink className="footer__text" to="/bajos">
                              Bajos
                         </NavLink>
                         <NavLink className="footer__text" to="/teclas">
                              Teclas
                         </NavLink>
                         <NavLink className="footer__text" to="/ukeleles">
                              Ukeleles
                         </NavLink>
                         <NavLink className="footer__text" to="/accesorios">
                              Accesorios
                         </NavLink>
                    </div>
                    <div className="footer__redes">
                         <FaFacebook className="footer__redes-icon" />
                         <FaTwitter className="footer__redes-icon" />
                         <FaInstagram className="footer__redes-icon" />
                    </div>
               </div>
          </footer>
     );
};
