import React from 'react';
import { Link } from 'react-router-dom';
import './Apartment.scss';
import apartView from '../../assets/imgs/Apartment2.jpg';
import bedroom from '../../assets/imgs/Apartment.jpg';

function Apartment() {
   return (
      <div className="apartment">
         <div className="apartment_title">
            <h1>A Home in the Heart of the City</h1>
            <p>
               Stay in a beautiful highrise in Ipanema just off the beach close to many world-class cafes and
               restaurants. Enjoy Bossa Nova with a cold beer!
            </p>
         </div>
         <div className="apartment_detail">
            <div className="apartment_livingroom">
               <h2>Our Apartment</h2>
               <img src={apartView} alt="" />
            </div>
            <div className="apartment_bedroom">
               <img src={bedroom} alt="" />
               <div className="apartment_bedroom_content">
                  <p>
                     The apartment is spacious with high ceilings, large windows, an open balcony and a beautiful view
                     of the beach. Stay cool with central A/C and wind-down comfortably in the queen sized bedroom.
                  </p>
                  <Link to="/Hotel">
                     <h2 type="button">BOOK NOW</h2>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Apartment;
