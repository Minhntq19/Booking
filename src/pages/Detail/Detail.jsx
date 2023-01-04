import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BiArrowBack } from 'react-icons/bi';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SubTitle from '../../components/Title/SubTitle';
import './Detail.scss';
import RoomDetail from '../../components/RoomDetail/RoomDetail';
import BookingCart from '../../components/BookingCart/BookingCart';

function Detail({ type, roomType, bed, bedType, size, price, bath, kitchen }) {
   return (
      <div className='roomDetail'>
         <header className='roomDetail_header'>
            <Navbar />
            <SubTitle content='Our Apartment' />
         </header>
         <div className='roomDetail_container'>
            <div className='roomDetail_title'>
               <Link to='/Hotel'>
                  <span>
                     <BiArrowBack />
                  </span>
               </Link>
               <h1>{roomType} Suite</h1>
            </div>
            <div className='roomDetail_content'>
               <RoomDetail
                  type={type}
                  roomType={roomType}
                  bed={bed}
                  bedType={bedType}
                  size={size}
                  bath={bath}
                  kitchen={kitchen}
               />
               <BookingCart price={price} />
            </div>
         </div>
         <footer className='roomDetail_footer'>
            <Footer />
         </footer>
      </div>
   );
}
Detail.propsTypes = {
   size: PropTypes.number,
   bed: PropTypes.number,
   bedType: PropTypes.string,
   price: PropTypes.number,
   kitchen: PropTypes.bool,
   bath: PropTypes.bool,
   roomType: PropTypes.string,
};
export default Detail;
