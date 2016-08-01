import React from 'react';
import CornerButton from './CornerButton';

const Sequence = (props) => {
  const text = ['ORDER', 'ADDRESS', 'FINISH'];
  
  return (
    <ul id="sequence" className="pure-menu-list">
      {props.step < 4 ? text.map((str, i) =>
        <li key={i} className="pure-menu-item">
          <a href="#" className={
            i === props.step - 1 ?
            'pure-menu-link sequence-active' :
            'pure-menu-link'
          }>
            {str}
          </a>
        </li>
      ) : null}
      <li className="pure-menu-item">
        <CornerButton {...props} />
      </li>
    </ul>
  );
};

Sequence.propTypes = {
  step: React.PropTypes.number.isRequired
};

export default Sequence;
