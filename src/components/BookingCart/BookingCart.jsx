import React, { useState } from 'react';
import { DatePicker, InputNumber } from 'antd';
import dayjs from 'dayjs';
import './BookingCart.scss';
import { useNavigate } from 'react-router-dom';

function BookingCart({ price }) {
   const { RangePicker } = DatePicker;
   const [submitted, setSubmitted] = useState();
   const [open, setOpen] = useState(false);
   const [count, setCount] = useState('');
   const [people, setPeople] = useState(1);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const disabledDate = (current) => {
      return current < dayjs();
   };
   const handleChange = (e) => {
      if (e) {
         const date1 = dayjs(e[1]).format();
         const date2 = dayjs(e[0]).format();
         const diff = dayjs(date1).diff(date2, 'Day', true);
         setCount(diff);
         setLoading(true);
         setSubmitted(true);
      } else {
         setLoading(false);
         setSubmitted(false);
      }
   };
   const handlePeople = (e) => {
      setPeople(e);
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (submitted) {
         navigate('/Hotel/booking/detail');
      } else setOpen(true);
   };
   return (
      <div className='roomDetail_booking'>
         <div className='roomDetail_price'>
            <p>From</p>
            <h2>${price}</h2>
            <p>Per Night</p>
         </div>
         <RangePicker
            open={open}
            onOpenChange={() => setOpen(!open)}
            onChange={handleChange}
            style={{ borderRadius: '0', width: '100%', fontSize: '14px' }}
            size='large'
            disabledDate={disabledDate}
            placeholder={['Check-In', 'Check-Out']}
         />
         <InputNumber
            style={{ borderRadius: '0', width: '100%', borderTop: 'none' }}
            prefix='Adults: '
            min={1}
            max={2}
            defaultValue={1}
            size='large'
            onChange={handlePeople}
         />
         <InputNumber
            style={{ borderRadius: '0', width: '100%', borderTop: 'none' }}
            prefix='Kids: '
            min={0}
            max={2 - people}
            defaultValue={0}
            size='large'
            onChange={handlePeople}
         />
         <div className={!loading ? 'inactive' : 'room_price'}>
            <table>
               <tbody>
                  <tr>
                     <th className='leftBar'>Night(s)&#215; {count}</th>
                     <th className='rightBar'>${price * count}</th>
                  </tr>
                  <tr>
                     <th className='leftBar'>Tax(20%)</th>
                     <th className='rightBar'>${price * count * 0.2}</th>
                  </tr>
                  <tr className='bold'>
                     <th className='leftBar'>Total</th>
                     <th className='rightBar'>${price * count * 1.2}</th>
                  </tr>
               </tbody>
            </table>
         </div>
         <button type='submit' onClick={handleSubmit}>
            Book Now
         </button>
      </div>
   );
}

export default BookingCart;
