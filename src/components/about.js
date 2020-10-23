import React from 'react'
import { Cell, Grid} from 'react-mdl'
import avatar from '../resources/gary.jpg'

const About = () => {
  return (
    <div className="about" style = {{width:'100%',margin:'auto'}}>
      <section id="about">
          <Grid>
            <Cell col={4} style={{textAlign:"center"}}>
                <img
                  src= {avatar}
                  alt="Gary Cordero"
                  className= "photo"
                />
            </Cell>
            <Cell col={8}>
                <h4>About Me</h4>
                <p> Full stack web developer with strengths in Ruby, C#, Java and JavaScript frameworks and a strong foundation in software engineering and object oriented programming concepts with experience in retail sales and business operations. </p>
            </Cell>
          </Grid>
      </section>
    </div>
  )
}

export default About