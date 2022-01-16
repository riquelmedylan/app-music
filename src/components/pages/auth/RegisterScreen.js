import React from "react";
import GoogleLogin from "react-google-login";
import { getUserGoogle } from "../../../helpers/getUserGoogle";

export const RegisterScreen = () => {
     const onSuccess = async (googleData) => {
          const { tokenId } = googleData;
          getUserGoogle(tokenId);
     };

     const onFailure = (res) => {
          console.log("[Login Failed] res:", res);
     };

     return (
          <section className="section__auth">
               <div className="container__register">
                    <form className="form">
                         <input
                              className="form__input"
                              name="nickname"
                              type="text"
                              autoComplete="on"
                              placeholder="Introduzca un nombre"
                         />
                         <input
                              className="form__input"
                              name="email"
                              type="email"
                              autoComplete="on"
                              placeholder="Introduzca un Correo"
                         />
                         <input
                              className="form__input"
                              name="password"
                              type="password"
                              autoComplete="off"
                              placeholder="Introduzca una Contraseña"
                         />
                         <GoogleLogin
                              className="button__google"
                              clientId="559711528233-p82vjjlc2qsc7brtpl70kkhme95qilm6.apps.googleusercontent.com"
                              buttonText="Iniciar sesion"
                              onSuccess={onSuccess}
                              onFailure={onFailure}
                              cookiePolicy={"single_host_origin"}
                         />
                         <button className="form__button">Registrarse</button>
                    </form>
               </div>
          </section>
     );
};
