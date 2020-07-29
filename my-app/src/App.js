import React, { Component } from 'react';
import Ninjas from './ninjas';
// './ninjas' is the file name for ninjas.js when we import that file to this current file

class App extends Component {
  render() {
  return (
    <div className="App">
      <h1>Clowns</h1>
      <p>Welcome losers</p>
      <Ninjas name="lashy" age="90" afro="dinosaur"/> <br />
      <Ninjas name="yogi" age="55" afro="rainbow"/>
    </div>
   );
  }
}

export default App;
