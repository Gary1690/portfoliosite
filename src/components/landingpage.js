import React from 'react'
import Typical from 'react-typical'
import { Cell, Grid } from 'react-mdl'

const LandingPage = () => {
  return (
    <section style = {{width:'100%',margin:'auto',  backgroundColor: 'blue'}}>
       <div>
         <h1> Hi I am  <strong>Gary Cordero</strong></h1>
          <p>
            I am a 
            <Typical
              loop = {Infinity}
              wrapper = "b"
              steps = {[
                " Developer",
                1000,
                " Problem Solver",
                1000,
                " Gamer",
                1000,
                " Avid Reader",
                1000,
                " Foodie",
                1000
              ]}
            />
          </p>
       </div>
    </section>
  )
}

export default LandingPage