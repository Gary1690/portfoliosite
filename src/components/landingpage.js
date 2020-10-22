import React from 'react'
import Typical from 'react-typical'

const LandingPage = () => {
  return (
    <div className="landing" style = {{width:'100%',margin:'auto'}}>
       <section id="landing">
         <h1> Hi, I am Gary Cordero</h1>
          <p className="message">
            I am a 
            <Typical
              loop = {Infinity}
              wrapper = "b"
              steps = {[
                " Software Engineer.",
                1000,
                " Problem Solver.",
                1000,
                " Avid Reader.",
                1000,
                " Outdoor Explorer.",
                1000,
                " Foodie.",
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
            <a href ="http://google.com">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            {/*Github*/}
            <a href ="http://google.com">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
             {/*Medium*/}
            <a href ="http://google.com">
              <i className="fa fa-medium" aria-hidden="true"></i>
            </a>
             {/*Email*/}
            <a href ="http://google.com">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </a>
          </div>
       </section>
    </div>
  )
}

export default LandingPage