import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { getRemoveSidebar } from "../helpers/getRemoveSidebar";

export const Footer = () => {
     return (
          <footer onClick={getRemoveSidebar} className="footer">
               <div className="footer__container">
                    <div>
                         <p className="footer__email">appguitar@gmail.com</p>
                    </div>
                    <div className="footer__sections">
                         <NavLink
                              className="footer__text"
                              to="/product/instrumentos"
                         >
                              Instrumentos musicales
                         </NavLink>
                         <NavLink
                              className="footer__text"
                              to="/product/electronica y audio"
                         >
                              Electrónica y audio
                         </NavLink>
                         <NavLink
                              className="footer__text"
                              to="/product/baterias"
                         >
                              Baterías
                         </NavLink>
                         <NavLink
                              className="footer__text"
                              to="/product/guitarras"
                         >
                              Guitarras
                         </NavLink>
                         <NavLink className="footer__text" to="/product/bajos">
                              Bajos
                         </NavLink>
                         <NavLink
                              className="footer__text"
                              to="/product/teclados"
                         >
                              Teclados
                         </NavLink>
                         <NavLink
                              className="footer__text"
                              to="/product/ukeleles"
                         >
                              Ukeleles
                         </NavLink>
                         <NavLink
                              className="footer__text"
                              to="/product/accesorios"
                         >
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
