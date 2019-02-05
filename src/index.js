import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CarSearchForm from './components/CarSearchForm';
import CarSearchResults from './components/CarSearchResults';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


const Root = () => {
  return (
    <BrowserRouter>
    <div>
      <Route exact path="/" component = {CarSearchForm} />
      <Route path ="/results" component={ CarSearchResults } />
    </div>
  </BrowserRouter>
  )
}

ReactDOM.render ( <Root />, document.querySelector('#root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
