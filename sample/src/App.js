import React, { Component } from 'react';
import ItemList from './components/ItemList ';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Object List</h1>
        <ItemList />
      </div>
    );
  }
}

export default App;