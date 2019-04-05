import React from 'react'
import PropTypes from 'prop-types'
import SpotifyPlayer from 'react-spotify-player';
const size = {
  width: 220,
  height: 300,
};
const view = 'list';
const theme = 'black';

class Spotify extends React.Component {
  render () {
  return (
    <div>
    <SpotifyPlayer
      uri="spotify:user:spotify:playlist:37i9dQZF1DX6drTZKzZwSo"
      size={size}
      view={view}
      theme={theme}
    />
    </div>
  )
  }
}

export default Spotify;
