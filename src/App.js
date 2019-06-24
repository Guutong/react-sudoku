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
        className={`cell ${this.props.isInitial ? 'initial': ''}`}
      >
        {this.state.number !== 0 && this.state.number}
      </div>
    );
  }
}
class Board extends React.Component { 
  state = {
    board: [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4]
    ],
    initial: [
      [true, true, true, false],
      [true, true, true, false],
      [true, false, true, true],
      [true, true, true, false]
    ],
  }
  render() { 
    return (
      <div className="board">
        {
          this.state.board.map((row, i) => row.map((number, j) => <Cell key={`cell-${i}-${j}`} number={number} initial={this.state.initial[i][j]} />))
        }
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
