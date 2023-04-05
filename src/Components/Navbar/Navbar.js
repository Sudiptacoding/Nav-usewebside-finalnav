import React, { useState } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [active, setActive] = useState("nav_menu");
  const [navbar, setNavbar] = useState(false);
  const Changebackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', Changebackground);
  const [toggleIcon, setToggleIcon] = useState("nav_toggler")
  const navToggle = () => {
    active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');

    // toggle animation
    toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler')
  }
  return (
    <nav className={navbar ? 'changeNav' : 'nav'}>
      <NavLink to='/' className="nav_brand no-underline text-2xl">Sudipta</NavLink>

      <ul className={active}>
        <li className="nav_item"><NavLink to='/' className="nav_link no-underline text-2xl ">Home</NavLink></li>
        <li className="nav_item"><NavLink to='/about' className="nav_link no-underline text-2xl ">About</NavLink></li>
        <li className="nav_item"><NavLink to='/project' className="nav_link no-underline text-2xl ">Project</NavLink></li>
        <li className="nav_item"><NavLink to='/contact' className="nav_link no-underline text-2xl ">Contact</NavLink></li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>

  );
};

export default Navbar;