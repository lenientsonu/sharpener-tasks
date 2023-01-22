import React, { useState } from "react";
import Card from "./Card";
import "./UserForm.css";
import ErrorModal from "./ErrorModal";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (username.length === 0 || age.length === 0) {
      setError({
        title: "Invalid Input",
        msg: "Please enter valid Name and Age",
      });
      return;
    }
    if (age < 1) {
      setError({
        title: "Invalid Age",
        msg: "Please enter valid Age",
      });
      return;
    }

    const userDetails = {
      key: Math.random().toString(),
      username: username,
      age: +age,
    };
    props.user(userDetails);
    // console.log(userDetails);
    setUsername("");
    setAge("");
  };

  const modalClickHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} msg={error.msg} onModalClick={modalClickHandler}/>}
      <Card>
        <form className="form-control" onSubmit={onSubmitHandler}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={usernameChangeHandler}
            ></input>
          </div>
          <div>
            <label>Age(Years)</label>
            <input
              type="number"
              value={age}
              onChange={ageChangeHandler}
            ></input>
          </div>
          <div>
            <button type="submit">Add User</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
