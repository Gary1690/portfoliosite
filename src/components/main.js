import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/Projects" component={Projects}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
  )
}

export default Main