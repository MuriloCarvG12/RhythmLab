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

            
            {/**   Adiciona opções para o usario selecionar bpm que deseja */}

            <div className='row-item-container'>
             
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <button className='button' style={{width: 100, height: 50}} onClick={() => {set_time(50)}}></button>
                    <h3> 50 Bpm </h3>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <button className='button' style={{width: 100, height: 50}} onClick={() => {set_time(80)}}></button>
                    <h3> 80 Bpm </h3>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <button className='button' style={{width: 100, height: 50}} onClick={() => {set_time(90)}}></button>
                    <h3> 90 Bpm </h3>
                </div>


                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <button className='button' style={{width: 100, height: 50}} onClick={() => {set_time(100)}}></button>
                    <h3> 100 Bpm </h3>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <button className='button' style={{width: 100, height: 50}} onClick={() => {set_time(120)}}></button>
                    <h3> 120 Bpm </h3>
                </div>               
            </div>

            <div style=
            {{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              marginBottom: 40

            }}
            >

                  <h1> or find your own Time!</h1>
                  <input type='range' min={0} max={360} value={time} onChange={handleSliderChange} />
            </div>
            

          <div className='page_body'>
              <h1 className='Title-Font'> Current Time = {time} </h1>
              <div style={{backgroundColor: 'red', width: 300, height: 300}}>
              </div>

              <div>
                  <button>Start</button>
              </div>

          </div>



          </div>
        </>
      )

}