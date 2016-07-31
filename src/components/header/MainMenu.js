import React from 'react';

const MainMenu = () => {
  const text = ['OVERVIEW', `TODAY'S MEAL`, 'MORE'];

  return (
    <nav>
      <ul>
        {text.map((str, i) =>
          <li key={i}>
            <a href="#">{str}</a>
          </li>)}
      </ul>
    </nav>
  );
};

export default MainMenu;
