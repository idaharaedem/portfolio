import React from 'react';
import Button from '../custom-button/custom-button';
import {Link} from 'react-scroll'

import './header.styles.scss';

const PortHeader = () => (
    <div className="body">
       <section className="skewed"> 
            <h1> Idahara Jason Edem </h1>
            {/* <h2> Software Engineer</h2> */}
            
            <div className="buttons">
                <Link activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={1000}
                    >
                        <Button> Projects </Button>
                </Link>
                
                <Link activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={2000}
                    >
                        <Button> Contact </Button>
                </Link>
            </div>
           
       </section>
    </div>
);

export default PortHeader;