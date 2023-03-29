import React from 'react'
import './nav.css'
import { useState, useEffect } from 'react';
import Logo_Burger from './Logo_burger'
import Dropdown from './Dropdown';
const Nav = () => {
  const [serviceActive, setServiceActive] = useState(false);
  const handleClickSercice = () => {
    setServiceActive(!serviceActive)
  }
  const handleCloseService = () => {
    setServiceActive(false);
  }

  const [optionActive, setOptionActive] = useState('');

  const [isActive, setIsActive]= useState(false);
  const handleClick = ()=>{
    setIsActive(!isActive)
    console.log(isActive)
  }

  return (
    <>
    <nav>

      <div className="nav__name">
        <h5>ESTEBAN BEDOYA RAMIREZ</h5>
      </div>

      <div className={isActive===true ? "nav__options active": "nav__options"}>
        <a className={serviceActive===true ? 'active': '#'} onClick={()=>{
          handleClickSercice();
          ()=> setOptionActive("SERVICE");
          }}>
          SERVICE
        
          <ul className={serviceActive===true ? 'active': ''}>
            <li>Item 1</li>
          </ul>
          <Dropdown clase= {serviceActive===true ? 'nav__dropdown active' : 'nav__dropdown'}/>    
        </a>
        <a href="#" onClick={()=> setOptionActive('#')} className={optionActive==='#' ? 'active' : ''}> ABOUT ME</a>
        <a onClick={() => setOptionActive('PORTFOLIO')} className= {optionActive==='PORTFOLIO' ? 'active' : ''} href="#">PORTFOLIO</a>
        <a onClick={() => setOptionActive('CONTACT')} className={optionActive==='CONTACT'?'active':''} href="#">CONTACT</a>
        <a onClick={() => setOptionActive('NL')} className={optionActive==='NL'?'active':''} href="#">NL</a>
      
      </div>

      <Logo_Burger className="nav__burger" functions={[handleCloseService, handleClick]} active= {isActive}/>  
      

    </nav>

    
    </>
  )
}

export default Nav