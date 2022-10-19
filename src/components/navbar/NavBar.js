import React, { useState } from 'react';
import './navbar.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import NavLinks from './NavLinks';

function NavBar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 40) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (

    <div className={colorChange ? 'navbar-colorChange' : 'navbar'}>

      <img className='nav-logo p-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      <img className='nav-avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
      <Button className='nav-sign-in' variant="outline-danger">Sign in</Button>
      <NavLinks />


    </div>


  )
}

export default NavBar