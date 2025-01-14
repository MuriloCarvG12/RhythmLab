import { Link } from "react-router"

export default function Header()
{
    return(
        <>
            <div className='header'>
                    <div style={{display:'flex', flexDirection: 'row'}}>
                            <div><h1 className='Titles-font'>Welcome to RhythmLab!</h1></div>
                            <img src='../.././public/Favicon.png' className='favicon'></img>
                    </div>

                    <div style={{display:'flex', flexDirection: 'row', gap: 70}}> 

                            <Link to={'/'}> <h2> Page Home </h2> </Link>
                            <Link to={'/metronome'}> <h2> Page Metronome </h2> </Link>
                            <Link to={'/practice'}> <h2> Page Practice </h2> </Link>
                            <Link to={'/theory'}> <h2> Page Theory </h2> </Link>
                    </div>
            </div>
        </>
    )
}