import React, {Component} from 'react'
import moment from 'moment'

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.timeNow = null
    this.state = {
      time: moment().format('h:mm a'),
      date: moment().format('ddd MMMM Do')
    }
  }

  componentDidMount() {
    this.timeNow = setInterval(this.tickTock.bind(this), 1000)
  }

  componentWillUnmount() {
    if (this.timeNow)
      clearInterval(this.timeNow)
  }

  tickTock() {
    this.setState({time: moment().format('h : mm a'), date: moment().format('dddd MMMM Do')})
  }

  render() {
    return (<div>
      <h1 className="clock">{this.state.time}</h1>
      <h3 className="date">{this.state.date}</h3>
    </div>)
  }
}
