import React from 'react';

const Splash = ({ onStartClick }) => (
  <main>
    <div className="paper">
      <img src="/assets/logo/feedme_logo_white.svg" />
      <h1>Chosen food every 5 days</h1>
      <p>Today on the table: <span className="bottom-shadow-red">Original Steinofen-Pizza</span></p>
    </div>
    <div className="paper">
      <button onClick={onStartClick} id="splash-button" className="pure-button">
        <img className="icon-left" src="/assets/icons/order_icon.svg" />
        <span>Order Today’s Meal</span>
      </button>
    </div>
    <div className="paper">
      <p>Check out our meal for tomorrow.</p>
      <small>Made with love.</small>
      <div><img src="/assets/icons/scroll_icon.svg" /></div>
    </div>
  </main>
);

Splash.propTypes = {
  onStartClick: React.PropTypes.func.isRequired,
};

export default Splash;
