import React from 'react';
import './CartSummary.scss';
import images from '../../assets/imgs/Images';

function CartSummary() {
   return (
      <div className='cartSummary'>
         <div className='cartSummary_tittle'>Order Summary</div>
         <img src={images.Junior} alt='' />
         <table className='cartSummary_detail'>
            <tbody>
               <tr>
                  <th className='leftBar'>Room Type</th>
                  <th className='rightBar'>Junior Suite</th>
               </tr>
               <tr>
                  <th className='leftBar'>Dates</th>
                  <th className='rightBar'>Jan 13-15,2023</th>
               </tr>
               <tr>
                  <th className='leftBar'>No. of nights</th>
                  <th className='rightBar'>2</th>
               </tr>
               <tr>
                  <th className='leftBar'>Guests</th>
                  <th className='rightBar'>1 Adults</th>
               </tr>
            </tbody>
         </table>
         <table className='cartSummary_subtotal'>
            <tbody>
               <tr>
                  <th className='leftBar'>Subtotal</th>
                  <th className='rightBar'>100$</th>
               </tr>
               <tr>
                  <th className='leftBar'>Tax (20%)</th>
                  <th className='rightBar'>20$</th>
               </tr>
            </tbody>
         </table>
         <table className='cartSummary_total'>
            <tbody>
               <tr>
                  <th className='leftBar'>Total</th>
                  <th className='rightBar'>120$</th>
               </tr>
            </tbody>
         </table>
      </div>
   );
}
export default CartSummary;
