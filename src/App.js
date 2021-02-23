import React, { Component } from 'react'
import Counter from './componet/Counter/Counter'

import { Button } from 'semantic-ui-react'
import './index.css'

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
        <Counter data={data} />
        <div>
          <Button negative onClick={this.changeBackHenlder}>back</Button>
          <Button positive onClick={this.changeNextHenlder}>next</Button>
        </div>
      </div>
    )
  }
}

export default App
