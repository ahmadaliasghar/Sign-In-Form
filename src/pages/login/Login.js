import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../home/Home";
import "./login.css";

const Login = () => {
  // const router = useRouter();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    if (username === "ahmad" && password === "ahmad123") {
      setloggedIn(true);
    } else {
      alert("Incorrect username or password!!!");
    }
  };
  // -------------------Function to Show Password When Checkbox is clicked
  return (
    <>
      {loggedIn ? (
        <Home />
      ) : (
        <div className="loginPage">
          <form className="login" onSubmit={handleSubmit}>
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
            <div className="check">
              <label htmlFor="">Show Password</label>{" "}
              <span>
                <input type="checkbox" onClick={toggleShowPassword} />
              </span>
              <span></span>
            </div>
            {/* <Link to="/products" > */}
            <input type="submit" className="loginButton" value={"Login"} />
            {/* </Link> */}
            <div className="link">
              <span>
                <Link to="/forgetpassword">Forget Password</Link>
              </span>
              <span>
                <Link to="/signup">Signup</Link>
              </span>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
hj