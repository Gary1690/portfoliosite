import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'

function App() {
  return (
    <div className="App">
        <div >
          <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
              <Header transparent title="Title" style={{color: 'white'}}>
                  <Navigation>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                  </Navigation>
              </Header>
              <Drawer title="Menu">
                  <Navigation>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                  </Navigation>
              </Drawer>
              <Content />
          </Layout>
      </div>
    </div>
  );
}

export default App;
