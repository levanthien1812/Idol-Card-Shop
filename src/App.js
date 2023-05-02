import React from "react";
import "./App.css";
import SignupForm from "./components/SignUp/SignupForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={SignupForm} />
          <Route path="/login" exact Component={LoginForm} />
          <Route path="/signup" exact Component={SignupForm} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
