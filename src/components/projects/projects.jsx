import React from 'react';
import {Card, CardContent,Typography, Grid, CardMedia, CardActionArea} from '@material-ui/core'
import cin from '../../img/cin.jpg';
import covid from '../../img/covid.jpg';
import clothing from '../../img/clothing.jpg';

import './projects.styles.scss';

const Projects = () => (
    <section className = "container">
        <h1>My Projects</h1>

        <div className="cards">
        <Grid container spacing={3} justify='center'>
            <Card className="card cinema">
                <CardActionArea>
                    <CardMedia 
                    className="cin-media"
                    image={cin}
                    title="Cinema"
                    />
                    <CardContent>
                        <Typography align="center" gutterBottom variant="h5" component="h2" color= "textSecondary">
                            Cinema  
                        </Typography>  
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card className="card covid">
                <CardActionArea>
                    <CardMedia 
                    className="covid-media"
                    image={covid}
                    title="Cinema"
                    />
                    <CardContent>
                        <Typography align="center" gutterBottom variant="h5" component="h2" color= "textSecondary">
                            Covid  Tracker
                        </Typography>  
                    </CardContent>
                </CardActionArea>
            </Card>

           

            <Card className="card clothing">
                <CardActionArea>
                    <CardMedia 
                    className="clothing-media"
                    image={clothing}
                    title="Cinema"
                    />
                    <CardContent color="textSecondary">
                        <Typography align="center" gutterBottom variant="h5" component="h2" color= "textSecondary">
                            Clothing  
                        </Typography>  
                    </CardContent>
                </CardActionArea>
            </Card>
            </Grid>
        </div>
    </section>
)

export default Projects;