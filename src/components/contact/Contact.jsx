import React from 'react'
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineFacebook} from 'react-icons/ai'
import {RiTelegramLine} from 'react-icons/ri'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j8gzi8e', 'template_xgqh52t', form.current, 'gdJLJL5noWFTHDZ4B')
    
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email:</h4>
            <h5>yoqubovsherzod1997@gmail.com</h5>
          </article>
          <article className='contact__option'>
            <AiOutlineFacebook className='contact__option-icon'/>
            <h4>Facebook:</h4>
            <h5>Sherzod Baxtiyorovich</h5>
          </article>
          <article className='contact__option'>
            <RiTelegramLine className='contact__option-icon'/>
            <h4>Telegram:</h4>
            <h5>@sherzod1797programmer</h5>
          </article>
        </div>
    {/* End of Contact */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your email' required/>
          <textarea name='message' rows='7' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact