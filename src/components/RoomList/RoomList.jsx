import React from 'react';
import PropTypes from 'prop-types';
import { FaWifi, FaCocktail } from 'react-icons/fa';
import { BiFridge, BiBath } from 'react-icons/bi';
import { BsSnow3, BsTelephone } from 'react-icons/bs';
import { GiForkKnifeSpoon, GiTowel } from 'react-icons/gi';
import { Tooltip } from 'antd';
import './RoomList.scss';
import { Link } from 'react-router-dom';

function RoomList({ type, size, bed, bedType, bath, kitchen, price, roomType }) {
   let messages = 'Our Junior Suites offer breathtaking views of the city skyline.';
   switch (roomType) {
      case 'Standard':
         messages = 'Our Standard Rooms are the perfect combination of function and comfort.';
         break;
      case 'Superior':
         messages = 'Our Superior Rooms are comfortable, roomy and elegant.';
         break;
      default:
   }
   return (
      <div className='room'>
         <img src={type} alt='JuniorSuite' />
         <div className='room_detail'>
            <h2>{roomType} Suite</h2>
            <p>{messages}</p>
            <ul>
               <li>Size: {size} sq ft</li>
               <li>
                  Bed: {bed} {bedType}
               </li>
            </ul>
            <div className='room_facilities'>
               <div className='tooltips'>
                  <Tooltip placement='top' title='A/C' overlayInnerStyle={{ color: '#777' }} color='#fff'>
                     <BsSnow3 />
                  </Tooltip>
                  <Tooltip placement='top' title='Wifi' overlayInnerStyle={{ color: '#777' }} color='#fff'>
                     <FaWifi />
                  </Tooltip>
                  <Tooltip placement='top' title='Fridge' overlayInnerStyle={{ color: '#777' }} color='#fff'>
                     <BiFridge />
                  </Tooltip>
                  <Tooltip placement='top' title='Mini-bar' overlayInnerStyle={{ color: '#777' }} color='#fff'>
                     <FaCocktail />
                  </Tooltip>
                  <Tooltip placement='top' title='Telephone' overlayInnerStyle={{ color: '#777' }} color='#fff'>
                     <BsTelephone />
                  </Tooltip>
                  <Tooltip placement='top' title='Towels' overlayInnerStyle={{ color: '#777' }} color='#fff'>
                     <GiTowel />
                  </Tooltip>
                  <Tooltip placement='top' title='Bath' overlayInnerStyle={{ color: '#777' }} color='#fff'>
                     <BiBath style={bath ? {} : { display: 'none' }} />
                  </Tooltip>
                  <Tooltip placement='top' title='Kitchen' overlayInnerStyle={{ color: '#777' }} color='#fff'>
                     <GiForkKnifeSpoon style={kitchen ? {} : { display: 'none' }} />
                  </Tooltip>
               </div>
            </div>
         </div>
         <div className='room_price'>
            <p>From</p>
            <h2>${price}</h2>
            <Link to={`/Hotel/room/${roomType}`}>
               <button type='button'>More info</button>
            </Link>
         </div>
      </div>
   );
}
RoomList.propsTypes = {
   size: PropTypes.number,
   bed: PropTypes.number,
   bedType: PropTypes.string,
   price: PropTypes.number,
   kitchen: PropTypes.bool,
   bath: PropTypes.bool,
   roomType: PropTypes.string,
};
export default RoomList;
