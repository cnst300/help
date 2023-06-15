import React from "react";
import "../style/HomeStyle.css";

function Home() {
  return (
    <div>
      <h1>Wellcome to TTi Helper!</h1>
      <br />
      <h3>Before you start you need to register or login if you already have an account!</h3>
      <br />
      <span className="homeBTNRegister">
        <a href="/register"></a>
      </span>
      <span className="homeBTNLogin">
        <a href="/login"></a>
      </span>
    </div>
  );
}

export default Home;
