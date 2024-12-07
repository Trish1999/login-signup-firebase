import React, { useState } from "react";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
//import SignInwithGoogle from "./signInWIthGoogle";

import styles from "../login/Login.module.css";
import { auth } from "./../firebase";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/home";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardImage}></div>
        <form onSubmit={handleSubmit} className={styles.cardForm}>
          <h3>Login</h3>

      <div className={styles.fields}>
        <label>Email address</label>
        <input
          type="email"
          className={styles.input}
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className={styles.fields}>
        <label>Password</label>
        <input
          type="password"
          className={styles.input}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className={styles.btn}>
        <button type="submit" className={styles.btn1}>
          Submit
        </button>
      </div>
      <p className={styles.btn2}>
        New user 
         <a href="/register">Register Here</a>
      </p>
      {/* <SignInwithGoogle/> */}
        </form>
      </div>
    </div>
  );
}

export default Login;