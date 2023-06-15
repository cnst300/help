import React from "react";
import { Link } from "react-router-dom";
import "../style/HomeStyle.css";

function Home() {
  return (
    <div>
      <h1>Wellcome to TTi Helper!</h1>
      <br />
      <h3>Before you start you need to register or login if you already have an account!</h3>
      <br />
      <span className="homeBTNRegister">
      <Link to="/register">Register</Link>
      </span>
      <span className="homeBTNLogin">
      <Link to="/login">Login</Link>
      </span>
    </div>
  );
}

export default Home;
