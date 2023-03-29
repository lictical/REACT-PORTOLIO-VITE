import React from 'react'
import './logo_Burger.css'
const Logo_burger = (props) => {
  const link_service = ()=> {
    props.functions.forEach((func, index)=>{
      setTimeout(()=>{
        func();
      }, 100*index);
    });
    
  
  };
  return (
    <>
        <a className='nav__burger' onClick={link_service}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#000">
                <rect className={props.active===true ? 'nav__line1 active':'nav__line1'} x="3" y="5" width="18" height="2" fill="currentColor" />
                <rect className={props.active===true ? 'nav__line2 active':'nav__line2'} x="3" y="11" width="18" height="2" fill="currentColor" />
                <rect className={props.active===true ? 'nav__line3 active':'nav__line3'} x="3" y="17" width="18" height="2" fill="currentColor" />
            </svg>
        </a>
    </>
    
  )
}

export default Logo_burger