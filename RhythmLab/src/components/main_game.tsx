import Button from "./button"

interface rhythm
{
    type: string
    color :string
    time : number
}

interface main_game_interface
{
    isPlaying:boolean 
    rhythm :rhythm[]
    toggle_effect :boolean
    stopRhythm: () => void
    startRhythm: () => void
    current_note: number
}


export default function Main_game({isPlaying, rhythm, toggle_effect, stopRhythm, startRhythm, current_note}:main_game_interface)
{
    return(
            <>
              <div
                style={{
                  marginTop: 40,
                  position: 'relative',
                  height: '100%',
                  width: '95%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                {/* This is the div for the main visible area of the sheet space (the musical sheet itself) */}
                <div
                  className="Sheet_Area_Page"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 30,
                    justifySelf: 'center',
                    alignSelf: 'center',
                    marginTop: 40,
                    marginBottom: 40,
                    backgroundColor: '#292929',
                    height: '90%',
                    width: '100%',
                    position: 'absolute',
                    zIndex: 1,
                    padding: 3,
                    borderColor: '#ff9491',
                    borderStyle: 'solid',
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
                        width: '50px',
                        height: '50px',
                        backgroundColor: index === current_note ? '#7aeb57' : `${rhythm[index].color}`,
                        transition: 'background-color 0.2s ease',
                      }}
                    >
                      {/* You can display some content here */}
                    </div>
                  ))}
                </div>
        
                {/* This is the div for the effect that renders below the main visible area */}
                {toggle_effect && (
                  <div
                    className="Sheet_Area_Effect"
                    id="Sheet_Area_Animation"
                    style={{
                      marginTop: 40,
                      marginBottom: 40,
                      height: '90%',
                      width: '95%',
                      position: 'absolute',
                      zIndex: 0,
                    }}
                  ></div>
                )}
              </div>
        
              {/* This is the div that contains the button to go back to the initial page state! */}
              <div
                style={{
                  display: 'flex',
                  width: '90%',
                  alignContent: 'center',
                  height: 50,
                  justifyContent: 'center',
                  gap: '20%',
                  paddingBottom: 40,
                }}
              >
                {isPlaying ? (
                  <Button handleClick={() => stopRhythm()} text={"Retornar"} />
                ) : (
                  <Button handleClick={() => startRhythm()} text={"Comecar"} />
                )}
              </div>
            </>
          )
}