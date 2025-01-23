import '.././index.css'
import { useState } from 'react'
import Button from '../components/button';
import Header from '../components/header';

export default function PageMetronome()
{
    const [time, set_time] = useState(40)
    const [toggle_button, set_toggle_button] = useState(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [toggle_visual, set_toggle_visual] = useState(true)
    
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
      set_time(Number(event.target.value));
    };


    function metronome(time: number)
    {      
        if (!intervalId) {
            const audio = new Audio("../.././public/sounds/metronome.mp3");
            const id = setInterval(() => {
                audio.play()
                set_toggle_visual((toggle_visual) => !toggle_visual)
            }, time * 1000); // converte o tempo fornecido para milisegundos
            setIntervalId(id);
        }             
    }

    function startTimer()
    {   
        const time_metronome = 60 / time; {/** para encontrar o tempo de intervalo devemos dividir 60 segundos (1 minuto) pela bpm o resultado entao sera passado para funcao metronome */}
        set_toggle_button(0);
        metronome(time_metronome)
        
    }

    function stopTimer()
    {
        set_toggle_visual(true)
        set_toggle_button(1);
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
        
    }

    return (
        <>
          <div className='container' id='container'>

          <Header/>

            
            {/**   Adiciona opções para o usario selecionar bpm que deseja */}

            <div className='row-item-container'>
             
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <button className='button' style={{width: 100, height: 50}} onClick={() => {set_time(50)}}></button>
                    <h3 style={{color: 'orange'}}> 50 Bpm </h3>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <button className='button' style={{width: 100, height: 50}} onClick={() => {set_time(80)}}></button>
                    <h3 style={{color: 'orange'}}> 80 Bpm </h3>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <button className='button' style={{width: 100, height: 50}} onClick={() => {set_time(90)}}></button>
                    <h3 style={{color: 'orange'}}> 90 Bpm </h3>
                </div>


                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <button className='button' style={{width: 100, height: 50 }} onClick={() => {set_time(100)}}></button>
                    <h3 style={{color: 'orange'}} > 100 Bpm </h3>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <button className='button' style={{width: 100, height: 50}} onClick={() => {set_time(120)}}></button>
                    <h3 style={{color: 'orange'}}> 120 Bpm </h3>
                </div>               
            </div>


            {/** Div para agrupar o metronomo e o slider para o usuario escolher a bpm que deseja */}

            <div className='metronome-head' 
            style={
                {
                display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        background: '#F0544F',
                        width: '40%',
                        height: '80%',
                        borderTopRightRadius: 60,
                        borderTopLeftRadius: 60,
                        borderInlineWidth: 3,
                        borderInlineColor: '#F0544F',
                        borderInlineStyle: 'solid',
                        
            }
            }>

            <h1 style={{fontFamily: 'sans-serif'}}> Or find your own Time!</h1>
            <input type='range' min={40} max={208} value={time} onChange={handleSliderChange} />

            </div>

            <div className='metronome-body'>
                    <div style=
                        {{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        marginBottom: 40,
                        
                        }}
                        >

                            
                            <h1 className='Title-Font'> Current Time = {time} </h1>
                           
                            <div style={{ position: 'relative', width: 400, height: 400}}>
                                    <div id="Metronome-image" style={{ 
                                        backgroundImage: "url(../.././public/metronome.png)", backgroundSize: "contain", width: 100, height: 100, position: 'absolute',  top: '38%', left: '38%', zIndex: 1 , }}></div>
                                    
                                    { toggle_visual ? <></>  : <div id="Metronome-animation" 
                                    style={{width: 400, height: 400, zIndex: 0, position: 'absolute', top: 0,
                                        left: 0 }}></div>}
                                
                            </div>
                                                    

                   
                        

                    
                        
                     

                        <div style={{display: 'flex',  justifyContent: 'center', marginTop: 40, marginBottom: 40}}>
                            {
                                //<button onClick={startTimer(time)}>Start</button>
                                toggle_button == 1 
                                ? 

                                <Button
                                handleClick ={startTimer}
                                text={"Start"}
                                />
                                : 

                                <Button
                                handleClick ={stopTimer}
                                text={"Stop"}
                                />
                            }
                            
                        </div>

                    </div>
          </div>
          </div>
        </>
      )

}