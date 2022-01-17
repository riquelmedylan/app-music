import React, { useEffect, useRef } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";

import { postUserGoogle, postUser } from "../../../helpers/getRequestUser";

export const RegisterScreen = () => {
     let navigate = useNavigate();

     const nicknameRef = useRef(null);
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

     const onSubmit = (e) => {
          e.preventDefault();
          const nickname = nicknameRef.current.value;
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          const token = Math.random().toString(22).substring(3, 23);
          localStorage.setItem("user", token);
          postUser(nickname, email, password, token);
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
               <div className="container__register">
                    <form className="form">
                         <input
                              autoComplete="on"
                              className="form__input"
                              name="nickname"
                              placeholder="Introduzca un nombre"
                              type="text"
                              ref={nicknameRef}
                         />
                         <input
                              autoComplete="on"
                              className="form__input"
                              name="email"
                              placeholder="Introduzca un Correo"
                              type="email"
                              ref={emailRef}
                         />
                         <input
                              autoComplete="off"
                              className="form__input"
                              name="password"
                              type="password"
                              placeholder="Introduzca una Contraseña"
                              ref={passwordRef}
                         />
                         <GoogleLogin
                              className="button__google"
                              clientId={REACT_APP_USER_ID}
                              buttonText="Iniciar sesion"
                              onSuccess={onSuccess}
                              onFailure={onFailure}
                              cookiePolicy={"single_host_origin"}
                         />
                         <button onClick={onSubmit} className="form__button">
                              Registrarse
                         </button>
                    </form>
               </div>
          </section>
     );
};
