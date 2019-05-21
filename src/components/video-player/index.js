import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function VideoPlayer({ children, src }) {
  const classes = `video-player`;

  return (
    <div className={classes}>
      <div className="video-player__button"></div>
      <iframe
        className="video-player__iframe"
        title="iframe"
        src={src}
      ></iframe>
    </div>
  );
}

VideoPlayer.propTypes = {
  src: PropTypes.string,
};

VideoPlayer.defaultProps = {
  src: 'https://player.vimeo.com/video/264438288?title=0&byline=0',
};

export default VideoPlayer;





