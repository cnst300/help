import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";
import axios from "axios";

const LOGIN_URL = "http://localhost:8080/login";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();
  const errRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        // Set login success state to true
        setLoginSuccess(true);
        localStorage.setItem("user", JSON.stringify(response));
        // navigate("/start");
      }

      console.log(response?.data);
      console.log(JSON.stringify(response));
      setEmail("");
      setPassword("");
    } catch (err) {
      if (!err?.response) {
        setErrMessage("No Server Response");
      } else if (err.response?.status === 500) {
        setErrMessage("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {loginSuccess ? (
        <section>
          <h1 className="success">
            You logged in successful! <br />
          </h1>
          <p>
            <a href="/start">
              <button className="buttonAfterLogin">Let's Start!</button>
            </a>
          </p>
        </section>
      ) : (
        <div className="login-box">
          <h2>Login</h2>
          <p
            ref={errRef}
            className={errMessage ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMessage}
          </p>
          <form>
            <div className="user-box">
              <input
                name="email"
                required
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                name="password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <label>Password</label>
            </div>
            <a href="#" onClick={handleSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
