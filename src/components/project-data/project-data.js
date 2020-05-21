import cin from '../../img/cin.jpg';
import covid from '../../img/covid.jpg';
import clothing from '../../img/clothing.jpg';

const projects = {
     portfolio_projects:[ 
    {
        id: 1,
        name: 'Cinema Project',
        overview: 'I had always had a fascination of how a movie website was made. How carousels were produced and where information was taken from and dynamically updated to produce these results. This was my first attempt building a project with an API and although I struggled it taught me a lot. I used The Movie Database API to achieve the project below',
        image: '/static/media/cin.033071de.jpg'
      },
   
      {
        id: 2,
        name: 'Covid-19',
        overview: 'In these tough times its always good to know what is happening around you and how it is effecting others. This Corona Virus tracker does exactly that. Giving you information of the statistics world wide as well as statistics from 180 countries. Best way to keep you up to date.',
        image: '/static/media/covid.a47c4f56.jpg',
        link: 'https://edem-rona-tracker.herokuapp.com/'

      },
   
       {
       id: 3,
       name: 'Clothing',
       overview: 'This is an overview of the Clothing Project',
       image: '/static/media/clothing.317c3e31.jpg',
       link: 'https://crown-clothing-edem.herokuapp.com/',
     }
    ]
}

export default projects;