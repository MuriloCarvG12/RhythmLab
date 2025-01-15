interface Progress_bar_elements
{
    notes_played: number,
    total_notes: number,
    total_inputs :number
}




export default function Progress_bar({notes_played, total_notes, total_inputs}:Progress_bar_elements)
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
        <div style={{}}>
            <div><h1>{`Progresso: ${((notes_played / total_notes) * 100).toFixed(2)}%`}</h1></div>
            <div><h2>{`Total de Teclas apertadas:  ${total_inputs}`}</h2></div>
        </div>
            

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