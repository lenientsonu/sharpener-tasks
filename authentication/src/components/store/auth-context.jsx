import React, { useState } from "react";

let logoutTimer;

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

        logoutTimer = setTimeout(logoutHandler, 5 * 60000);
    };

    const logoutHandler = () => {
        localStorage.removeItem("token");
        setToken(null);

        if(logoutTimer){
            clearTimeout(logoutTimer)
        }
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
