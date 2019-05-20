import React from 'react';

import './style.scss';

function VideoPlayer({ children, src }) {
  const classes = `video-player`;

  return (
    <div className={classes}>
      <iframe title="iframe" width="100%" height="365" src={src}></iframe>
    </div>
  );
}

export default VideoPlayer;





