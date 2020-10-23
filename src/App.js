import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import { Link, animateScroll as scroll } from "react-scroll";
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


class Navbar extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 4
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}