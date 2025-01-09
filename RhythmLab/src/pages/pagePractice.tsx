import Button from "../components/button"
import { useState, useEffect, useRef  } from "react"
import { rhythm } from "../rhythm-data/rhythm-data";


///TODO: SUPPLYING INPUTS BREAKS THE PROGRESS BAR, DO SOMETHING ABOUT IT...
/***
 *       
 * 
 * 
 */

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
        displayText = 'This wasnt supposed to happen!';
        break;
    }

    // input detection things

    const [key_pressed, set_key_pressed ] = useState(null)   // useed to store input detection 
    const [toggle_effect, set_toggle_effect] = useState(false) // used to create a visual effect everytime a key is pressed
    const animationTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    function handle_key_pressed(event)
    {

      set_key_pressed(event.key)
      console.log(`The key pressed was - ${key_pressed}`)  
      

     
      if (animationTimeout.current !== undefined) {
        clearTimeout(animationTimeout.current);
      }
    
      // Reset the effect immediately, then start a new animation
      set_toggle_effect(false); // Reset the animation state
      handle_animation(); // Start the animation for the new key press
    }
   
    function clean_key_pressed()
    {
      set_key_pressed(null)
    }

    function handle_animation()
    {
      set_toggle_effect(true)
      animationTimeout.current = setTimeout(
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

    // rhythm related things

    const [current_note, set_current_note] = useState(0) // keeps track of which note in the musical sheet we are on
    const [notes_played, set_notes_played] = useState(0) // keeps track on how many notes have been palyed
    const [total_notes, set_total_notes] = useState(0)
    const [isPlaying, set_isPlaying] = useState(false); // Tracks whether the rhythm is playing
    const timeoutRef = useRef<number | null>(null);

    function startRhythm() // this is a function that will handle the logic for knowing in which note we are on!
    {
      set_isPlaying(true)

      const playNextNote =  (noteIndex: number) =>  // this is a recursive function that takes the current index and checks if the current index is the last one! if not we will keep navigating through the whole array
        {
          console.log("current index " + noteIndex)
        // first block below is our exit condition
        if (noteIndex >= rhythm.length) {
          set_isPlaying(false); // stop playback when we reach the end of the rhythm array.
          return;
        }
        // if we are not in the last note then
         set_current_note(noteIndex + 1); // Update the current note index.
         set_notes_played(noteIndex + 1)
        
  

        // Schedule the next note based on the duration of the current note.
        timeoutRef.current = window.setTimeout(() => {
          
          console.log(`Current note ${noteIndex} is ${rhythm[noteIndex].type}`) // prints which note we are on this is our user feedback for now...
          playNextNote(noteIndex + 1); // Move to the next note.

        }, Number(rhythm[noteIndex]?.time || 500));

        
      };
  
      playNextNote(0); // starts our recursive function from the first note
    };

    useEffect(() => {
      set_total_notes(rhythm.length);
    }, [rhythm]); // Only run when 'rhythm' changes // sets our total number of nots this will be used to manipulate the progress bar 


    return (
        <>
          <div className='container' id='container'  >
            <div style={{width: '80%'}}>


                          <div className='header'>
                                <div><h1 className='Titles-font'>Welcome to RhythmLab !</h1></div>
                                <img src='../.././public/Favicon.png' className='favicon'></img>
                          </div>

                    {/** difficulty option gets loaded up! */}

                    {picked_difficulty == 0 
                    ?
                    <>
                                <div style={{backgroundColor: '#F0544F', textAlign: 'center', borderBlockStyle: 'solid', borderBlockWidth: 3, borderBlockColor: '#F0544F', width: '100%', paddingRight: 6}}>
                                            <h1> Selecione uma dificuldade </h1>
                                </div>

                                        <div className= 'metronome-body' style={{width: '100%', height: '70vh', paddingTop: 50}}>
                                          
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
                    {/*** Rhythm Component gets loaded up! */}
                    { picked_difficulty > 0 

                      ?

                      <>

                              <div style={{backgroundColor: '#F0544F', textAlign: 'center', borderBlockStyle: 'solid', borderBlockWidth: 3, borderBlockColor: '#F0544F', width: '100%', paddingRight: 6}}>
                                            <h1> {displayText} </h1>
                              </div>
                                    
                              

                              <div className="Sheet_Space">
                                    {/*** this is the div for the progress bar */}

                                <div style=
                                {{display: 'flex', 
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  textAlign: 'center',
                                  height: "20vh",
                                  width: "125vh",
                                  gap: 0,
                                  color: 'white'
                                }}
                                >
                                  <div><h1>Progress</h1></div>
                                  <div
                                        className="Sheet_Area_Progress_Bar"

                                        style={{
                                            height: '2.5vh',
                                            width: `${(notes_played / total_notes) * 100}%`,
                                            borderRadius: 30,
                                            backgroundColor: '#ff976e',
                                            zIndex: 2,
                                            
                                            
                                            
                                        }}
                                      >
                                  </div>
                                </div>


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
                                          display: 'flex',
                                          flexDirection: 'row',
                                          gap: 30,       
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
                                          {
                                              
                                              rhythm.map(() => (
                                                      <div style={{backgroundColor: 'red', width: 40, height: 40}}>

                                                      </div>

                                              ))

                                          }
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
                                            <Button
                                                handleClick={() => startRhythm()}
                                                text={"Comecar"}
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