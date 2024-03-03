import sorryImg from './img/sorry.jpeg'
import './css/sorry.css'

function Sorry() {
  return(
    <div id="centerDiv">
      <div className='uniqueDiv' style={{backgroundImage: `url('${sorryImg}')`}}></div>
      <a href="https://isacpxc.github.io/myPort" className='back-link'>Click Here To Go Home</a>
    </div>
  )
}

export default Sorry;