import '.././index.css'


  
export default function Button({text, handleClick}:any)
{
    return(
        <>
            <button className='button_component' onClick={handleClick}> 
                
                { text }

            </button>
        </>
    )
}

