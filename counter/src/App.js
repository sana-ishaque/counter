import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);

    this.state = {
      counter: 0,
      isStarted: false
    }
  }

  start() {
    setInterval(() => {
      this.setState({
        counter: parseInt(Math.random() * 10),
        isStarted: true
      })
    }, 1000)
  }
  stop() {
    this.setState({
      isStarted: false,

    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.counter}</h1>
          {this.state.isStarted === false ? <button onClick={this.start}>Start</button> : <button onClick={this.stop}>Stop</button>}
        </div>
      </div>
    );
  }
}

export default App;
