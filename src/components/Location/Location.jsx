import React from 'react';
import { Link } from 'react-router-dom';
import './Location.scss';
import beach from '../../assets/imgs/Location.jpg';
import friend from '../../assets/imgs/Friend.jpg';

function Location() {
  return (
    <div className="location">
      <div className="location_title">
        <img src={beach} alt="" />
        <p>Location</p>
      </div>
      <div className="location_content">
        <p>
          Conveniently located just opposite Leblon Beach in Ipanema, our
          apartment will sweep you into the charm and excitements of Rio! Dine
          at one of our neighborhood’s many world-renowned restaurants, enjoy
          fresh-squeezed juices from one of the colourful stalls along the
          beach, and don’t miss live bossy-nova show in one of the local bars.
        </p>
        <button type="button">VIEW MAP</button>
      </div>
      <div className="location_friend">
        <img src={friend} alt="" />
        <section>
          <h1>About Camila & Tiago</h1>
          <p>
            Hi, my name is Camila and I’m a nutritionist from the south of
            Brazil. I moved to the beautiful Ipanema neighborhood two years ago
            with my husband, Tiago. We live in a homie highrise just off the
            Leblon Beach, but in the summer we travel!
          </p>
          <Link to="/Hotel">
            <h2>STAY WITH US &#62;</h2>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Location;
