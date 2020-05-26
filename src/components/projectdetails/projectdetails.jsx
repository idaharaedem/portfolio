import React from 'react';
import projects from '../../components/project-data/project-data'
import DetailButton from '../detail-button/detail-button';
import {Link} from 'react-router-dom';
import './projectdetails.styles.scss';



const ProjectDetails = ({match}) => {


     const projectLink = () => (
        <a href="https://crown-clothing-edem.herokuapp.com/"/>
    ); 
    
    return(
        //{`${projects.portfolio_projects.find(item => item.id === parseInt(match.params.id)).link}`}
        <section className="proj-container">
            
            <div className="proj-overview">
            <h1>Project Overview</h1>
               {
               <p> {projects.portfolio_projects.find(item => item.id === parseInt(match.params.id)).overview} </p>
               }
                <div className="detail-buttons">
                <a href={`${projects.portfolio_projects.find(item => item.id === parseInt(match.params.id)).link}`} target="_blank">
                    <DetailButton> 
                        View Project 
                    </DetailButton>
                </a>

                <a href={`${projects.portfolio_projects.find(item => item.id === parseInt(match.params.id)).github}`} target="_blank">
                    <DetailButton> 
                        View GitHub 
                    </DetailButton>
                </a>
                </div>
            </div>
    
            <div className="proj-image">
               <img src={`${projects.portfolio_projects.find(item => item.id === parseInt(match.params.id)).image}`}/>
            </div>
    
        </section>
    )
    };
    
    export default ProjectDetails;