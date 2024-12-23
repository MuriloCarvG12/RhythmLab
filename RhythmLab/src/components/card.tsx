
import '.././index.css'
import { Link } from 'react-router'


/** TODO: encontrar uma forma de fazer o url tipo string aceitar strings  */
export default function Card_button({url, image, page_name}:any)
{
    return(
        <>
            <div className='Card-Body'> 
                    <div>
                    <div className='button-head'> <h1> {page_name} </h1></div>
                        <Link to={url}><button className='button' style={{backgroundImage: `url("${image}")`}}> </button></Link>
                    <div className='button-bottom'></div>
                    </div>
            </div>
        </>
    )
}