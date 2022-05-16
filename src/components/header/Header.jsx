import React from 'react'
import './Header.css'
import CTA from './CTA'


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h3>Hello I'm</h3>
        <h1>Sherzod Yoqubov Baxtiyorovich</h1>
        <h3 className='text-light'>Front-end Developer</h3>
        <CTA/>
        <div className='me'>
          My Portfolio
        </div>
      </div>
    </header>
  )
}
export default Header;