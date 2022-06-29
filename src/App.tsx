import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav,{child} from "./Nav"

function Test() {


  return(
    <><h1>Testing</h1></>
  )
}



function App() {

  const theme = {
    background: "white",
    pos: "left"
  }
  const kid1:child = {
      component: Test,
      name: "test",
      logo: "Voting",
      

  }
  return (
    <div className="App">
      <Nav theme={theme} children={[kid1, kid1, kid1]}></Nav>
    </div>
  );
}

export default App;
