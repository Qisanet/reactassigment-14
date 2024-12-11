import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <h4>Company name</h4>
      <nav>
        <Link to='features'>Features</Link>
        <Link to='home'>Home</Link>
        <Link to='support'>Support</Link>
        <Link to='enterprise'>enterprise</Link>
      </nav>
    </div>
  )
}

export default Header
