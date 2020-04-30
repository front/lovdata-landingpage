import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Spinner } from '../index';

import './style.scss';

class VideoPlayer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paused: true,
    };

    this.playVideo = this.playVideo.bind(this);
    this.keyUp = this.keyUp.bind(this);
   }

  playVideo() {
    this.setState({
      paused: !this.state.paused,
    });
  }

  keyUp(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      this.playVideo();
    }
  }

  render() {
    const classes = 'video-player';
    const { paused } = this.state;

    const videoFrame = paused ? <div className="video-player__placeholder"></div> : <iframe className="video-player__iframe" title="iframe" src={ this.props.src }
  ></iframe>

    return (
      <div role="button" tabIndex="0" aria-disabled={ !paused } className={ classes } onKeyUp={ this.keyUp } onClick={ this.playVideo }>
        <Spinner />
        <div className={ `video-player__button${ paused ? `` : ` video-player__button--hide`  }`}></div>
        { videoFrame }
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string,
};

VideoPlayer.defaultProps = {
  src: 'https://player.vimeo.com/video/264438288?title=0&byline=0&controls=0&sidedock=0&autoplay=1',
};

export default VideoPlayer;





