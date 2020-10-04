import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        {/* <Link className="brand-logo" to="/">WRITE YOUR BLOGS !!</Link> */}
        <h4 className="brand-logo "><a className="hide-on-med-and-down">WRITE YOUR BLOGS !!</a></h4>
        <ul className="right">
          <li Style="border-radius:500px;text-color:blue"><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/write'>Write Blog</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)