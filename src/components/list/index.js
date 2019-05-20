import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function List({ children, title }) {
  const classes = `list`;

  return (
    <div className={classes}>
      <h4 className="list__title">{title}</h4>
      <ul>
        {children}
      </ul>
    </div>
  );
}

List.propTypes = {
  title: PropTypes.string,
};

export default List;
