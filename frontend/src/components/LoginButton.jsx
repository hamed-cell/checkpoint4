/* eslint-disable no-restricted-syntax */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./LoginButton.css";

function LoginButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername("");
    setPassword("");
    setShowPopup(false);
  };

  return (
    <div>
      <button className="login-button" onClick={() => setShowPopup(true)}>
        Login
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Se connecter</h2>
            <button
              className="close-button"
              onClick={() => setShowPopup(false)}
            >
              X
            </button>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>Se connecter</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginButton;
