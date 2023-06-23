import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Start from "./components/Start";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <Router basename="/">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/start" element={<Start />} />
            </Routes>
          </ErrorBoundary>
        </Router>
      </ErrorBoundary>
    </>
  );
};

export default App;
