import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function TableCell({ children, bordered }) {
  const classes = `table-cell${bordered ? ' table-cell--bordered' : ''}`;

  return (
    <div className={classes}>{children}</div>
  );
}

TableCell.propTypes = {
  bordered: PropTypes.bool,
};

TableCell.defaultProps = {
  bordered: false,
};

export default TableCell;
