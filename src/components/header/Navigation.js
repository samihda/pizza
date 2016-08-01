import React from 'react';
import Sequence from './Sequence';
import MainMenu from './MainMenu';

const Navigation = (props) => {
  const Empty = () => null; 
  return (
    <nav>
      <div className="pure-menu pure-menu-horizontal">
        {props.step === 0 ? <MainMenu {...props} /> : <Empty />}
        {props.step > 0 ? <Sequence {...props} /> : <Empty />}
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  step: React.PropTypes.number.isRequired
};

export default Navigation;
