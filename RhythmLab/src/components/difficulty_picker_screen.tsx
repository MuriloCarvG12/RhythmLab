import Button from "./button"



interface DifficultySelectorProps {
    
    setPickedDifficulty: (value: number) => void;
  }

export default function Difficulty_picker_screen({ setPickedDifficulty }:DifficultySelectorProps)
{
    
    return(  
        <>
        
            <div style={{backgroundColor: '#F0544F', textAlign: 'center', borderBlockStyle: 'solid', borderBlockWidth: 3, borderBlockColor: '#F0544F', width: '100%', paddingRight: 6}}>
                    <h1> Selecione uma dificuldade </h1>
            </div>
            
            <div className= 'metronome-body' style={{width: '100%', height: '70vh', paddingTop: 50}}>
                                                      
                    <div className='row-item-container'>
            
                            <Button 
                                    handleClick={() => setPickedDifficulty(1)}
                                    text={"Facil"}
                                    bgColor="#5bff42"
                                                                
                            />

                            <Button
                                    handleClick={() => setPickedDifficulty(2)}
                                    text={"Medio"}
                                    bgColor="#ffdc42"
            
                            />

                            <Button
                                    handleClick={() => setPickedDifficulty(3)}
                                    text={"Dificil"}
                                    bgColor="#ff5542"
                            />

                    </div>
            
            </div>
        </>
    )
}