import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarSearchResults from "./components/CarSearchResults"
import CarSearchForm from "./components/CarSearchForm"

class App extends Component {
  render() {
    return (
      <div>

<CarSearchResults/>
<CarSearchForm/>

      </div>
    );
  }
}

export default App;
