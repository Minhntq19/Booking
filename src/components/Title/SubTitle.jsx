import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/icons/cloud.jpg';
import './Title.scss';

function SubTitle({ content }) {
  return (
    <div className="title">
      <div>
        <h1 style={{ fontSize: '37px' }}>{content}</h1>
      </div>
      <div className="title_top">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
SubTitle.propTypes = {
  content: PropTypes.string.isRequired,
};
export default SubTitle;
