import React from 'react';

const logo = require('../../assets/logo/feedme_logo.png');
const logoWhite = require('../../assets/logo/feedme_logo_white.png');

const Logo = ({ step }) => (
  <div id="logo">
    <a href="#" className={step > 0 ? 'dark-text icon-button' : 'white-text icon-button'}>
      <img className="icon-left" src={step === 0 ? logoWhite : logo} alt="logo" height="16" />
      <span>feed.me</span>
    </a>
  </div>
);

Logo.propTypes = {
  step: React.PropTypes.number.isRequired
};

export default Logo;
