import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function TableFooter({ children, bordered }) {
  const classes = `table-footer${bordered ? ' table-footer--bordered' : ''}`;

  return (
    <div className={classes}>{children}</div>
  );
}

TableFooter.propTypes = {
  bordered: PropTypes.bool,
};

TableFooter.defaultProps = {
  bordered: false,
};

export default TableFooter;
