import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Comment({className, children, author, authorImg, company, date}) {
  let classes = [`comment`];

  if (className) {
    classes.push(className);
  }

  classes = classes.join(' ');

  return (
    <div className={classes}>
      <img src={authorImg} alt={author} />
      <p className="comment__body">{children}</p>
      <div className="comment__author">{author}, <span>{company}</span></div>
      <div className="comment__date">{date}</div>
    </div>
  );
}

Comment.propTypes = {
  featured: PropTypes.bool,
};

Comment.defaultProps = {
  featured: false,
};

export default Comment;
