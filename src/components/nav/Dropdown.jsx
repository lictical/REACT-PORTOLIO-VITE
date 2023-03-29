import React from 'react'
import './dropdown.css'
import Typed from 'typed.js'


const Dropdown = (drops) => {
  // Create reference to store the DOM element containning the animation
  const el = React.useRef(null);

  React.useEffect(()=> {
    if(el.current){
      const typed = new Typed(
        el.current,
        {strings:[`"Transforming your data into actionable insights - Let me help you unlock the power of your data!"`], 
        typeSpeed:30,
        showCursor:false
        }
        );

      return () => {
        // Destroy Typed instance during clean up to stop animation
        typed.destroy()
    };}
  },[drops.clase]);
  return (
    <div className={drops.clase}>
        <div className="nav__dropdown_content">
            <h3>What do i offer</h3>
            <hr/>
            {drops.clase === 'nav__dropdown active' ?  <span className='droppable__quote' ref={el}/> : ''}
        </div>
    </div>
  )
}

export default Dropdown