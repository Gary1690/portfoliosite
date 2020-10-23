import React from 'react'
import Typical from 'react-typical'

const LandingPage = () => {
  return (
    <div className="landing" style = {{width:'100%',margin:'auto'}}>
       <section id="landing">
         <h1> Hi, I am Gary Cordero</h1>
          <p className="message">
            I am  
            <Typical
              loop = {Infinity}
              wrapper = "b"
              steps = {[
                " a Software Engineer.",
                1000,
                " a Problem Solver.",
                1000,
                " an Avid Reader.",
                1000,
                " an Outdoor Explorer.",
                1000,
                " a Foodie.",
                1000
              ]}
            />
            </p>
            
            <div className="skillset">
               <p className="skills"> Ruby | Ruby on Rails | JavaScript | Reactjs | CSS and Bootstrap | Java | C#</p>
            </div>
           
            <hr/>
          <div className="social">
            {/*linkedin*/}
            <a href ="https://www.linkedin.com/in/gary-a-cordero-rosa-048552145/" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            {/*Github*/}
            <a href ="https://github.com/Gary1690" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
             {/*Medium*/}
            <a href ="https://medium.com/@garycordero1690" target="_blank">
              <i className="fa fa-medium" aria-hidden="true"></i>
            </a>
             {/*Email*/}
            <a href ="mailto:garycordero1690@gmail.com" target="_blank">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </a>
          </div>
       </section>
    </div>
  )
}

export default LandingPage