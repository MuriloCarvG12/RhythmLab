import Header from "../components/header"
import Sheet_space_header from "../components/sheet_space_header"
import { TimeOutline  } from 'react-ionicons'
import { MenuOutline } from 'react-ionicons'
import { MusicalNoteOutline } from 'react-ionicons'
import Image from 'react'

export default function PageTheory()
{
    return (
        <>
          <div className="container" style={{height: 'auto', width: '100vh'}}>      
              
              <div className="header-size"  style={{height: 400, width: '100%'}}>
                <Header/>
              </div>

              <div className='Paragraph'>

                <p className='Titles-font' style={{fontSize:30, opacity: 1}}> Bem vindo a Pagina Teoria! </p>

                <p> Na pagina teoria você podera encontrar explicações sobre os principais conceitos a respeito de ritmos utilizados para música</p>
                <br></br>
                <p className='Titles-font' style={{fontSize:30, opacity: 1}}> O que será apresentado? </p>
                <br></br>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                  <p style={{ display: 'flex', alignItems: 'center', gap: '8px', justifySelf: 'center' }}>
                    <TimeOutline color={'#F0544F'} title={'text'} height="19px" width="25px" />
                    <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Metrônomo:</text>
                    <text>Uma ferramenta para manter e acompanhar o ritmo</text>
                  </p>

                </div>

                <br></br>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                  <p style={{ display: 'flex', alignItems: 'center', gap: '8px', justifySelf: 'center' }}>
                    <MenuOutline color={'#F0544F'} title={'text'} height="19px" width="25px" />
                    <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Pautas Musicais:</text>
                    <text>O que são e as diferenças entra a pauta Clef e Bass</text>
                  </p>
                  
                </div>

                <br></br>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                  <p style={{ display: 'flex', alignItems: 'center', gap: '8px', justifySelf: 'center' }}>
                    <MusicalNoteOutline color={'#F0544F'} title={'text'} height="19px" width="25px" />
                    <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Notas Musicais:</text>
                    <text>O que são e os seus usos</text>
                  </p>
                  
                </div>

                <br></br>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                  <p style={{ display: 'flex', alignItems: 'center', gap: '8px', justifySelf: 'center' }}>
                    <MusicalNoteOutline color={'#F0544F'} title={'text'} height="19px" width="25px" />
                    <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Tipos de Notas:</text>
                    <text>Os Principais tipos de notas presentes na música</text>
                  </p>
                  
                </div>
                
                <br></br>

              </div>

            {/** these are the divs for the metronome explanation */}
            <div style={{width: "80.3%", marginTop: 40}}>
                  <Sheet_space_header
                  displayText="O que são Metronomos?"
                  timeDifferenceColor="#F0544F"
                  />
            </div>
            <div className="metronome-body" style={{width: '80%', height: 'auto', display: 'flex', flexDirection: 'column', paddingTop: 40}}>
                    <div className="row-item-container"><p className="Theory-Paragraph-Font"> Talk about what are metronomes here </p></div>
                    <div className="row-item-container"><p className="Theory-Paragraph-Font">Talk about what are bpms and their importance in music</p></div>
                    <div className="row-item-container"><p className="Theory-Paragraph-Font">Talk about how metronomes are used to keep track of the bpm</p></div>
            </div>

            {/** hese are the divs for the musical staffs*/}

            <div style={{width: "80.3%", marginTop: 40}}>
                  <Sheet_space_header
                  displayText="O que são os Pautas Musicais?"
                  timeDifferenceColor="#F0544F"
                  />
            </div>
            <div className="metronome-body" style={{width: '80%', height: 'auto', display: 'flex', flexDirection: 'column', paddingTop: 40}}>
                    <div className="row-item-container"><p className="Theory-Paragraph-Font">Talk about what are musical sheets here</p></div>
                    <div className="row-item-container"><p className="Theory-Paragraph-Font">Talk Clef staffs here</p></div>
                    <div className="row-item-container"><p className="Theory-Paragraph-Font">Talk Bass staffs here</p></div>
            </div>

            {/** These are the divs for the Note Type Theory */}
            <div style={{width: "80.3%", marginTop: 40}}>
                  <Sheet_space_header
                  displayText="O que são os Tipos de Notas?"
                  timeDifferenceColor="#F0544F"
                  />
            </div>
            <div className="metronome-body" style={{width: '80%', height: 'auto', display: 'flex', flexDirection: 'column', paddingTop: 40}}>
                    <div className="row-item-container"><p className="Theory-Paragraph-Font">Talk about the different duration of notes here</p></div>
                    <div className="row-item-container"><p className="Theory-Paragraph-Font">Talk about the benefits that different types of notes bring </p></div>               
            </div>

            {/** These are the divs for the Note Type Theory */}
            <div style={{width: "80.3%", marginTop: 40}}>
                  <Sheet_space_header
                  displayText="Diferentes tipos de Notas"
                  timeDifferenceColor="#F0544F"
                  />
            </div>
              <div className="metronome-body" style={{width: '80%', height: 'auto', display: 'flex', flexDirection: 'column', paddingTop: 40}}>

                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                        <img src="../.././public/note_durations_symbols/whole-note.png" style={{width:200, height: 200}}></img>
                        <p className="Theory-Paragraph-Font">Nota Inteira (Semibreve):</p>
                        <p className="Theory-Paragraph-Font">Representa a duração mais longa entre essas notas.</p>
                    </div>

                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                        <img src="../.././public/note_durations_symbols/half note.jpg" style={{width:200, height: 200}}></img>
                        <p className="Theory-Paragraph-Font">Meia Nota (Mínima):</p>
                        <p className="Theory-Paragraph-Font">Vale metade da duração de uma semibreve</p>
                    </div>

                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                      <img src="../.././public/note_durations_symbols/quarter-note.jpg" style={{width:200, height: 200}}></img>
                      <p className="Theory-Paragraph-Font">Semínima (Quarter Note):</p>
                      <p className="Theory-Paragraph-Font">É a unidade de tempo mais comum em muitos estilos de música.</p>
                    </div>
                    
                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                      <img src="../.././public/note_durations_symbols/eight note.png" style={{width:200, height: 200}}></img>
                      <p className="Theory-Paragraph-Font">Colcheia (Eighth Note):</p>
                      <p className="Theory-Paragraph-Font">É mais curta que a semínima, valendo meio tempo.</p>
                    </div>
                    
                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                        <img src="../.././public/note_durations_symbols/sixteenth note.png" style={{width:200, height: 200}}></img>
                        <p className="Theory-Paragraph-Font">Semicolcheia (Sixteenth Note):</p>
                        <p className="Theory-Paragraph-Font"> ainda mais curta, valendo um quarto de tempo.</p>
                    </div>
                    
              </div>

          </div>
        </>
      )

}