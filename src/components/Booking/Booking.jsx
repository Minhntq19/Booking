import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Booking.scss';
import { DatePicker, InputNumber } from 'antd';
import dayjs from 'dayjs';

function Booking({ space }) {
   const [checkIn, setCheckIn] = useState();
   const [checkOut, setCheckOut] = useState();
   const disableDate = (current) => {
      return current < dayjs().endOf('day');
   };
   const handleCheckIn = (e) => {
      setCheckIn(e);
   };
   const disableEndDate = (current) => {
      return checkIn ? current <= checkIn.add(1, 'day') : current < dayjs().add(1, 'day');
   };
   const handleCheckOut = (e) => {
      setCheckOut(e);
   };
   const dateRange = checkIn || checkOut ? dayjs(checkOut).diff(checkIn, 'Day') : 0;
   console.log(dateRange);
   const style = {
      width: '100%',
      borderRadius: '0',
   };
   return (
      <div className='booking'>
         <form className='booking_form' style={{ gap: space }}>
            <div className='booking_checkIn'>
               <p>Check-In</p>
               <DatePicker style={style} disabledDate={disableDate} onChange={handleCheckIn} />
            </div>
            <div className='booking_checkOut'>
               <p>Check-Out</p>
               <DatePicker style={style} disabledDate={disableEndDate} onChange={handleCheckOut} />
            </div>
            <div className='booking_adultCounter'>
               <p>Adults</p>
               <InputNumber style={style} min={1} max={10} defaultValue={1} />
            </div>
            <div className='booking_kidCounter'>
               <p>Kids</p>
               <InputNumber style={style} min={0} max={10} defaultValue={0} />
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
