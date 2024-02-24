import './contact.scss'
import {contact} from '../../app/data'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="textContainer">
            <h1>Let's get in touch</h1>
            <div className="info">
                {contact.map(item => (
                    <div key={item.title}>
                        <h2 >{item.title}</h2>
                        <span>{item.input}</span>
                    </div>
                ))}
            </div>
            
        </div>
        <div className="formContainer">
            <form>
                <input type="text" required placeholder='Name' />
                <input type="email" required placeholder='Email' />
                <textarea rows="8" placeholder='Message'/>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact