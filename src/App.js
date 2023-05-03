import React from "react";
import "./App.css";
import SignupForm from "./pages/SignUp/SignupForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login/LoginForm";
import About from "./pages/About/About";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={About} />
          <Route path="/login" exact Component={LoginForm} />
          <Route path="/signup" exact Component={SignupForm} />
          <Route path="/forgotpassword" exact Component={ForgotPassword} />
          <Route path="/about" exact Component={About} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
