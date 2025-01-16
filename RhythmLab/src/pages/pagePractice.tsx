import Button from "../components/button"
import { useState, useEffect, useRef  } from "react"
import { rhythm } from "../rhythm-data/rhythm-data";
import Progress_bar from "../components/progress_bar";
import Header from "../components/header";



///TODO: SUPPLYING INPUTS BREAKS THE PROGRESS BAR, DO SOMETHING ABOUT IT...
/***
 *       
 * 
 * 
 */

export default function PagePractice()
{
    // difficulty related things 
    const [game_is_over, set_game_is_over] = useState(true)
    const [picked_difficulty, set_picked_difficulty] = useState(0) // stores the difficulty picked
    const [displayText, setDisplayText] = useState("Selecione uma dificuldade");

  // Update game state and display text based on difficulty
  useEffect(() => {
    if (picked_difficulty > 0) {
      set_game_is_over(false);
      switch (picked_difficulty) {
        case 1:
          setDisplayText("Pratica - Facil");
          break;
        case 2:
          setDisplayText("Pratica - Medio");
          break;
        case 3:
          setDisplayText("Pratica - Dificil");
          break;
        default:
          setDisplayText("This wasn't supposed to happen!");
      }
    }
  }, [picked_difficulty]);


    // input detection things also saving the number of inputs sent by the player

    const [key_pressed, set_key_pressed ] = useState(null)   // useed to store input detection 
    const [toggle_effect, set_toggle_effect] = useState(false) // used to create a visual effect everytime a key is pressed
    const [total_inputs, set_total_inputs] = useState(0) // used to store the total inputs sent by the player
    const [timeDifferenceEffect, setTimeDifferenceEffect] = useState(0); // used to determine which effect the user will see 0 - default color 1 - green color(right timing) 2 - red color(missed timing)
    const [timeDifferenceColor, setTimeDifferenceColor] = useState("#F0544F");
    const animationTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    function handle_key_pressed(event)
    {

      set_key_pressed(event.key)
      console.log(`The key pressed was - ${key_pressed}`)  
      set_total_inputs((prevTotal) => prevTotal + 1);
      
      const input_time = Date.now()

      if(timeoutRef.current)
      {
        const time_difference = timeoutRef.current ? input_time - timeoutRef.current : null // this line gets the time difference between the user input and the expected time for the note to play
        console.log(`Time difference for note ${current_note}: ${time_difference} ms`);

        if (Math.abs(time_difference as number) <= 250) {
          // set_time_difference_effect(1) this means the player got the time right and will be rewarded with a green border color! the settimeout resets the color into the default one after 500ms
          setTimeDifferenceEffect(1)         
          console.log('Great timing!');
        } 
        else 
        {
           // set_time_difference_effect(2) this means the player got the time wrong and will be rewarded with a red border color! he settimeout resets the color into the default one after 500ms
           setTimeDifferenceEffect(2)       
          console.log('YOU FUCKING SUCK!');
        }

        setTimeout(() => {
          setTimeDifferenceEffect(0);
          setTimeDifferenceColor("#F0544F");
         }, 250);
      }
      if (animationTimeout.current !== undefined) {
        clearTimeout(animationTimeout.current);
      }
    
      // Reset the effect immediately, then start a new animation
      set_toggle_effect(false); // Reset the animation state
      handle_animation(); // Start the animation for the new key press
    }

    useEffect(() => {
      switch (timeDifferenceEffect) {

        case 0:
          setTimeDifferenceColor("#F0544F");
          break;

        case 1:
          setTimeDifferenceColor("green");
          break;

        case 2:
          setTimeDifferenceColor("red");
          break;

        default:
          break;
      }
    }, [timeDifferenceEffect]);
   
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

    
    const [notes_played, set_notes_played] = useState(0) // keeps track on how many notes have been palyed
    const [total_notes, set_total_notes] = useState(0)
    const [isPlaying, set_isPlaying] = useState(false); // Tracks whether the rhythm is playing
    const timeoutRef = useRef<number | null>(null);
    const [current_note, set_current_note] = useState(0)
    const [progress_animation_duration, set_progress_animation_duration] = useState(0) 
    

    function startRhythm() // this is a function that will handle the logic for knowing in which note we are on!
    {
      const audio = new Audio("../.././public/sounds/metronome.mp3");
      const start_time = Date.now() //this represents the current time the rhythm has started it will be used as a base to calculate all other future timings
      console.log(`the initial time is ${start_time}`)
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
         set_current_note(noteIndex) // Update the current note index.
         
        const expected_time = start_time + Number(rhythm.slice(0,  noteIndex).reduce((sum, note) => sum + note.time, 0))
        timeoutRef.current = expected_time;
        console.log(`the expected time is ${expected_time}`)

        // Schedule the next note based on the duration of the current note.
        window.setTimeout(() => {
          audio.play()
          console.log(timeoutRef)
          console.log(`Current note ${noteIndex} is ${rhythm[noteIndex].type}`) // prints which note we are on this is our user feedback for now...
          playNextNote(noteIndex + 1); // Move to the next note.
          set_notes_played(noteIndex + 1)

        }, Number(rhythm[noteIndex]?.time || 500));

        
      };
  
      playNextNote(0); // starts our recursive function from the first note
    };


    function stopRhythm()
    {
      set_notes_played(0)
      set_picked_difficulty(0)
      set_current_note(0)
      set_isPlaying(false)
      clearTimeout(timeoutRef.current as number) // picks out timeout ref and converts it to a number Type Cast
      
    }

    useEffect(() => {
      set_total_notes(rhythm.length);
    }, [rhythm]); // Only run when 'rhythm' changes // sets our total number of nots this will be used to manipulate the progress bar 

    useEffect(() => {
      let TotalTime = 0;
      rhythm.forEach((Note) => {TotalTime += Note.time})
      set_progress_animation_duration(TotalTime) // this controls the progress_bar_animation
    }, [])

    useEffect(() => 
      {
        if(notes_played == total_notes)
          {
            set_game_is_over(true)
          }
      }, [notes_played, total_notes])
    // Player Stats stuff - showing how well they did!
    

    return (
        <>
          <div className='container' id='container'  >
            <div style={{width: '80%'}}>


                    <Header/>

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
                    {picked_difficulty > 0 ? (
                        <>
                          {/* this is the element for the header */}
                          <div
                            className="Sheet_Space_Header"
                            style={{
                              backgroundColor: timeDifferenceColor,
                              textAlign: "center",
                              borderBlockStyle: "solid",
                              borderBlockWidth: 3,
                              borderBlockColor: timeDifferenceColor,
                              width: "100%",
                              color: "white",
                            }}
                          >
                            <h1> {displayText} </h1>
                          </div>

                          {!game_is_over ? (
                            <>
                              <div className="Sheet_Space" style={{ borderColor: timeDifferenceColor }}>
                                {/* this is the div for the progress bar */}
                                <Progress_bar
                                  notes_played={notes_played}
                                  total_notes={total_notes}
                                  total_inputs={total_inputs}
                                />

                                {/* below me is a div that represents the space of the sheet area */}
                                <div
                                  style={{
                                    marginTop: 40,
                                    position: "relative",
                                    height: "100%",
                                    width: "95%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    display: "flex",
                                  }}
                                >
                                  {/* this is the div for the main visible area of the sheet space the musical sheet itself */}
                                  <div
                                    className="Sheet_Area_Page"
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      justifyContent: "space-between",
                                      gap: 30,
                                      justifySelf: "center",
                                      alignSelf: "center",
                                      marginTop: 40,
                                      marginBottom: 40,
                                      backgroundColor: "#292929",
                                      height: "90%",
                                      width: "100%",
                                      position: "absolute",
                                      zIndex: 1,
                                      padding: 3,
                                      borderColor: "#ff9491",
                                      borderStyle: "solid",
                                      borderRadius: 10,
                                    }}
                                  >
                                    {/* Renders an animation that works to tell the user where they are! */}
                                    {isPlaying && (
                                      <div
                                        className="Sheet_Current_Position"
                                        id="Sheet_Current_Position"
                                        style={{
                                          transition: `left ${rhythm[current_note]?.time || 500}ms linear`,
                                          left: `${(current_note / (rhythm.length - 1)) * 100}%`,
                                        }}
                                      ></div>
                                    )}

                                    {/* Logic for rendering the rhythm squares! */}
                                    {rhythm.map((note, index) => (
                                      <div
                                        key={index}
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          backgroundColor: index === current_note ? "#7aeb57" : "#fc5549",
                                          transition: "background-color 0.2s ease",
                                        }}
                                      >
                                        {/* You can display some content here */}
                                      </div>
                                    ))}
                                  </div>

                                  {/* this is the div for the effect that renders below the main visible area */}
                                  {toggle_effect && (
                                    <div
                                      className="Sheet_Area_Effect"
                                      id="Sheet_Area_Animation"
                                      style={{
                                        marginTop: 40,
                                        marginBottom: 40,
                                        height: "90%",
                                        width: "95%",
                                        position: "absolute",
                                        zIndex: 0,
                                      }}
                                    ></div>
                                  )}
                                </div>

                                {/* this is the div that contains the button to go back to the initial page state! */}
                                <div
                                  style={{
                                    display: "flex",
                                    width: "90%",
                                    alignContent: "center",
                                    height: 50,
                                    justifyContent: "center",
                                    gap: "20%",
                                    paddingBottom: 40,
                                  }}
                                >
                                  {isPlaying ? (
                                    <Button handleClick={() => stopRhythm()} text={"Retornar"} />
                                  ) : (
                                    <Button handleClick={() => startRhythm()} text={"Comecar"} />
                                  )}
                                </div>
                              </div>
                            </>
                          ) : (
                            // else we just don't render anything.... obvious comment for better readability
                            <>
                              {/* Render nothing here */}
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          {/* code for the game over screen */}
                        </>
                      )}
            </div>
          </div>
        </>
      )

}