import React, { Component } from 'react';
import Ninjas from './ninjas';
import AddNinja from './AddNinja';
// './ninjas' is the file name for ninjas.js when we import that file to this current file

class App extends Component {
  state = {
    ninjas : [
      {name: 'pills', age: 19, afro: 'yellow', id: 1},
      {name: 'and', age: 39, afro: 'pink', id: 2},
      {name: 'potions', age: 48, afro: 'blue', id: 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
  return (
    <div className="App">
      <h1>Clowns</h1>
      <p>Welcome losers</p>
      <Ninjas ninjas={this.state.ninjas} />
      <AddNinja addNinja={this.addNinja} />
    </div>
   );
  }
}

export default App;
