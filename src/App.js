import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './components/main'
import {Link} from 'react-router-dom'
 
function App() {
  return (
    <div className="App">
        <div >
          <Layout >
              <Header className="header-color" title=" " style={{color: 'white'}}>
                  <Navigation>
                      <Link to="/">Landing Page</Link>
                      <Link to="/about">About</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Menu">
                  <Navigation>
                      <Link to="/">Landing Page</Link>
                      <Link to="/about">About</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content >
                <Main/> 
              </Content>
          </Layout>
      </div>
    </div>
  );
}

export default App;
