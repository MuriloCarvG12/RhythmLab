
import '.././index.css'
import { Link } from 'react-router'

interface CardButtonProps {
    url: string;
    image: string;
    page_name: string;
  }


export default function Card_button({url, image, page_name}:CardButtonProps)
{
    return(
        <>
            <div className='Card-Body'> 
                    <div>
                    <div className='button-head'> <h1 className='Titles-font'> {page_name} </h1></div>
                        <Link to={url}><button className='button' style={{backgroundImage: `url("${image}")`}}> </button></Link>
                    <div className='button-bottom'></div>
                    </div>
            </div>
        </>
    )
}