import React from 'react'
import { Cell, Grid, ProgressBar } from 'react-mdl'

const Resume = () => {
  return (
    <div className="resume" style = {{width:'100%',margin:'auto'}}>
      <section id="resume">
      <Grid>
          <Cell col={3}>
            <h4>Education</h4>
          </Cell>
          <Cell col={9}>
            <h4>Flatiron School</h4>
            <h6><i><b>Software Engineering Inmersive</b> - Aug. 2020</i></h6>
            <br/>
            <h4>Universidad Autonoma de Santo Domingo</h4>
            <h6><i><b>Bachelor of Science in Computer Science</b> - Oct. 2020</i></h6>
          </Cell>

          <Cell col={12}>
           <hr/>
          </Cell>
          
          <Cell col={3}>
            <h4>Work</h4>
          </Cell>
          <Cell col={9}>
            <h4>Away</h4>
            <h6><b>Sales Associate</b>  <i>May 2019 - Present</i></h6>
            <ul>
              <li>Assist customers with luggage purchases, returns, and exchanges.</li>
              <li>Restock and clean inventory and displays.</li>
              <li>Process and receive shipments.</li>
            </ul>
            <br/>
            <h4>Charles Tyrwhitt</h4>
            <h6><b>Key Holder</b> <i> May 2018 - Sept. 2019</i></h6>
            <ul>
              <li>Assist customers with luggage purchases, returns, and exchanges.</li>
              <li>Restock and clean inventory and displays.</li>
              <li>Process and receive shipments.</li>
            </ul>
          </Cell>
      </Grid>
      </section>
    </div>
  )
}

export default Resume