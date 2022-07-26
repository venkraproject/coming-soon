import React from 'react'
import './socials.css'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Socials = () => {
  return (
    <section id="socials">
      <div className="container__socials">
        <a href="https://www.instagram.com/venkra.co/" target='_blank' rel="noopener noreferrer"><BsInstagram /></a>
        <a href="https://www.facebook.com/Venkra.co" target='_blank' rel="noopener noreferrer"><BsFacebook /></a>
        <a href="https://wa.me/message/DHRR36X34O6ZC1" target ='_blank' rel="noopener noreferrer"><BsWhatsapp /></a>
      </div>
    </section>
  )
}

export default Socials