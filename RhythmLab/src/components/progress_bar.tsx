interface Progress_bar_elements
{
    notes_played: number,
    total_notes: number
}




export default function Progress_bar({notes_played, total_notes}:Progress_bar_elements)
{
    return(                         
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
    )
}