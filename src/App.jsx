import React, { useEffect ,useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./components/login/Login";
import SignUp from "./components/register/Register";
import Home from "./components/home/Home";
import { auth } from "./components/firebase";

function App() {
  const [user, setUser] = useState();
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <div className="App">
      <ToastContainer />
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> : <Login />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;