import Button from "./button"

interface Game_over_screen
{
    game_over_text :string
    total_inputs :number
    total_correct_input :number
    percentage_right_notes :number
    stopRhythm: () => void
}


export default function Game_over_screen({game_over_text, total_inputs, total_correct_input, percentage_right_notes, stopRhythm}:Game_over_screen)
{
    return(
        <>
            <div className="Player-Stats" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            
                        <h1 className='Titles-font' style={{color: '#fc7672'}}>{`Sua Performace - ${game_over_text}`}</h1>
                        <h3 style={{color:'white'}}> Total de Inputs: {total_inputs} </h3>
                        <h3 style={{color:'white'}}> Total de inputs Corretos: {total_correct_input} </h3>
                        <h3 style={{color:'white'}}> Porcentagem de acertos : {percentage_right_notes.toFixed(2)} </h3>
            
            </div>
            
            <div> 
                    <Button
                        text={'Tentar Novamente'}
                        handleClick={stopRhythm}
                        />
            </div>
        </>
    )
}