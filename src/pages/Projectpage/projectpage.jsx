import React from 'react';
import ProjectDetails from '../../components/projectdetails/projectdetails'
import './projectpage.styles.scss'

const ProjectsPage = ({match}) => {

return(
    <div className="proj-container">
        <ProjectDetails match={match}/>
    </div>
)
}

export default ProjectsPage;