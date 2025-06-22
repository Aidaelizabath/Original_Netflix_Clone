import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/cards/logo1.png';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/cards/netflix.gif';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="login-spinner">
        <img src={netflix_spinner} alt="Loading" />
      </div>
    );
  }

  return (
    <div className="login">
      <div className="login-content">
        <img src={logo} className="login-logo" alt="Netflix Logo" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form onSubmit={user_auth}>
            {signState === "Sign Up" && (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                required
              />
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
            <button type="submit">{signState}</button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?{" "}
                <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
