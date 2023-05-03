import { useState, useRef, useContext } from "react";

import AuthContext from "../store/auth-context";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        setIsLoading(true);
        event.preventDefault();

        const emailInput = emailRef.current.value;
        const passwordInput = passwordRef.current.value;
        // console.log(emailInput, passwordInput);

        if (isLogin) {
            fetch(
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDo8WeVbw8UMDXoedtGWVFCJjOBUbwhRog",
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: emailInput,
                        password: passwordInput,
                        returnSecureToken: true,
                    }),
                    headers: {
                        "Content-type": "application/json",
                    },
                }
            ).then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json().then((data) => {
                        console.log(data, data.idToken);
                        authCtx.login(data.idToken);
                        alert("Login Successful");
                    });
                } else {
                    return res.json().then((data) => {
                        if (data && data.error && data.error.message) {
                            console.log(data.error.message);
                        }
                        alert("Authentication Faliure");
                    });
                }
            });
        } else {
            fetch(
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDo8WeVbw8UMDXoedtGWVFCJjOBUbwhRog",
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: emailInput,
                        password: passwordInput,
                        returnSecureToken: true,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            ).then((res) => {
                setIsLoading(false);
                // res.json();
                if (res.ok) {
                    return res.json().then((data) => {
                        console.log(data, data.idToken);
                        authCtx.login(data.idToken);
                        alert("SignUp Successful");
                    });
                } else {
                    return res.json().then((data) => {
                        if (data && data.error && data.error.message) {
                            alert(data.error.message);
                        }
                    });
                }
            });
        }
    };

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        required
                        ref={passwordRef}
                    />
                </div>
                <div className={classes.actions}>
                    {isLoading && <p>Sending Request</p>}
                    {!isLoading && (
                        <button>{isLogin ? "Login" : "SignUp"}</button>
                    )}
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin
                            ? "Create new account"
                            : "Login with existing account"}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;
