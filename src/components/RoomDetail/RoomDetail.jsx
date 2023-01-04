import React, { useRef } from 'react';
import { BiFridge, BiBath } from 'react-icons/bi';
import { BsSnow3, BsTelephone } from 'react-icons/bs';
import { GiForkKnifeSpoon, GiTowel } from 'react-icons/gi';
import { FaWifi, FaCocktail } from 'react-icons/fa';
import { Carousel } from 'antd';
import Images from '../../assets/imgs/Images';
import './RoomDetail.scss';

function RoomDetail({ type, roomType, bed, bedType, size, bath, kitchen }) {
   const image = Object.values(Images).filter((key) => key.includes(`${type}`));
   const ref = useRef(0);
   const handleClick = (e) => {
      ref.current.goTo(e.target.getAttributeNode('id').value);
   };
   const styles = { fontSize: '20px', color: '#777', alignSelf: 'flex-end' };
   let info =
      'Affordable luxury. Our Junior Suites are the perfect option if you’re looking for a little extra luxury. With an open 400 square foot floor plan, the Junior Suites offer the extra space you need to spread out and enjoy the breathtaking views of the city skyline.';
   switch (roomType) {
      case 'Standard':
         info =
            'Functional and comfortable. Sit back and enjoy one of our brand new 280 square foot Standard Rooms. Complete with courtyard views, stylish decor and natural light, our Standard Rooms are the perfect combination of function and comfort. Ideally suited for today’s business or leisure travelers.';
         break;
      case 'Superior':
         info =
            'Elegant simplicity. Our Superior Rooms give you the space and privacy you need to work or play on the road. The spacious 380 square foot rooms include an intimate lounge area, business workstation and views of the courtyard. Complete with all the regular amenities, our Superior Rooms also include a daily newspaper and water bottles.';
         break;
      default:
   }
   return (
      <div className='roomDetail_content'>
         <div className='roomDetail_info'>
            <Carousel ref={ref}>
               <img src={image[0]} alt='' />
               <img src={image[1]} alt='' />
               <img src={image[2]} alt='' />
               <img src={Images.View} alt='' />
               <img src={Images.Towel} alt='' />
            </Carousel>
            <div className='carousel_list'>
               <img src={image[0]} alt='' id='0' onClick={handleClick} />
               <img src={image[1]} alt='' id='1' onClick={handleClick} />
               <img src={image[2]} alt='' id='2' onClick={handleClick} />
               <img src={Images.View} alt='' id='3' onClick={handleClick} />
               <img src={Images.Towel} alt='' id='4' onClick={handleClick} />
            </div>
            <div className='roomDetail_properties'>
               <h3>Properties:</h3>
               <ul>
                  <li>Accommodates: 2</li>
                  <li>Size: {size} sq ft</li>
                  <li>
                     Beds: {bed} {bedType}(s)
                  </li>
               </ul>
            </div>
            <div className='roomDetail_properties'>
               <h3>More Info:</h3>
               <p>{info}</p>
            </div>
            <div className='roomDetail_properties'>
               <h3>Amenities:</h3>
               <ul>
                  <li>
                     <BsSnow3 style={styles} />
                     <span> A/C</span>
                  </li>
                  <li>
                     <FaWifi style={styles} />
                     <span> WiFi</span>
                  </li>
                  <li>
                     <BiFridge style={styles} />
                     <span> Fridge</span>
                  </li>
                  <li>
                     <FaCocktail style={styles} />
                     <span> Mini-Bar</span>
                  </li>
                  <li>
                     <BsTelephone style={styles} />
                     <span> Telephone</span>
                  </li>
                  <li>
                     <GiTowel style={styles} />
                     <span> Towels</span>
                  </li>
                  <li style={bath ? {} : { display: 'none' }}>
                     <BiBath style={styles} />
                     <span> Bath</span>
                  </li>
                  <li style={kitchen ? {} : { display: 'none' }}>
                     <GiForkKnifeSpoon style={styles} />
                     <span> Kitchen</span>
                  </li>
               </ul>
            </div>
            <div className='roomDetail_properties' style={{ border: 'none' }}>
               <h3>Terms:</h3>
               <p>Check-In Time 12:00 AM | Check-Out Time 12:00 AM</p>
            </div>
         </div>
      </div>
   );
}
export default RoomDetail;
