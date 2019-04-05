import React, { Component } from 'react'

class Video extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const videoId = this.props.video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <li>
                <iframe className="video" showinfo="0" allowFullScreen="allowFullScreen" frameBorder="0" type="text/html" src={url}></iframe>
            </li>
        );
    }
}

export default Video;
