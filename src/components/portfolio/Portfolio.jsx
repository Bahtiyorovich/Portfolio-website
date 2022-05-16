import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/moto1.jpg'
import IMG2 from '../../assets/merc-img.jpg'
import IMG3 from '../../assets/roozbeh-badizadegan-y46EzhejDNE-unsplash.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Project SUZUKI MOTO advertising',
    view: 'https://github.com/Bahtiyorovich/Loyihalarim'
  },
  {
    id: 2,
    image: IMG2,
    title: 'My Blog website! loyiha arxitekturasi Reactda tayyorlandi',
    view: 'https://blog-webite.vercel.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'yangi loyihalarni joylashingiz mumkin',
    view: 'https://vercel.com'
  }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image,title, view }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={view} className='btn' target='_blank'>View</a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  )
}

export default Portfolio