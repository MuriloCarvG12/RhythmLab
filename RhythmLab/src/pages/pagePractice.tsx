import { useState, useEffect, useRef  } from "react"
import rhythm from "../rhythm-data/rhythm-data" ;
import Progress_bar from "../components/progress_bar";
import Header from "../components/header";
import Difficulty_picker_screen from "../components/difficulty_picker_screen";
import Sheet_space_header from "../components/sheet_space_header";
import Main_game from "../components/main_game";
import Game_over_screen from "../components/game_over_screen";

export default function PagePractice()
{
    interface rhythm_array
    {
      type :string,
      color :string,
      time :number
    }
    // difficulty related things 
    const [game_is_over, set_game_is_over] = useState(true)
    const [picked_difficulty, set_picked_difficulty] = useState(0) // stores the difficulty picked
    const [displayText, setDisplayText] = useState("Selecione uma dificuldade");
    const [game_rhythm, set_game_rhythm] = useState<rhythm_array[]> ([])
    
    function generateRhythm(rhythmData , total_difficulty_notes :number)
    {
      const rhythm = [];
      let current_number_notes = 1;
    
      while (current_number_notes <= total_difficulty_notes) {
        const randomIndex = Math.floor(Math.random() * rhythmData.length);
        const note = rhythmData[randomIndex];

        rhythm.push(note);
        current_number_notes++;
      }
      console.log(rhythm)
      set_game_rhythm(rhythm)
    }

    function generateRhythmForDifficulty(difficulty:number) // this function informs the generateRhythm function the array it should acess and also the total of notes it will generate!
    {
      let rhythmData;
      let total_difficulty_notes = 0;

      if (difficulty == 1) 
      {
        total_difficulty_notes = 6
        rhythmData = rhythm.rhythm_easy
      } 

      else if (difficulty == 2)
      {
        total_difficulty_notes = 6
        rhythmData = rhythm.rhythm_medium
      } 

      else if (difficulty == 3) 
      {
        total_difficulty_notes = 6
        rhythmData = rhythm.rhythm_hard
      }
    
      return generateRhythm(rhythmData, total_difficulty_notes);
    }

  // Update game state and display text based on difficulty
  useEffect(() => {
    if (picked_difficulty > 0) {
      set_game_is_over(false);
      switch (picked_difficulty) {
        case 1:
          setDisplayText("Pratica - Facil");
          generateRhythmForDifficulty(1)
          break;
        case 2:
          setDisplayText("Pratica - Medio");
          generateRhythmForDifficulty(2)
          break;
        case 3:
          setDisplayText("Pratica - Dificil");
          generateRhythmForDifficulty(3)
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
    const [total_correct_input, set_total_correct_input] = useState(0)

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
          set_total_correct_input((prevTotalCorrectInput) => prevTotalCorrectInput + 1) 
          console.log('Great timing!');
        } 
        else 
        {
           // set_time_difference_effect(2) this means the player got the time wrong and will be rewarded with a red border color! he settimeout resets the color into the default one after 500ms
           setTimeDifferenceEffect(2)       
          console.log('Wrong input');
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
        if (noteIndex >= game_rhythm.length) {
          set_isPlaying(false); // stop playback when we reach the end of the rhythm array.
          return;
        }

        // if we are not in the last note then
         set_current_note(noteIndex) // Update the current note index.
         
         
        const expected_time = start_time + Number(game_rhythm.slice(0,  noteIndex).reduce((sum, note) => sum + note.time, 0))
        timeoutRef.current = expected_time;
        console.log(`the expected time is ${expected_time}`)

        // Schedule the next note based on the duration of the current note.
        window.setTimeout(() => {
          audio.play()
          console.log(timeoutRef)
          console.log(`Current note ${noteIndex} is ${game_rhythm[noteIndex].type}`) // prints which note we are on this is our user feedback for now...
          playNextNote(noteIndex + 1); // Move to the next note.
          set_notes_played(noteIndex + 1)

        }, Number(game_rhythm[noteIndex]?.time || 500));

        
      };
  
      playNextNote(0); // starts our recursive function from the first note
    };


    function stopRhythm()
    {
      set_total_correct_input(0)
      set_percentage_right_notes(0)
      set_total_inputs(0)
      set_notes_played(0)
      set_picked_difficulty(0)
      set_current_note(0)
      set_isPlaying(false)
      clearTimeout(timeoutRef.current as number) // picks out timeout ref and converts it to a number Type Cast
      
    }

    
    useEffect(() => {
      set_total_notes(game_rhythm.length);
    }, [game_rhythm]); // Only run when 'rhythm' changes // sets our total number of nots this will be used to manipulate the progress bar 

    useEffect(() => {
      let TotalTime = 0;
      game_rhythm.forEach((Note) => {TotalTime += Note.time})
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
    const [percentage_right_notes, set_percentage_right_notes] = useState(0)

    useEffect(() => {
      if (total_notes > 0) {
        set_percentage_right_notes((total_correct_input / total_inputs) * 100); // considera o total de inputs corretos dividido pelo total de inputs
        
      }

    }, [total_correct_input, total_inputs]);

    const[game_over_text, set_game_over_text] = useState("I am the default Text!")

    useEffect(() => 
      {
        if(percentage_right_notes < 50)
          {
            set_game_over_text("Podemos Melhorar!")
          }
        else if(percentage_right_notes >= 50 && percentage_right_notes < 75)
        {
          set_game_over_text("Nada Mal!")
        }
        else if(percentage_right_notes >= 75 && percentage_right_notes <= 90)
          {
            set_game_over_text("Muito Bem!")
          }
        else
        {
          set_game_over_text("Você acertou mais que 90% Excelente!")
        }
      }, [percentage_right_notes])

    /** Visual Stuff Below 
     *   |
     *   |
     *  \_/
     *   
    */

    return (
        <>
          <div className='container' id='container'  >
            <div style={{width: '80%'}}>

                    {/** component for the header will load up! */}
                    <Header/>

                    {/** difficulty option gets loaded up! */}
                    {picked_difficulty == 0 
                    ?
                    <>
                        <Difficulty_picker_screen
                          setPickedDifficulty={set_picked_difficulty}
                        />       
                    </>
                    //difficulty doesnt equal 0 or in other words it got picked to we just render nothing
                    :<></>
                    }

                    {/*** Rhythm Component gets loaded up! */}
                    {picked_difficulty > 0 ? (
                        <>
                          {/* this is the element for the header */}
                          <Sheet_space_header
                          timeDifferenceColor={timeDifferenceColor}
                          displayText={displayText}
                          />

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
                                <Main_game
                                isPlaying={isPlaying}
                                rhythm={game_rhythm}
                                toggle_effect={toggle_effect}
                                stopRhythm={stopRhythm}
                                startRhythm={startRhythm}
                                current_note={current_note}
                                />
                              </div>
                            </>
                          ) : (
                            // else we render the code for the game over screen!
                            <>
                              <div className="Sheet_Space" style={{ borderColor: timeDifferenceColor }}>

                                    <Game_over_screen
                                      game_over_text={game_over_text}
                                      total_inputs={total_inputs}
                                      total_correct_input={total_correct_input}
                                      percentage_right_notes={percentage_right_notes}
                                      stopRhythm={stopRhythm}
                                    />
                                  
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          {/*** we just dont render anything if picked difficulty isnt higher than 0 */}
                        </>
                      )}
            </div>
          </div>
        </>
      )

}