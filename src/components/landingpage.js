import React from 'react'
import Typical from 'react-typical'

const LandingPage = () => {
  return (
    <div className="landing" style = {{width:'100%',margin:'auto',marginTop:"-1.7em"}}>
       <section id="landing">
         <h1> Hi, I am Gary Cordero</h1>
          <p>
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
                " City Explorer.",
                1000,
                " Foodie.",
                1000
              ]}
            />
            <hr/>
          </p>
          <div className="social">
            {/*linkedin*/}
            <a href ="http://google.com">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            {/*Github*/}
            <a href ="http://google.com">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
             {/*Medium*/}
            <a href ="http://google.com">
              <i class="fa fa-medium" aria-hidden="true"></i>
            </a>
             {/*Email*/}
            <a href ="http://google.com">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </a>
          </div>
       </section>
    </div>
  )
}

export default LandingPage