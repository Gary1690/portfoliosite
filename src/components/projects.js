import React from 'react'
import {Card,CardActions,CardTitle,CardText,Button} from 'react-mdl'
import mangaInMotion from '../resources/MangainMotionV2.png'
import cubicle from '../resources/Cubiclev2.png'
import barbs from '../resources/BarBS.png'

const Projects = () => {
  return (
    <div className="projects" style = {{width:'100%',margin:'auto'}}>
      <section id="projects">
          <h4> Check Out my Projects</h4>
        <div className="projects-holder">

        <Card shadow={0} style={{ width:"20em",height:"20em",margin:'auto', marginBottom:"1em"}}>
          <CardTitle expand>
            <img
              src={barbs}
              alt="BarbS"
              className="project-img"
            />
          </CardTitle>
          <CardActions border style={{textAlign:"center"}}>
              <a className="btn" style={{border:"black solid 1px",width:"8em",marginLeft:"1em"}}>Demo</a>
              <a className="btn" style={{border:"black solid 1px",width:"8em",marginLeft:"1em"}}>Repo</a>
          </CardActions>
        </Card>

        <Card shadow={0} style={{ width:"20em",height:"20em",margin: 'auto',marginBottom:"1em"}}>
          <CardTitle expand>
            <img
              src={cubicle}
              alt="cubicle"
              className="project-img"
            />
          </CardTitle>
          <CardActions border style={{textAlign:"center"}}>
              <a className="btn" style={{border:"black solid 1px",width:"8em",marginLeft:"1em"}}>Demo</a>
              <a className="btn" style={{border:"black solid 1px",width:"8em",marginLeft:"1em"}}>Repo</a>
          </CardActions>
        </Card>

        <Card shadow={0} style={{ width:"20em",height:"20em", margin: 'auto',marginBottom:"1em"}}>
          <CardTitle expand>
            <img
              src={mangaInMotion}
              alt="Manga in Motion"
              className="project-img"
            />
          </CardTitle>
          <CardActions border style={{textAlign:"center"}}>
              <a className="btn" style={{border:"black solid 1px",width:"8em",marginLeft:"1em"}}>Demo</a>
              <a className="btn" style={{border:"black solid 1px",width:"8em",marginLeft:"1em"}}>Repo</a>
          </CardActions>
        </Card>

        </div>
      </section>
    </div>
  )
}

export default Projects