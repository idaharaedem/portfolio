import cin from '../../img/cin.jpg';
import covid from '../../img/covid.jpg';
import clothing from '../../img/clothing.jpg';

const projects = {
     portfolio_projects:[ 
    {
        id: 1,
        name: 'Cinema Project',
        overview: 'I have always had a fascination of how a movie website was made. How carousels were produced and where information was taken from and dynamically updated to produce these results. This was my first attempt building a project with an API and although I struggled through it it taught me a lot about a third party API. I used The Movie Database API to achieve the project below',
        image: '/static/media/cin.033071de.jpg',
        link: 'https://edem-cin-proj.herokuapp.com/',
        github: 'https://github.com/idaharaedem/cinema-project-react'
      },
   
      {
        id: 2,
        name: 'Covid-19',
        overview: 'In these tough times its always good to know what is happening around you and how it is effecting others. This Corona Virus tracker does exactly that. Giving you information of the statistics world wide as well as statistics from over 180 countries. Best way to keep you up to date.',
        image: '/static/media/covid.a47c4f56.jpg',
        link: 'https://edem-rona-tracker.herokuapp.com/',
        github: 'https://github.com/idaharaedem/Covid-19'

      },
   
       {
       id: 3,
       name: 'Clothing',
       overview: 'The clothing project gave me experience of developing an E-commerce sight. Using Redux, State and React router dom all in this one project allowed me to get familiar with all these new React practices.',
       image: '/static/media/clothing.317c3e31.jpg',
       link: 'https://crown-clothing-edem.herokuapp.com/',
       github: 'https://github.com/idaharaedem/crown-clothing'
     }
    ]
}

export default projects;