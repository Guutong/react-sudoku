import React from 'react';
import './App.css';

class Cell extends React.Component { 
  render() {
    return (<div className="cell">{this.props.number}</div>);
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
