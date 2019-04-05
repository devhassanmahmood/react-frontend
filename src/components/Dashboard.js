import React from 'react'
import PropTypes from 'prop-types'
import VideoContainer from './VideoContainer';
import Clock from './Clock';
import News from './News';
import Spotify from './Spotify';
import Login from './Login';
import Weather from './Weather';
import Register from './Register';
import Logos from './Logos';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      context: "youtube"
    }
    this.changeContext = this.changeContext.bind(this)
  }
  changeContext(con){
    this.setState({context: con})
  }

  render() {
    let component = null;
    switch(this.state.context) {
      case "youtube":
        component = <VideoContainer />;
        break;
      default:
        component = this.state.context
    }
    return (<div>
      <div className="region left">
        <Clock/>
      </div>
      <div className="region middle center">
        {component}
      </div>
      <div className="region right">
        {/* <VideoContainer/> */}
      <Logos changeContext={this.changeContext} />
      </div>
      <div className="region top left">
        <News />
      </div>
      <div className= "region top right">
        <Weather /> 
      </div>
    </div>)
  }
}

export default Dashboard;
