import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../store/auth-context";

import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
    const newPasswordRef = useRef();
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();

        const newPasswordInput = newPasswordRef.current.value;

        fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDo8WeVbw8UMDXoedtGWVFCJjOBUbwhRog",
            {
                method: "POST",
                body: JSON.stringify({
                    idToken: authCtx.token,
                    password: newPasswordInput,
                    returnSecureToken: true,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((res) => {
          console.log("Password changed");
          history.replace('/')
        });
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='new-password'>New Password</label>
                <input type='password' id='new-password' ref={newPasswordRef} />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;
