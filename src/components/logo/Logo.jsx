import React from 'react'
import './logo.css'
import ISO from '../../assets/logo.png'

const Logo = () => {
  return (
    <div className="section__logo">
        <img className="container__logo" src={ISO} alt="" />
    </div>
  )
}

export default Logo