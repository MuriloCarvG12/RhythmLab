import '.././index.css'
import Card_button from '../components/card'

export default function PageHome()
{
     //TODO these images are super terrible, please find better ones later...

    const metronome = '/metronome'
    const practice = '/practice'
    const theory = '/theory'
    
    return (
        
        
        <div className='container' id='container'>
            <div className='header'>
                <div><h1>Hello there! i am page home</h1></div>
                <img src='../.././public/Favicon.png' className='favicon'></img>
            </div>
            
            <div className='row-item-container'>

                

                <Card_button 
                            url={metronome}
                            image={"../.././public/metronome.jpg"}
                 />

                <Card_button 
                            url={practice}
                            image={"../.././public/practice.jpg"}
                 />

                <Card_button 
                            url={theory}
                            image={"../.././public/music_theory.jpg"}
                 />

            </div>

            <footer><div className='footer'> </div></footer>
        </div>
        
      )

}