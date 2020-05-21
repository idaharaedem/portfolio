import React, {useEffect} from 'react';
import mail from '../../img/mail.png'
import phone from '../../img/phone.png'
import Aos from 'aos';
import "aos/dist/aos.css"

import './contact.styles.scss';

const Contact = () => {
    

    return(




    <section>  
      
        <div className ="contact-container">

            <h1> Contact </h1>

                <div className="images-container" id="contact">
                    <div data-aos="flip-up" className="des-images" className="mail-image"  >
                        <img src={mail}/>
                        <img src={phone}/>
                    </div>
                
                </div>

                <div className="contact-list">
                    <ul>
                        <li id="email"><a>Email: Idaharaedem@gmail.com </a></li>
                        <li id="call"><a>Phone: 0745031273</a></li>
                    </ul>
                </div>
            
        </div> 
    </section>
  
);}

export default Contact;
