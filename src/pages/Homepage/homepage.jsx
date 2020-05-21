import React from 'react';
import {Header, Description, Project, Contact} from '../../components';
import projects from '../../components/project-data/project-data';

import cin from '../../img/cin.jpg';
import covid from '../../img/covid.jpg';
import clothing from '../../img/clothing.jpg';

import './homepage.styles.scss';


class Homepage extends React.Component {
 state = {
   project: projects
  }

render(){
return(
    <div>
        <Header/>
        <Description/>
        <Project project={this.state.project}/>
        <Contact/>
    </div>
)};
}
export default Homepage;