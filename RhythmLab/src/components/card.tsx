import { Url } from 'url'
import '.././index.css'
import { Link } from 'react-router'


/** TODO: encontrar uma forma de fazer o url tipo string aceitar strings  */
export default function Card_button({url}:any)
{
    return(
        <Link to={url}><button className='button'> </button></Link>
    )
}