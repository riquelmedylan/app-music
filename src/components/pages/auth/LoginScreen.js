import React, { useEffect, useReducer, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getUserLogin, postUserGoogle } from "../../../helpers/getRequestUser";
import { reducer } from "../../../reducer/loginReducer";
import { userLoginState } from "../../../states/states";
import GoogleLogin from "react-google-login";

export const LoginScreen = () => {
     let navigate = useNavigate();

     const [state, dispatch] = useReducer(reducer, userLoginState);

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
          const emailLogin = emailRef.current.value;

          const passwordLogin = passwordRef.current.value;

          const { token, email, password, msg, uid } = await getUserLogin(
               emailLogin,
               passwordLogin
          );

          if (!email) {
               dispatch({ type: "error", payload: msg });
          }

          if (!password) {
               dispatch({
                    type: "error",
                    payload: msg,
               });
          }

          if (token) {
               localStorage.setItem("user", token);
               localStorage.setItem("uid", uid);
               navigate("/");
          }
     };

     const onSuccess = async (googleData) => {
          const { tokenId, googleId } = googleData;
          const uid = await postUserGoogle(tokenId);
          localStorage.setItem("user", googleId);
          localStorage.setItem("uid", uid);
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
                         {state.status === false && (
                              <div className="container__error-auth">
                                   <p>{state.msg}</p>
                              </div>
                         )}
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
