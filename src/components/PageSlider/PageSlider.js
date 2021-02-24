import React from 'react'
import { Link } from 'react-router-dom'

import './page-slider.sass'

const PageSlider = ({ title, link }) => {
  return (
    <div className="page-slider">
      <Link to={link}>
        <div className="next-page">{title}</div>
      </Link>
    </div>
  )
}

export default PageSlider
