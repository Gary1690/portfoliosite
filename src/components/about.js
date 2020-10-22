import React from 'react'
import { Cell, Grid} from 'react-mdl'
import avatar from './gary.jpg'

const About = () => {
  return (
    <div className="about" style = {{width:'100%',margin:'auto'}}>
      <section id="about">
          <Grid>
            <Cell col={3}>
                <img
                  src= {avatar}
                  alt="Gary Cordero"
                  className= "photo"
                />
            </Cell>
            <Cell col={9}>
                <h4>About Me</h4>
                <p> Full stack web developer with strengths in Ruby, C#, Java and JavaScript frameworks and a strong foundation in software engineering and object oriented programming concepts with experience in retail sales and business operations. </p>
            </Cell>
          </Grid>
      </section>
    </div>
  )
}

export default About