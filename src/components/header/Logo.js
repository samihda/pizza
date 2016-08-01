import React from 'react';

const logo = "/assets/logo/feedme_logo.svg";
const logoWhite = "/assets/logo/feedme_logo_white.svg";

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
