import './css/home.css'
// import c1img from './C.jpeg'
import c2img from './img/JS.jpeg'
import c3img from './img/PY.jpeg'
import c4img from './img/aboutme.jpg'
import c5img from './img/mysql.jpeg'
import c6img from './img/react.jpeg'
import c7img from './img/others.jpeg'
import c8img from './img/node1.jpeg'
import c9img from './img/html.jpeg'
import React from "react";

function Home() {
  return (

    <div id="centerDiv">

      <a className="link-project" href='#/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c4img}')`}}></div>
      </a>

      <a className="link-project" href='#/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c2img}')`}}></div>
      </a>

      <a className="link-project" href='#/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c3img}')`}}></div>
      </a>

      <a className="link-project" href='#/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c9img}')`}}></div>
      </a> 
  
      <a className="link-project" href='#/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c5img}')`}}></div>
      </a>

      <a className="link-project" href='#/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c6img}')`}}></div>
      </a>

      <a className="link-project" href='#/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c8img}')`}}></div>
      </a>

      <a className="link-project" href='#/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c7img}')`}}></div>
      </a>
      
    </div>
  );
}

export default Home;
