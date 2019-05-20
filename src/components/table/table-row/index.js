import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function TableRow({ children, columns, body }) {
  const classes = `table-row table-row--has-${columns}-cols${body ? ' table-row--has-background' : ''}`;

  return (
    <div className={classes}>
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
