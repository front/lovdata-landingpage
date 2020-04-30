import React from 'react';

import './style.scss';

function Comment({ className, children, author, company, date }) {
  let classes = [`comment`];

  if (className) {
    classes.push(className);
  }

  classes = classes.join(' ');

  return (
    <div tabIndex="0" className={ classes }>
      <p className="comment__body">{ children }</p>
      <div className="comment__author">{ author }, <span>{ company }</span></div>
      <div className="comment__date">{ date }</div>
    </div>
  );
}

export default Comment;
