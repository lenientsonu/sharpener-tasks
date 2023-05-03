import React, { useState } from "react";

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const localToken = localStorage.getItem("token");
    const [token, setToken] = useState(localToken);

    const isUserLoggedIn = !!token;

    const loginHandler = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    };

    const logoutHandler = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    const ContextValue = {
        token: token,
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
