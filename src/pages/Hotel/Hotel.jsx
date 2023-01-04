import React from 'react';
import Booking from '../../components/Booking/Booking';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import RoomList from '../../components/RoomList/RoomList';
import SubTitle from '../../components/Title/SubTitle';
import Images from '../../assets/imgs/Images';
import './Hotel.scss';

function Hotel() {
   return (
      <div className='hotel'>
         <header className='hotel_header'>
            <Navbar />
            <SubTitle content='Our Apartment' />
         </header>
         <div className='hotel_container'>
            <h1>Our Rooms</h1>
            <Booking />
            <RoomList
               roomType='Standard'
               type={Images.Standard}
               size='230'
               bed='1'
               bedType='Doubles'
               price='150'
               towel
            />
            <RoomList roomType='Junior' type={Images.Junior} size='260' bed='2' bedType='Doubles' price='250' bath />
            <RoomList
               roomType='Superior'
               type={Images.Superior}
               size='280'
               bed='1'
               bedType='Kings'
               price='350'
               kitchen
               bath
            />
         </div>
         <footer className='hotel_footer'>
            <Footer />
         </footer>
      </div>
   );
}

export default Hotel;
