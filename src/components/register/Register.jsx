import React, { useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./../firebase";
import { setDoc, doc } from "firebase/firestore";
import styles from "../register/Register.module.css"; 

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: ""
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardImage}></div>
        <form onSubmit={handleRegister} className={styles.cardForm}>
          <h3>Sign Up</h3>

          <div className={styles.fields}>
            <label>First name</label>
            <input
              type="text"
              className={styles.input}
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className={styles.fields}>
            <label>Last name</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className={styles.fields}>
            <label>Email address</label>
            <input
              type="email"
              className={styles.input}
              placeholder="Enter email"
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.btn}>
            <button type="submit" className={styles.btn1}>
              Sign Up
            </button>
          </div>
          <p className={styles.btn2}>
            Already registered? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
