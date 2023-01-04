import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Register.scss';

function Register() {
  return (
    <div className="register">
      <Navbar />
      <div className="register_card">
        <div className="left">
          <p>Register</p>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Name" />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>Your Tours.</h1>
          <p>
            Discover and Book Unique Experiences in Vietnam Hosted by Local
            Experts. Find One-of-a-Kind Activities Hosted by Local Experts in Ha
            Giang, Son La and Cao Bang.
          </p>
          <span>You already have an account ?</span>
          <Link to="/login">
            <button type="submit">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
