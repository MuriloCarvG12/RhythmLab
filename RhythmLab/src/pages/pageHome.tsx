import '.././index.css'
import { Link } from 'react-router'
import Card_button from '../components/card'

export default function PageHome()
{
    const metronome = '/metronome'
    return (
        
        
        <div className='container' id='container'>
            <div className='header'>
                <div><h1>Hello there! i am page home</h1></div>
                <img src='../.././public/Favicon.png' className='favicon'></img>
            </div>
            
            <div className='row-item-container'>
                <Card_button url={metronome} />
                <Link to='/metronome'><button className='button' style={{backgroundImage: `url("../.././public/music-theory-1.jpg")`}}> </button></Link>
                <Link to='/practice'><button className='button'> </button></Link>
                <Link to='/theory'><button className='button'> </button></Link>
            </div>

            <footer><div className='footer'> </div></footer>
        </div>
        
      )

}