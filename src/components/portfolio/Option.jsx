import React from 'react'
import './option.css'
const Option = (props) => {
  return (
    <div className="Option">
        <div className="Option__image">
        <img src={props.url} 
        alt="" />
        </div>
      
        <div className="Option__content">
            <p>{props.tema}</p>
            <small>{props.exp}</small>
        </div>
    </div>
  )
}

export default Option