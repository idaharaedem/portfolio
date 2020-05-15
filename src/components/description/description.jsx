import React from 'react';
import cssImage from '../../img/css.png';
import htmlImage from '../../img/html.png';
import javascriptImage from '../../img/javascript.png';
import csharp from '../../img/csharp.png';
import react from '../../img/react.png';

import './description.styles.scss'

const Description = () => (
    <section className="descriptions">
        <h1> Front end focused. <br/> full stack knowledge. </h1>
        <hr />
        <div className="desc-section">
            <div className="desc-paragraph">
                <h2> Who Am I </h2>
                <p> I am an aspiring software engineer who has a passion 
                    towards programming and all other aspects of the coding world. I currently have a diploma
                    in Information Technology and am currently busy with my post graduate degree. 
                    I respond to more of the visual aspect in the development process and 
                    this is why I choose to focus on Html, CSS and Javascript using frameworks 
                    like React to accomplish the personal tasks I have set for myself. I have a strong 
                    understanding with C# being the preffered language used in my University
                </p>
            </div>
            <div className="des-images">
                <img src= {cssImage}/>
                <img src= {htmlImage}/>
                <img src= {javascriptImage}/>
                <img src= {csharp}/>
                <img src= {react}/>
            </div>
        </div>
        <hr />
        
    </section>
)

export default Description;