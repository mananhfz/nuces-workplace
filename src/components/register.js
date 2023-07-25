import React, { useState } from "react";
import RegisterUI from "./register";
import PropTypes from "prop-types";
import server from '../config/server';

async function registerUser(credentials) {
  return fetch(server+"/qec-register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Register({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
//   insertQEC(username, password);
  };

  return (
    <React.Fragment>
      <RegisterUI 
      handleSubmit={handleSubmit}
      setUserName={setUserName}
      setPassword={setPassword}
      />

    </React.Fragment>
  );
}

Register.propTypes = {
  setToken: PropTypes.func.isRequired,
};