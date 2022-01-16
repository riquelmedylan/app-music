import React from "react";
import GoogleLogin from "react-google-login";
import { getUserGoogle } from "../../../helpers/getUserGoogle";

export const LoginScreen = () => {
     const onSuccess = async (googleData) => {
          const { tokenId } = googleData;
          getUserGoogle(tokenId);
          // console.log(tokenId);
     };

     const onFailure = (res) => {
          console.log("[Login Failed] res:", res);
     };

     return (
          <section className="section__auth">
               <div className="container__login">
                    <form className="form">
                         <input
                              className="form__input"
                              type="email"
                              name="email"
                              autoComplete="on"
                              placeholder="Ingrese su Correo"
                         />
                         <input
                              className="form__input"
                              type="password"
                              name="password"
                              autoComplete="off"
                              placeholder="Ingrese su Contraseña"
                         />
                         <GoogleLogin
                              className="button__google"
                              clientId="559711528233-p82vjjlc2qsc7brtpl70kkhme95qilm6.apps.googleusercontent.com"
                              buttonText="Iniciar sesion"
                              onSuccess={onSuccess}
                              onFailure={onFailure}
                              cookiePolicy={"single_host_origin"}
                         />
                         <button className="form__button">
                              Iniciar Sesión
                         </button>
                    </form>
               </div>
          </section>
     );
};
