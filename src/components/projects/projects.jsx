import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Card, CardContent,Typography, Grid, CardMedia, CardActionArea} from '@material-ui/core'
import Aos from 'aos';
import "aos/dist/aos.css"



import './projects.styles.scss';


const Projects = ({project}) => 
{

    useEffect(() => {
        Aos.init({duration: 1500})
      }, []);

return(
    <section className = "container" id="projects">
        <h1>My Projects</h1>
        
{           <div className="cards">
        <Grid container spacing={3} justify='center'>
  
            <Link  to={`/projects/${project.portfolio_projects[0].id}`} style={{ textDecoration: 'none' }}>
                <Card data-aos="slide-right" data-aos-offset="50"  className="des-images" className="card cinema">
                    <CardActionArea>
                        <CardMedia 
                        className="cin-media"
                        image={project.portfolio_projects[0].image}
                        title="Cinema"
                        />
                        <CardContent>
                            <Typography border-bottom="none" align="center" gutterBottom variant="h5" component="h2" color= "textSecondary">
                                Cinema  
                            </Typography>  
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
           
           
            
                <Link to={`/projects/${project.portfolio_projects[1].id}`} style={{ textDecoration: 'none' }}> 
                <Card data-aos="slide-up" data-aos-offset="50"   className="des-images" className="card cinema" className="card covid">
                    <CardActionArea>
                        <CardMedia 
                        className="covid-media"
                        image={project.portfolio_projects[1].image}
                        title="Covid"
                        />
                        <CardContent>
                            <Typography align="center" gutterBottom variant="h5" component="h2" color= "textSecondary">
                                Covid  Tracker
                            </Typography>  
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
            
           
           
                <Link to={`/projects/${project.portfolio_projects[2].id}`} style={{ textDecoration: 'none' }}> 
                <Card data-aos="slide-left" data-aos-offset="50"  className="des-images" className="card cinema" className="card clothing">
                    <CardActionArea>
                        <CardMedia 
                        className="clothing-media"
                        image={project.portfolio_projects[2].image}
                        title="Clothing"
                        />
                        <CardContent color="textSecondary">
                            <Typography  align="center" gutterBottom variant="h5" component="h2" color= "textSecondary">
                                Clothing  
                            </Typography>  
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
           
            </Grid>
        </div>
}
    </section>

)
}
export default Projects;