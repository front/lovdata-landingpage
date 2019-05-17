import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function TableRow({ children, columns, body }) {
  const classes = `table-row${body ? ' table-row--has-background' : ''}`;

  return (
    <div
      className={classes}
      style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
      {children}
    </div>
  );
}

TableRow.propTypes = {
  columns: PropTypes.number,
  body: PropTypes.bool,
};

TableRow.defaultProps = {
  columns: 3,
  body: true,
};

export default TableRow;
