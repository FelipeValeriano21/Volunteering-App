import React, { useState } from "react";
import "./registerForm.css";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const RegisterForm = () => {
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setPassword] = useState("");
  const [userconfirmpassword, setConfirmPassword] = useState("");
  const [showLabel, setShowLabel] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim() === "" || useremail.trim() === "" || userpassword.trim() === "" || userconfirmpassword.trim() === "") {
      setShowLabel(true);
      return;
    }

    if (userpassword !== userconfirmpassword) {
      return;
    }
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <h1>Sign up Volunteer work</h1>
        <div className="input-field">
          <FaUser className="icon" />
          <input
            type="text" className="validationBorder"
            placeholder="Nickname on the platform"
            onChange={(e) => setUserName(e.target.value)}
          />
          {username.trim() === "" && showLabel && (
            <label htmlFor="username" className="LabelResponse spaced-label">
              Input in blank*
            </label>
          )}
        </div>
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
        <div className="input-field">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {userconfirmpassword.trim() === "" && showLabel && (
            <label htmlFor="userconfirmpassword" className="LabelResponse  spaced-label ">
               Input in blank*
            </label>
          )}
        </div>
        <div className="recallforget">
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Terms of use
          </label>
          <a href="">More Details</a>
        </div>
        <button>Register</button>

        <div className="signup-link">
          <a href="/Login">
            {" "}
            <p>I already have a account</p>
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
