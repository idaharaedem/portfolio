import React, { useEffect} from 'react';
import cssImage from '../../img/css.png';
import htmlImage from '../../img/html.png';
import javascriptImage from '../../img/javascript.png';
import csharp from '../../img/csharp.png';
import react from '../../img/react.png';
import Aos from 'aos';
import "aos/dist/aos.css"

import './description.styles.scss'







const Description = () => { 

  useEffect(() => {
    Aos.init({duration: 1500})
  }, []);
return(
    
    <section className="descriptions">
        <h1> Front end focused. <br/> full stack Experience. </h1>
        <hr />
        <div className="desc-section">
            <div className="desc-paragraph">
                <h2> Who Am I </h2>
    
                <p> An aspiring software engineer who has a passion 
                    towards programming and all other aspects of the software engineering world. I currently have a diploma
                    in Information Technology and am currently busy with my post graduate degree. 
                    I respond to the visual aspect in the development process and 
                    this is why I chose to focus on Html, CSS and Javascript. Using frameworks 
                    such as React to accomplish the personal tasks I have set for myself. I have a strong 
                    understanding in C#, being the preffered language used in my University.
                </p>
              
            </div>
            
           <div data-aos="fade-up" data-aos-offset="250" className="des-images">

                    <img src= {cssImage}/>
                    <img src= {htmlImage}/>
                    <img src= {javascriptImage}/>
                    <img src= {csharp}/>
                    <img src= {react}/>

            </div>

        </div>
        <hr />
        
    </section>
)}

export default Description;