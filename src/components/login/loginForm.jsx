import React, { useState } from "react";
import "./loginForm.css";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginForm = () => {

  const [useremail, setUserEmail] = useState("");
  const [userpassword, setPassword] = useState("");
  const [showLabel, setShowLabel] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (useremail.trim() === "" || userpassword.trim() === "") {
      setShowLabel(true);
      return;
    }

  };

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <h1>Login Volunteer work</h1>
        <div className="input-field">
          <MdEmail className="icon" />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          {useremail.trim() === "" && showLabel && (
            <label htmlFor="useremail" className="LabelResponse spaced-label">
               Input in blank*
            </label>
          )}
        </div>
        <div className="input-field">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {userpassword.trim() === "" && showLabel && (
            <label htmlFor="userpassword" className="LabelResponse spaced-label">
               Input in blank*
            </label>
          )}
        </div>
        <div className="recallforget">
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Remember me
          </label>
        </div>
        <button>Sign in</button>

        <div className="signup-link">
          <a href="/Register">
            {" "}
            <p>I don't have a account yet</p>
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
