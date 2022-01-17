import React, { useEffect, useRef } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { getUserLogin, postUserGoogle } from "../../../helpers/getRequestUser";

export const LoginScreen = () => {
     let navigate = useNavigate();

     const emailRef = useRef(null);
     const passwordRef = useRef(null);

     const { REACT_APP_USER_ID } = process.env;

     const user = !localStorage.getItem("user")
          ? null || undefined
          : JSON.stringify(localStorage.getItem("user"));

     useEffect(() => {
          if (user) {
               navigate("/");
          }
     });

     const onLogin = async (e) => {
          e.preventDefault();
          const email = emailRef.current.value;

          const passwordLogin = passwordRef.current.value;
          const token = await getUserLogin(email, passwordLogin);
          localStorage.setItem("user", token);
          navigate("/");
     };

     const onSuccess = (googleData) => {
          const { tokenId, googleId } = googleData;
          postUserGoogle(tokenId);
          localStorage.setItem("user", googleId);
          navigate("/");
     };

     const onFailure = (res) => {
          console.log("[Login Failed] res:", res);
     };

     return (
          <section className="section__auth">
               <div className="container__login">
                    <form className="form">
                         <input
                              ref={emailRef}
                              className="form__input"
                              type="email"
                              name="email"
                              autoComplete="on"
                              placeholder="Ingrese su Correo"
                         />
                         <input
                              ref={passwordRef}
                              className="form__input"
                              type="password"
                              name="password"
                              autoComplete="off"
                              placeholder="Ingrese su Contraseña"
                         />
                         <GoogleLogin
                              className="button__google"
                              clientId={REACT_APP_USER_ID}
                              buttonText="Iniciar sesion"
                              onSuccess={onSuccess}
                              onFailure={onFailure}
                              cookiePolicy={"single_host_origin"}
                         />
                         <button onClick={onLogin} className="form__button">
                              Iniciar Sesión
                         </button>
                    </form>
               </div>
          </section>
     );
};
