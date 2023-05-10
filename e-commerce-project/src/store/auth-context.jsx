import React, { useState, useContext } from "react";
import CartContext from "./cart-context";

const AuthContext = React.createContext({
    token: "",
    email: "",
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const cartCtx = useContext(CartContext);
    const localToken = localStorage.getItem("token");
    const localEmail = localStorage.getItem("email");
    const [token, setToken] = useState(localToken);
    const [email, setEmail] = useState(localEmail);
    const isUserLoggedIn = !!token;

    const loginHandler = (token, email) => {
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        setToken(token);
        setEmail(email);
    };
    const logoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        setToken(null);
        setEmail(null);
        cartCtx.clearCart();
    };

    const ContextValue = {
        token: token,
        email: email,
        isLoggedIn: isUserLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={ContextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
