import './css/content.css'

export default function Content(){
  return(
    <div id="centerDivMod">
      <div className='img-content-hold box-shadow'></div>
      <div className='gap-content'></div>
      <div className='details-content-hold'>
        <div id='name-link-content-hold'>
          <div className='bottom-org'>
            <span id='project-name'>NOME PROJETO</span>
            <a href="#/content" id='project-link'>https://link.com</a>
          </div>
        </div>
        <div className='gap-name-text'></div>
        <div id='text-content-hold'>
          <li>Descrição: </li>
          <li>Descrição: </li>
        </div>
        <div className='gap-text-btn'></div>
        <div className='btn-content-hold'>
          <button className='btn-previous'>BACK</button>
          <button className='btn-next'>NEXT</button>
        </div>
      </div>
    </div>
  )
}