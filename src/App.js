import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //      <h1>Testing...</h1>
    //   </div>
    // );
    return React.createElement('div',null, React.createElement('h1',null,'Hi, This is H1 Tag'));

  }
}

export default App;
