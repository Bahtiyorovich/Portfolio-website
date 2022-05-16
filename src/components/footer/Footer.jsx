import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {RiTelegramLine} from 'react-icons/ri'
import {BsTelephoneForward} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com" target="_blank"><FaFacebookF/></a>
        <a href="https://Instagram.com" target="_blank"><FiInstagram/></a>
        <a href="https://telegram/@sherzod1797programmer" target="_blank"><RiTelegramLine/></a>
      </div>

      <div className='footer__copyright'>
        <small><BsTelephoneForward/>    Tel: +998 93 360 9798 </small>
      </div>
    </footer>
  )
}

export default Footer