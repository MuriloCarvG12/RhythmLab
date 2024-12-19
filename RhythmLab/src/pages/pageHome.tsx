import '.././index.css'
import { Link } from 'react-router'

export default function PageHome()
{
    return (
        
        <div className='container' id='container'>
            <div className='header'>
                <div><h1>Hello there! i am page home</h1></div>
                <img src='../.././public/Favicon.png' className='favicon'></img>
            </div>
            
            <div className='row-item-container'>
                <Link to='/metronome'><button className='button'> </button></Link>
                <Link to='/practice'><button className='button'> </button></Link>
                <Link to='/theory'><button className='button'> </button></Link>
            </div>

            <footer><div className='footer'> </div></footer>
        </div>
        
      )

}