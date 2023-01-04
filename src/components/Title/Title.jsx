import React from 'react';
import './Title.scss';
import logo from '../../assets/icons/cloud.jpg';

function Slogan() {
  return (
    <div className="title">
      <div className="title_top">
        <img src={logo} alt="" />
        <p>Be my guest</p>
        <img src={logo} alt="" />
      </div>
      <div>
        <h1>Welcome to Rio</h1>
      </div>
    </div>
  );
}

export default Slogan;
