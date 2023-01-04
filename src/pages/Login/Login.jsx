import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Login.scss';

function Login() {
  return (
    <div className="login">
      <Navbar />
      <div className="login_card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Discover and Book Unique Experiences in Vietnam Hosted by Local
            Experts. Find One-of-a-Kind Activities Hosted by Local Experts in Ha
            Giang, Son La and Cao Bang.
          </p>
          <span>Do you have an account ?</span>
          <Link to="/Register">
            <button type="button">Register</button>
          </Link>
        </div>
        <div className="right">
          <p>Login</p>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
