import React from 'react';
import Button from '../custom-button/custom-button'

import './header.styles.scss';

const PortHeader = () => (
    <div className="body">
       <section className="skewed"> 
            <h1> Idahara Edem </h1>
            {/* <h2> Software Engineer</h2> */}
            
            <div className="buttons">
                <Button> Projects </Button>
                <Button> Contact </Button>
            </div>
           
       </section>
    </div>
);

export default PortHeader;