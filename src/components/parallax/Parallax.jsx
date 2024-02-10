import './parallax.scss'
const Parallax = ({title}) => {
  return (
    <div className='parallax' style = {{
        background: 
            title === 'services' 
                ? "linear-gradient(180deg, #111132, #0c0c1d)" 
                : "linear-gradient(180deg, #111132, #505064)" }}>
        <h1>{ title === 'services'? 'What I do?' : 'What I did?'}</h1>
        <div className="mountains"></div>
        <div className="planets"></div>
        <div className="stars"></div>
    </div>
  )
}

export default Parallax