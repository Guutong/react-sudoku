import React from 'react';
import './App.css';

class Cell extends React.Component { 
  state = {
    number: 1
  }
  render() {
    return (
      <div
        onClick={(e) => this.setState({
          number: (this.state.number + 1) % 5
        })}
        className="cell"
      >
        {this.state.number !== 0 && this.state.number}
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="board">
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
        </div>
      </div>
    );
  }
}

export default App;
