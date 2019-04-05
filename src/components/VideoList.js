import React, {Component} from 'react';
import Video from './Video';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userVids = this.props.videos.slice(0, 3).map(video => {
      return <Video key={video.id} video={video}/>
    })

    return (<ul>
      {userVids}
    </ul>);
  }
}

export default VideoList;
