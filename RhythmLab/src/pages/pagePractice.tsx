import Button from "../components/button"
import { useState } from "react"



export default function PagePractice()
{
    const [picked_difficulty, set_picked_difficulty] = useState(0)

    let displayText;

    
    switch (picked_difficulty) {

      case 1:
        displayText = 'Pratica - Facil';
        break;

      case 2:
        displayText = 'Pratica - Medio';
        break;

      case 3:
        displayText = 'Pratica - Dificil';
        break;

      default:
        displayText = 'This wasnt supossed to happen!';
        break;

    }
  

    return (
        <>
          <div className='container' id='container'  >
            <div style={{width: '80%'}}>


                          <div className='header'>
                                <div><h1 className='Titles-font'>Welcome to RhythmLab !</h1></div>
                                <img src='../.././public/Favicon.png' className='favicon'></img>
                          </div>

                    {/** renderiza a opcao de selecionar dificuldade */}

                    {picked_difficulty == 0 
                    ?
                    <>
                                <div style={{backgroundColor: '#F0544F', textAlign: 'center', borderBlockStyle: 'solid', borderBlockWidth: 3, borderBlockColor: '#F0544F', width: '100%', paddingRight: 6}}>
                                            <h1> Selecione uma dificuldade </h1>
                                </div>

                                        <div className= 'metronome-body' style={{width: '100%', height: '100%', paddingTop: 50}}>
                                          
                                              <div className='row-item-container'>

                                                  <Button 
                                                    handleClick={() => set_picked_difficulty(1)}
                                                    text={"Facil"}
                                                    bgColor="#5bff42"
                                                    
                                                  />
                                                  <Button
                                                    handleClick={() => set_picked_difficulty(2)}
                                                    text={"Medio"}
                                                    bgColor="#ffdc42"

                                                  />
                                                  <Button
                                                  handleClick={() => set_picked_difficulty(3)}
                                                  text={"Dificil"}
                                                  bgColor="#ff5542"
                                                  />

                                        </div>

                                </div>
                                
                    </>

                    :

                    <>
                    </>


                    }

                    { picked_difficulty > 0 

                      ?

                      <>
                              <div style={{backgroundColor: '#F0544F', textAlign: 'center', borderBlockStyle: 'solid', borderBlockWidth: 3, borderBlockColor: '#F0544F', width: '100%', paddingRight: 6}}>
                                            <h1> {displayText} </h1>
                              </div>

                              <div className="Sheet_Space">

                                  <div 
                                    style=
                                    {{
                                      marginTop: 40,
                                      marginBottom: 40,
                                      backgroundColor: 'aqua',
                                      height: "100%",
                                      width: "90%",
                                    }}>


                                      

                                  </div>

                                    <div style={{display: 'flex',width: "90%", alignContent: 'center', height: 50, justifyContent: 'center', paddingTop: 50}}>

                                            <Button
                                                  handleClick={() => set_picked_difficulty(0)}
                                                  text={"Retornar"}
                                            />

                                    </div>

                              </div>                     
                        </>

                      : //else we just dont render anything.... obvious comment for better readability

                        <>
                        </>

                    }

            </div>
          </div>
        </>
      )

}