import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Start from "./components/Start";

const App = () => {
  return (
    <>
      <Navbar />
      <Router basename="/help">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/start" element={<Start />} />
        </Routes>
      </Router>
      </>
  );
};

export default App;
