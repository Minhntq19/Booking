import React, { useState } from 'react';
import { DatePicker, InputNumber, Spin } from 'antd';
import dayjs from 'dayjs';
import './BookingCart.scss';

function BookingCart({ price }) {
   const { RangePicker } = DatePicker;
   const disabledDate = (current) => {
      return current < dayjs();
   };
   const [count, setCount] = useState('');
   const [people, setPeople] = useState(0);
   const [loading, setLoading] = useState(false);
   const handleChange = (e) => {
      if (e) {
         const date1 = dayjs(e[1]).format();
         const date2 = dayjs(e[0]).format();
         const diff = dayjs(date1).diff(date2, 'Day', true);
         setCount(diff);
         setLoading(true);
         document.getElementsByClassName('room_price').classList.add('hide');
      } else {
         setLoading(false);
      }
   };
   const handlePeople = (e) => {
      setPeople(e);
      console.log(e);
   };
   return (
      <div className='roomDetail_booking'>
         <div className='roomDetail_price'>
            <p>From</p>
            <h2>${price}</h2>
            <p>Per Night</p>
         </div>
         <RangePicker
            onChange={handleChange}
            style={{ borderRadius: '0', width: '100%', fontSize: '14px' }}
            size='large'
            disabledDate={disabledDate}
            placeholder={['Check-In', 'Check-Out']}
         />
         <InputNumber
            className='adults'
            style={{ borderRadius: '0', width: '100%', borderTop: 'none' }}
            prefix='Adults: '
            min={0}
            max={2}
            onKeyDown={(e) => e.preventDefault()}
            defaultValue={1}
            size='large'
            onChange={handlePeople}
         />
         <InputNumber
            className='children'
            style={{ borderRadius: '0', width: '100%', borderTop: 'none' }}
            prefix='Kids: '
            min={0}
            max={2}
            onKeyDown={(e) => e.preventDefault()}
            defaultValue={0}
            size='large'
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

         <button type='button'>Book Now</button>
      </div>
   );
}

export default BookingCart;
