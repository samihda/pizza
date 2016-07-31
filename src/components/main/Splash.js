import React from 'react';

const Splash = ({ onStartClick }) => (
  <main>
    <img src="/assets/logo/feedme_logo_white.svg" />
    <h1>Chosen food every 5 days</h1>
    <p>Today on the table: <span>Original Steinofen-Pizza</span></p>
    <button onClick={onStartClick}>
      <img src="/assets/icons/order_icon.svg" />
      Order Today’s Meal
    </button>
    <p>Check out our meal for tomorrow.</p>
    <small>Made with love.</small>
    <img src="/assets/icons/scroll_icon.svg" />
  </main>
);

Splash.propTypes = {
  onStartClick: React.PropTypes.func.isRequired,
};

export default Splash;
