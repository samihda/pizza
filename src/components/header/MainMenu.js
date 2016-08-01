import React from 'react';
import CornerButton from './CornerButton';

const MainMenu = (props) => {
  const text = ['OVERVIEW', `TODAY'S MEAL`, 'MORE'];

  return (
    <ul className="pure-menu-list">
      {text.map((str, i) =>
        <li className="pure-menu-item" key={i}>
          <a href="#" className="pure-menu-link white-text">{str}</a>
        </li>
      )}
      <li className="pure-menu-item">
        <CornerButton {...props} />
      </li>
    </ul>
  );
};

export default MainMenu;
