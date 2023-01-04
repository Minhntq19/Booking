import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SubTitle from '../../components/Title/SubTitle';
import jesus from '../../assets/imgs/jesus.jpg';
import './Rio.scss';

function Rio() {
  return (
    <div className="aboutRio">
      <header className="aboutRio_header">
        <Navbar />
        <SubTitle content="Rio De Janeiro" />
      </header>
      <div className="aboutRio_container">
        <div className="aboutRio_city">
          <h1>The Marvelous City</h1>
          <section>
            <p>
              Create memories of a lifetime in one of the most beautiful cities
              in the world - Rio de Janeiro. Relax on gorgeous white sandy
              beaches, explore a cultural hub of art and entertainment, or check
              out the many famous landmarks around the city.
            </p>
            <Link to="/Contact">
              <h2>VIEW MAP</h2>
            </Link>
          </section>
        </div>
        <div className="aboutRio_event">
          <h1>
            The <br /> Games
          </h1>
          <section>
            <p>
              Be where the action is. Witness 10,500 athletes from around the
              world compete in 306 medal events. Celebrate the wins and cheer
              your nation on. When it comes to The Games, you’ll want to be
              there. Check the official Games website for updates on events and
              locations
            </p>
            <a
              href="https://olympics.com/en/olympic-games/rio-2016"
              target="_blank"
              rel="noreferrer"
            >
              www.rio2016.com
            </a>
          </section>
        </div>
        <img src={jesus} alt="" />
      </div>
      <footer className="aboutRio_footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Rio;
