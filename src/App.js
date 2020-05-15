import React from 'react';
import {Route} from 'react-router-dom'
import {Header, Description} from './components';

import './App.css';

class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <Header/>
        <Description/>

      </div>
    )
  }
}

export default App;
