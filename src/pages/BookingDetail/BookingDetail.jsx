import React from 'react';
import CartSummary from '../../components/CartSummary/CartSummary';
import GuestDetail from '../../components/GuestDetail/GuestDetail';
import './BookingDetail.scss';

function BookingDetail() {
   return (
      <div className='booking_detail'>
         <GuestDetail />
         <CartSummary />
      </div>
   );
}

export default BookingDetail;
