import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarSearchResults from "./components/CarSearchResults"
import CarSearchForm from "./components/CarSearchForm"




class App extends Component {

  render() {
    return (
      <div>


<CarSearchForm/>
<CarSearchResults/>

      </div>
    );
  }
}

export default App;
