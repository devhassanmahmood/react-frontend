import React from 'react'
import PropTypes from 'prop-types'
const WSJAPI = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d117baab465f4ba0ab0d8cd5f63323f4"

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      story:''
    }
  }

  componentDidMount() {
    setInterval(function() {
      const story = this.state.stories[Math.floor((Math.random() * 20) + 1)].title;
      this.setState({ story });
    }.bind(this), 8000)

    fetch(WSJAPI).then(res => res.json()).then(json => this.setState({
      stories: json.articles
    }))
  }

  render() {

    return (
      <div><strong><p>Latest News</p></strong>{this.state.story} < /div>
    )
  }
}

export default News;
