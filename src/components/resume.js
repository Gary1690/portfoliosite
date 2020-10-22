import React from 'react'
import { Cell, Grid } from 'react-mdl'

const Resume = () => {
  return (
    <div className="resume" style = {{width:'100%',margin:'auto'}}>
      <section id="resume">
      <Grid>
          <Cell col={3}>
            <h4>Education</h4>
          </Cell>
          <Cell col={9}>
            <ul>
              <li><h4>Universidad Autonoma de Santo Domingo</h4></li>
              <li><h4>Universidad Autonoma de Santo Domingo</h4></li>
            </ul>
          </Cell>
          <Cell col={3}>
            <h4>Work</h4>
          </Cell>
          <Cell col={9}></Cell>
      </Grid>
      </section>
    </div>
  )
}

export default Resume