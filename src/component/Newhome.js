import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


export default function Newhome() {
  return (
    <div className='container-fluid mt-2'>
      <div class="row">
        <div class="contact-left ms-5">
          <h1 class="sub-title">Contact Me</h1>
          <p class="text-secondary"><FontAwesomeIcon icon={faEnvelope} color='crimson' className='mx-3' />sachin2020csds035@abesit.edu.in</p>
          <p class="text-secondary"><FontAwesomeIcon icon={faPhone} color='crimson' className='mx-3' />9525893841</p>
          <div class="social-icons">
            <Link to={'https://www.facebook.com/sachin.yash1603'}><FontAwesomeIcon icon={faFacebook} color='crimson' /></Link>
            <Link to={'https://www.instagram.com/sachin__3891/'}><FontAwesomeIcon icon={faInstagram} color='crimson' /></Link>
            <Link to={'https://twitter.com/SachinReigns8'}><FontAwesomeIcon icon={faTwitter} color='crimson' /></Link>
            <Link to={'https://www.linkedin.com/in/sachin-raj-080a51221/'}><FontAwesomeIcon icon={faLinkedin} color='crimson' /></Link>
          </div><br />
        </div>
        <div class="contact-right">
          <form name="submit-to-google-sheet">
            <input type="text" name="Name" placeholder="Your Name" required />
            <input type="email" name="Email" placeholder="Your Email" required />
            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
            <button type="submit" class="btn btn2">Submit</button>
          </form><br /><br />
          <span id="msg"></span>
        </div>
      </div>
      <footer className='text-center my-4'>
        <p style={{ color: "white" }}>Copyright Sachin. <span className='heart'>&#10084;</span></p>
      </footer>
    </div>
  )
}
