import React from 'react';

const Sequence = ({ step }) => {
  const text = ['ORDER', 'ADDRESS', 'FINISH'];

  return (
    <nav>
      <ul>
        {text.map((str, i) =>
          <li
            key={i}
            className={i < step ? 'active' : ''}
          >
            <a href="#">{str}</a>
          </li>)}
      </ul>
    </nav>
  );
};

Sequence.propTypes = {
  step: React.PropTypes.number.isRequired
};

export default Sequence;
