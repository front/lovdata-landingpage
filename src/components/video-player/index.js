import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class VideoPlayer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paused: true,
    };

    this.playVideo = this.playVideo.bind(this);
   }

  playVideo() {
    console.log('playVideo');

    this.setState({
      paused: !this.state.paused,

    });
  }

  render() {
    console.log('render');
    const classes = 'video-player';
    const videoSrc = `${this.props.src}${ this.state.paused ? `` : `&autoplay=1`}`;

    return (
      <div className={ classes } onClick={ this.playVideo }>
        <div className="video-player__button"></div>
        <iframe
          className="video-player__iframe"
          title="iframe"
          src={ videoSrc }
        ></iframe>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string,
};

VideoPlayer.defaultProps = {
  src: 'https://player.vimeo.com/video/264438288?title=0&byline=0&controls=0&sidedock=0',
};

export default VideoPlayer;





