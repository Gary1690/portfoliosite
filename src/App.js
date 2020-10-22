import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import {Link} from 'react-router-dom'
import LandingPage from './components/landingpage';
import About from './components/about';
import Resume from './components/resume';
import Projects from './components/projects';
 
function App() {
  return (
    <div className="App">
        <div >
          <Layout >
              <Header className="header-color" title=" " style={{color: 'white'}}>
                  <Navigation>
                      <Link to="/about">About</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Menu">
                  <Navigation>
                      <Link to="/about">About</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content >
                 <LandingPage/>
                 <About/>
                 <Resume/>
                 <Projects/>
              </Content>
          </Layout>
      </div>
    </div>
  );
}

export default App;
