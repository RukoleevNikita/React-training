import React, { Component } from 'react';
import Test from './componet/Test/Test'

import './App.css';
import { Button } from 'semantic-ui-react'

class App extends Component {

  state = {
    title: "Счётчик",
    countDown: 0
  }

  changeNextHenlder = () => {
    let number = this.state.countDown
    this.setState({
      countDown: ++number
    })
  }

  changeBackHenlder = () => {
    let number = this.state.countDown
    this.setState({
      countDown: --number
    })
  }

  render() {
    const data = this.state
    return (
      <div className="items">
        <Test data={data} />
        <div>
          <Button negative onClick={this.changeBackHenlder}>back</Button>
          <Button positive onClick={this.changeNextHenlder}>next</Button>
        </div>
      </div>
    )
  }
}

export default App;
