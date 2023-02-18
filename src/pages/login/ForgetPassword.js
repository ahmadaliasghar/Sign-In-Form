import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./login.css";
function ForgetPassword() {
  const [password, setpassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    if (password == newPassword) {
      alert("Password Updated Successfully!!!");
    } else {
      alert("Your Passwords didn't match!!!");
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <label htmlFor="password">Enter Password: </label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        id="password"
        value={password}
        required
        onChange={(e) => setpassword(e.target.value)}
      />
      <label htmlFor="">Confirm Password</label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Confirm Password"
        id="password"
        value={newPassword}
        required
        onChange={(e) => setnewPassword(e.target.value)}
      />
      <div className="check">
        <label htmlFor="">Show Password</label>{" "}
        <span>
          <input type="checkbox" onClick={toggleShowPassword} />
        </span>
      </div>
      <input type="submit" className="loginButton" value={"Update Password"} />

      <div className="link">
        <Link to="/login">Login</Link>
      </div>
    </form>
  );
}

export default ForgetPassword;
