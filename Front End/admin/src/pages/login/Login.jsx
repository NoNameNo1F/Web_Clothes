import "./login.css";
import * as React from "react";
const Login = () => {
  const [user, setUsername] = React.useState(user);
  const [pword, setPassword] = React.useState(pword);

  const handleOnClick = (e) => {
    e.preventDefault();
    //
  };
  return (
    <div className="login">
      <h1 className="loginTitle">Login</h1>
      <form className="loginForm">
        <div className="loginInput">
          <label>UserName</label>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="loginInput">
          <label>Password</label>
          <input
            type="password"
            placeholder="**********"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="loginButton" onClick={handleOnClick}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
