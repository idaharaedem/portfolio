import React from 'react';
import {Route} from 'react-router-dom'
import {Header, Description, Project} from './components';

import './App.css';

class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <Header/>
        <Description/>
        <Project/>

      </div>
    )
  }
}

export default App;
