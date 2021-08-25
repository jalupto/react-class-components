// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import {Films} from './films';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Films favNumber = {52} fname = {'Barry'} />
    </div>
    );
  }
}

export default App;