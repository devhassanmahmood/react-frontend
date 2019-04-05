import React, { Component } from 'react'

class Logos extends Component {
  constructor(props) {
    super(props);
    this.changeContext = this.changeContext.bind(this)

  }

  changeContext(e) {
    this.props.changeContext(e.target.dataset.key)
  }


  render () {
  return (
    <div>
      <img data-key="first" onClick={this.changeContext} className='logo' src="https://www.shareicon.net/data/128x128/2016/08/19/816714_man_512x512.png" alt="globe"/>
      <br></br>
      <img data-key="youtube" onClick={this.changeContext} className='logo' src="https://www.shareicon.net/data/128x128/2015/08/29/92756_play_607x607.png" alt="phone"/>
      <br></br>
      <img data-key="third" onClick={this.changeContext} className='logo' src="https://www.shareicon.net/data/128x128/2016/07/02/634604_spotify_512x512.png" alt="phone"/>
      <br></br>
      <img data-key="forth" onClick={this.changeContext} className='logo' src="https://www.shareicon.net/data/128x128/2016/09/01/822746_user_512x512.png" alt="phone"/>
      <br></br>
      <img data-key="fifth" onClick={this.changeContext} className='logo' src="https://www.shareicon.net/data/128x128/2016/08/01/639854_network_512x512.png" alt="phone"/>
      <br></br>
      <img data-key="sixth" onClick={this.changeContext} className='logo' src="https://www.shareicon.net/data/128x128/2016/08/19/816681_miscellaneous_512x512.png" alt="phone"/>
      <br></br>
      <img data-key="seventh" onClick={this.changeContext} className='logo' src="https://www.shareicon.net/data/128x128/2016/09/23/833933_map_512x512.png" alt="phone"/>
    </div>
    )
  }
}


export default Logos;
