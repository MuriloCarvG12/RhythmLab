import '.././index.css'


  
export default function Button({text, handleClick, bgColor = '#f07d4f'}:any)
{
    return(
        <>
            <button className='button_component' onClick={handleClick} style={{backgroundColor: `${bgColor}`}}> 
                
                { text }

            </button>
        </>
    )
}

