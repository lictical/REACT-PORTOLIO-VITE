import React from 'react'
import './portfolio.css'
import Option from './Option'
const Portfolio = () => {
  const Options = 
  [
    {
        tema: "Dashboard",
        explicacion: "Importance of real state",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        tema: "Database modeling",
        explicacion: "Importance of real state",
        url: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
    },
    {
        tema: "Data analytics",
        explicacion: "Importance of real state",
        url: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80"
        },
    {
        tema: "Web development",
        explicacion: "Importance of real state",
        url: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"    
    },
  ];
  return (
    <section id='portfolio'>
        <div id='portfolio__container' className="container container__portfolio">
        <h3>PORTFOLIO</h3>
        <hr />
        <h5>What do I offer?</h5>
        <small>
        As a data analyst and web developer 
        I analyze and develop data-driven insights to 
        improve decision-making and reduce costs. 
        I use data visualization techniques using 
        SQL, Python, and Tableau. and developtment in 
        node.js with React framework.
        </small>
            
            <div className="Portfolio__options">
                {Options.map((option)=>(
                    <Option tema={option.tema} exp={option.explicacion} url={option.url}/>
                ))}
                
            </div>

        </div>
        
    </section>
  )
}

export default Portfolio