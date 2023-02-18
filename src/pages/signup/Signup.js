import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
function Signup() {
  // const router = useRouter();
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // -------------------Function to Show Password When Checkbox is clicked
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    if ((email || username || password || confirmPassword) == "") {
      alert("Please Enter Data");
    } else {
      alert("Account Created Successfully!!!");
    }
    if (password !== confirmPassword) {
      alert("Your Passwords didn't match!!!");
    }
  };
  // -------------------Function to Show Password When Checkbox is clicked
  return (
    <>
      <div className="loginPage">
        <form className="login" onSubmit={handleSubmit}>
          <label htmlFor="username" id="username">
            Enter Email Address:
          </label>
          <input
            type="email"
            placeholder="Email *"
            value={email}
            required
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="username" id="username">
            Enter Username:
          </label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setusername(e.target.value)}
          />
          <br />
          <label htmlFor="password">Enter Password: </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            value={password}
            required
            onChange={(e) => setpassword(e.target.value)}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            id="password"
            value={confirmPassword}
            required
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
          <div className="check">
            <label htmlFor="">Show Password</label>{" "}
            <span>
              <input type="checkbox" onClick={toggleShowPassword} />
            </span>
          </div>
          <input
            type="submit"
            className="loginButton"
            value={"Create Account"}
          />

          <div className="link">
            <Link to="/login">Already a member? Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
