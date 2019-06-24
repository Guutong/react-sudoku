import React from 'react';
import './App.css';

class Cell extends React.Component { 
  render() {
    return (<div className="cell">1</div>);
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="board">
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
          <Cell/>
        </div>
      </div>
    );
  }
}

export default App;
