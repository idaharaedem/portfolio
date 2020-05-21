import React from 'react';
import Homepage from './pages/Homepage/homepage';
import ProjectsPage from './pages/Projectpage/projectpage';
import {Switch,Route} from 'react-router-dom';
import './App.css';


class App extends React.Component {


  render() {
    
    return (
      <div className="App">
        <Switch>
          <Route exact path ='/' component={Homepage}/>
          <Route path ='/projects/:id' component={ProjectsPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;
