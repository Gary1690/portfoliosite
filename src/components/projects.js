import React from 'react'
import {Card,CardActions,CardTitle,CardText,CardMenu,Button,IconButton} from 'react-mdl'
const Projects = () => {
  return (
    <div className="projects" style = {{width:'100%',margin:'auto'}}>
      <section id="projects">
        <div className="projects-holder">

        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
          <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
          <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenan convallis.
          </CardText>
          <CardActions border>
              <Button colored>View Updates</Button>
          </CardActions>
        </Card>
        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
          <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
          <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenan convallis.
          </CardText>
          <CardActions border>
              <Button colored>View Updates</Button>
          </CardActions>
        </Card>
        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
          <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
          <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenan convallis.
          </CardText>
          <CardActions border>
              <Button colored>View Updates</Button>
          </CardActions>
        </Card>
        </div>
      </section>
    </div>
  )
}

export default Projects