import Button from "../components/button"
import { useState, useEffect } from "react"



export default function PagePractice()
{
    // difficulty related things 

    const [picked_difficulty, set_picked_difficulty] = useState(0) // stores the difficulty picked
    let displayText; // stores the text based on the difficulty
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

    // input detection things

    const [key_pressed, set_key_pressed ] = useState(null)   // useed to store input detection 
    const [toggle_effect, set_toggle_effect] = useState(false) // used to create a visual effect everytime a key is pressed

    function handle_key_pressed(event)
    {

        set_key_pressed(event.key)
        console.log(`The key pressed was - ${event.key}`)  
       handle_animation()
        
         
    } 
   
    function clean_key_pressed()
    {
      set_key_pressed(null)
      
      
    }

    function handle_animation()
    {
      set_toggle_effect(true)
      setTimeout(
        () => {set_toggle_effect(false)}, 250
      )
    }

    useEffect(() => {
      document.addEventListener('keydown', handle_key_pressed);  // checks if keys are being held down if so it calls our function to tell us which one is being pressed
      document.addEventListener('keyup', clean_key_pressed); // checks if keys are not being held down, if so it clears our key_pressed usestate

      return () => {
        document.removeEventListener('keydown', handle_key_pressed);
        document.removeEventListener('keyup', clean_key_pressed);
      };
      }, []);


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
                                  {/*** below me is a div that represents the space of the sheet area */}
                                  <div 
                                  style=
                                  {{
                                    marginTop: 40,
                                    position: 'relative', 
                                    height: "100%",
                                    width: "90%",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex'
                                  }}>

                                      {/*** this is the div for the main visible area of the sheet space the muscial sheet itself */}
                                      <div 
                                        className="Sheet_Area_Page"
                                        style=
                                        {{         
                                          justifySelf: 'center',
                                          alignSelf: 'center',                      
                                          marginTop: 40,
                                          marginBottom: 40,
                                          backgroundColor: 'aqua',
                                          height: "90%",
                                          width: "95%",
                                          position: 'absolute',
                                          zIndex: 1
                                        }}>    
                                      </div> 

                                         {/*** this is the div for the effect that renders below the main visible area*/}
                                      { toggle_effect &&
                                      <div 
                                          className="Sheet_Area_Effect"
                                          id="Sheet_Area_Animation"
                                          style=
                                              {{
                                                marginTop: 40,
                                                marginBottom: 40,
                                                height: "90%",
                                                width: "95%",
                                                position: 'absolute',
                                                zIndex: 0
                                          }}>                              
                                      </div>  
                                      }

                                                                      
                                  </div>



                                    {/*** this is the div that contains the button to go back to the initial page state!*/}
                                    <div style={{display: 'flex',width: "90%", alignContent: 'center', height: 50, justifyContent: 'center'}}>

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