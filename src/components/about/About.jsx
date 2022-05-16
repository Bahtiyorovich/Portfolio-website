import React from 'react'
import './About.css';
import ME from '../../assets/Portfolio_image.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About image'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Years Working</small> 
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>50+ WorldWide</small> 
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small> 
            </article>
          </div>
          <p>
                Ismimni bilasiz! yoshim 25 da. Men  "Front-end" veb-dasturchiman,
                Bu ish bilan deyarli 1 yildan buyon shug'ullanyapman.
                Menda yaratuvchanlik qobilyati yaxshi rivojlangan,
                shu sababli bu yo'nalishni tanladim. Tez o'rganish, jamoa bilan ishlash,masulyatlilik hissi bor menda.
              </p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>      
      </div>
    </section>
  )
}

export default About