import React, {Component} from 'react'
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
const YTAPI = 'AIzaSyAWa1N-uu9aabfxL517qkF3p0NURSGnCWk'

class VideoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    };
  }

  handleSearch(term) {
    YTSearch({
      key: YTAPI,
      term: term
    }, videos => this.setState({videos}));
  }

  render() {
    return (<div>
      <SearchBar onSearchTermChange={term => this.handleSearch(term)}/>
      <VideoList videos={this.state.videos}/>
    </div>);
  }
}

export default VideoContainer;
