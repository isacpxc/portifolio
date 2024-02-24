import './home.css'
import c1img from './C.jpeg'
import c2img from './JS.jpeg'
import c3img from './PY.jpeg'
import c4img from './aboutme.jpg'
import c5img from './mysql.jpeg'
import c6img from './react.jpeg'
import c7img from './others.jpeg'
import c8img from './node1.jpeg'
import c9img from './html.jpeg'

function Home() {
  return (
    <div id="centerDiv">
      <a className="link-project" href='/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c4img}')`}}></div>
      </a>

      <a className="link-project" href='/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c2img}')`}}></div>
      </a>

      <a className="link-project" href='/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c3img}')`}}></div>
      </a>

      <a className="link-project" href='/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c9img}')`}}></div>
      </a> 
  
      <a className="link-project" href='/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c5img}')`}}></div>
      </a>

      <a className="link-project" href='/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c6img}')`}}></div>
      </a>

      <a className="link-project" href='/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c8img}')`}}></div>
      </a>

      <a className="link-project" href='/notready'>
        <div className='content-project' style={{backgroundImage:`url('${c7img}')`}}></div>
      </a>
      
    </div>
  );
}

export default Home;
