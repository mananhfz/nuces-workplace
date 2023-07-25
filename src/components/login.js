import React, { useState } from "react";
import LoginUI from "./login.js";
import PropTypes from "prop-types";
import server from '../config/serverConfig';

async function loginUser(credentials) {
  return fetch(server + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    //! Vulnerbiality alert
    setToken(token, 5000);
  };

  return (
    <React.Fragment>
      <LoginUI 
      handleSubmit={handleSubmit}
      setUserName={setUserName}
      setPassword={setPassword}
      />
    </React.Fragment>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
