import '.././index.css'
import { useState } from 'react'

export default function PageMetronome()
{
    const [time, set_time] = useState(0)

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
      set_time(Number(event.target.value));
    };

    return (
        <>
          <div className='container' id='container'>

          <div className='header'>
                <div><h1>Hello there! i am page home</h1></div>
                <img src='../.././public/Favicon.png' className='favicon'></img>
            </div>

            <input type='range' min={0} max={360} value={time} onChange={handleSliderChange} />
            current time = {time}



          </div>
        </>
      )

}