import React from 'react';
import PropTypes from 'prop-types';
import './Booking.scss';

function Booking({ space }) {
   const disableKeyboard = (e) => {
      e.preventDefault();
   };
   const date = new Date().toISOString().split('T')[0];

   return (
      <div className='booking'>
         <form className='booking_form' style={{ gap: space }}>
            <div className='booking_checkIn'>
               <p>Check-In</p>
               <input type='date' required onKeyDown={disableKeyboard} min={date} />
            </div>
            <div className='booking_checkOut'>
               <p>Check-Out</p>
               <input type='date' required onKeyDown={disableKeyboard} min={date} />
            </div>
            <div className='booking_adultCounter'>
               <p>Adults</p>
               <input type='number' step='1' placeholder='1' min='1' onKeyDown={disableKeyboard} required />
            </div>
            <div className='booking_kidCounter'>
               <p>Kids</p>
               <input type='number' step='1' placeholder='0' min='0' onKeyDown={disableKeyboard} required />
            </div>
            <button type='submit' className='booking_searchBtn'>
               Search
            </button>
         </form>
      </div>
   );
}
Booking.propsTypes = {
   space: PropTypes.string,
};
export default Booking;
