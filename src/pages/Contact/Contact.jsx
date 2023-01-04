import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SubTitle from '../../components/Title/SubTitle';
import './Contact.scss';

function Contact() {
  return (
    <div className="contact">
      <div className="contact_header">
        <Navbar />
        <SubTitle content="Contact Us" />
      </div>
      <div className="contact_container">
        <div className="contact_form">
          <h1>Ask Us Anything!</h1>
          <form action="">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" />
            <textarea
              name="review"
              rows="5"
              placeholder="Type your massage here..."
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact_map">
          <div className="contact_map_address">
            <h1>How to Get Here</h1>
            <ul>
              <li>R. Frame de Morá </li>
              <li>Floor 6 </li>
              <li>Rio de Janeiro - Ipanema </li>
              <li>Cell: 123-456-7890</li>
            </ul>
          </div>
          <div className="contact_map_detail">
            <iframe
              title="rio map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3673.615029246376!2d-43.17545318523174!3d-22.964400784982566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1671543750386!5m2!1svi!2s"
              width="530"
              height="222"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <footer className="contact_footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Contact;
