import React from 'react'

import logo from '../../images/network.svg'

import './header.sass'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="title">Twimine</h1>
    </div>
  )
}

export default Header
