import React from 'react';
import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';
import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import Apartment from '../../components/Apartment/Apartment';
import Location from '../../components/Location/Location';
import Booking from '../../components/Booking/Booking';

function Home() {
   return (
      <div className='homepage'>
         <header className='home_header'>
            <Navbar />
            <Title />
         </header>
         <div className='home_container'>
            <Booking space='10px' />
            <Apartment />
            <Location />
         </div>
         <footer className='home_footer'>
            <Footer />
         </footer>
      </div>
   );
}

export default Home;
