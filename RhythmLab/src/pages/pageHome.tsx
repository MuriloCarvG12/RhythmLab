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
                <div><h1 className='Titles-font'>Welcome to RhythmLab !</h1></div>
                <img src='../.././public/Favicon.png' className='favicon'></img>
            </div>
            <div className='Paragraph'>
                <p className='Titles-font' style={{fontSize:15, opacity: 1}}> 
                    Welcome to RhythmLab!
                </p>
                <p> 
                    Discover the joy of rhythm with our interactive platform, designed to help musicians of all levels sharpen their sense of timing and groove. Whether you're a drummer, guitarist, vocalist, or just someone who loves to tap along to music, we've got tools and exercises tailored for you.
                </p>
                <p> 
                    What You’ll Find Here:
                </p>
                <p>
                        Interactive Metronome: Practice with customizable beats to match any tempo or time signature.
                </p>
                <p>
                         Rhythm Exercises: Improve your timing with engaging challenges and drills.
                </p>
                <p>
                        Learning Resources: Explore guides and tutorials to master the basics of rhythm theory.
                </p>
                        
                <p>
                    No matter where you are on your musical journey, we’re here to help you find your groove and develop the confidence to play in time with any ensemble or recording.

                    Let’s make music, one beat at a time!

                    Get Started Now!
                </p>

            </div>
            <div className='row-item-container' >

                

                <Card_button 
                            page_name ={'Metronome'}
                            url={metronome}
                            image={"../.././public/Hmetronome.jpeg"}
                 />

                <Card_button 
                            page_name ={'Practice'}
                            url={practice}
                            image={"../.././public/Hdumbbell.jpeg"}
                 />

                <Card_button 
                            page_name ={'Theory'}
                            url={theory}
                            image={"../.././public/Hmusic_theory.jpeg"}
                 />

            </div>

            <footer><div className='footer'> </div></footer>
        </div>
        
      )

}