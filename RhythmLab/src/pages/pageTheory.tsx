import Header from "../components/header"
import Sheet_space_header from "../components/sheet_space_header"
import { TimeOutline  } from 'react-ionicons'
import { MenuOutline } from 'react-ionicons'
import { MusicalNoteOutline } from 'react-ionicons'


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

                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                        <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>O que é um Metrônomo?</text>                        
                        <p className="Theory-Paragraph-Font">Um metrônomo é um dispositivo utilizado para marcar o tempo em uma peça musical, emitindo um som periódico a intervalos regulares. Ele é uma ferramenta essencial para músicos durante os ensaios, pois ajuda a manter um ritmo constante, seja em tempos lentos ou rápidos. O metrônomo pode ser um dispositivo físico ou um aplicativo digital, e permite que o músico toque em um ritmo uniforme, o que é crucial para a execução precisa de uma música.</p>    
                    </div>

                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                        <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>O que é BPM?</text>                       
                        <p className="Theory-Paragraph-Font">BPM significa batidas por minuto (do inglês beats per minute) e é uma unidade de medida que indica a velocidade de uma peça musical, ou seja, quantas batidas ocorrem em um minuto. Cada batida representa um pulso rítmico, e o BPM define o tempo da música. Por exemplo:</p>    
                        <p className="Theory-Paragraph-Font">120 BPM significa que há duas batidas por segundo, o que é comum em muitas músicas pop ou dançantes.</p>
                        <p className="Theory-Paragraph-Font">60 BPM significa que há uma batida por segundo.</p>
                        <p className="Theory-Paragraph-Font">O BPM é uma forma de medir e controlar a velocidade de uma música e é uma referência importante para compositores, músicos e produtores ao criar ou interpretar uma peça musical.</p>
                    </div>

                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                        <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Como os metrônomos são usados para manter o controle do BPM?</text>                        
                        <p className="Theory-Paragraph-Font">O metrônomo é ajustado para tocar no BPM desejado. Ao configurar o metrônomo com uma determinada velocidade (por exemplo, 120 BPM), ele começará a emitir um som ou "clique" a cada batida, marcando o ritmo da música. Isso permite que o músico:</p>    
                        <p className="Theory-Paragraph-Font">Pratique com consistência: O metrônomo ajuda a tocar no mesmo tempo, evitando acelerações ou desacelerações involuntárias.</p> 
                        <p className="Theory-Paragraph-Font">Desenvolva a precisão rítmica: Quando um músico toca junto com um metrônomo, ele aprende a internalizar o tempo e a melhorar a precisão ao longo do tempo.</p> 
                        <p className="Theory-Paragraph-Font">Experimente com diferentes tempos: Usar o metrônomo em diferentes velocidades pode ajudar os músicos a se acostumarem a diferentes tempos e a tocá-los de forma mais fluente.</p> 
                        <p className="Theory-Paragraph-Font">Além disso, metrônomos modernos podem ter funções avançadas, como ajustes de padrões rítmicos, som de diferentes instrumentos para o clique, e até mesmo funcionalidades para tempos irregulares, como compasso 5/4 ou 7/8, tornando o treinamento mais dinâmico.</p> 
                        <p className="Theory-Paragraph-Font">Em resumo, metrônomos e BPMs são essenciais para músicos que desejam manter a precisão rítmica e dominar diferentes tempos. Eles garantem que o músico se mantenha no ritmo certo e ajudem na prática de peças de diferentes estilos e velocidades.</p> 
                    </div>
            </div>

            {/** hese are the divs for the musical staffs*/}

            <div style={{width: "80.3%", marginTop: 40}}>
                  <Sheet_space_header
                  displayText="O que são os Pautas Musicais?"
                  timeDifferenceColor="#F0544F"
                  />
            </div>
            <div className="metronome-body" style={{width: '80%', height: 'auto', display: 'flex', flexDirection: 'column', paddingTop: 40}}>
                    <div className="row-item-container"><p className="Theory-Paragraph-Font">As partituras musicais são representações gráficas de notas e ritmos usados para registrar e comunicar músicas. Elas são formadas por pentagramas, que são sistemas compostos por cinco linhas horizontais e quatro espaços, nos quais as notas musicais são posicionadas. Cada linha e espaço representa uma altura específica de som. A leitura das partituras permite que músicos toquem músicas sem precisar decorá-las.</p></div>

                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                        <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Clave de Sol</text>
                        <p className="Theory-Paragraph-Font">Uso: A clave de sol é utilizada para notas mais agudas e é a mais comum em instrumentos como piano (para a mão direita), violino, flauta, trompete, e muitos outros instrumentos melódicos.</p>
                        <p className="Theory-Paragraph-Font">Posição na partitura: Ela é colocada na primeira linha do pentagrama, indicando que essa linha representa a nota sol (G) acima do dó central. As outras notas são posicionadas com base nessa referência.</p>
                        <p className="Theory-Paragraph-Font">Características: A clave de sol é usada principalmente para vozes ou instrumentos que tocam em uma faixa de frequência mais alta.</p>
                    </div>

                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                        <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Clave de Fá</text>
                        <p className="Theory-Paragraph-Font">Uso: A clave de fá é usada para notas mais graves e é comum em instrumentos como piano (para a mão esquerda), violoncelo, trombone, tuba, e outros instrumentos graves.</p>
                        <p className="Theory-Paragraph-Font">Posição na partitura: Ela é colocada na quarta linha do pentagrama, indicando que essa linha representa a nota fá (F) abaixo do dó central. Da mesma forma que na clave de sol, as outras notas são posicionadas com base nessa referência.</p>
                        <p className="Theory-Paragraph-Font">Características: A clave de fá é usada principalmente para vozes ou instrumentos que tocam em uma faixa de frequência mais baixa.</p>
                    </div>

            </div>

            {/** These are the divs for the Note Type Theory */}
            <div style={{width: "80.3%", marginTop: 40}}>
                  <Sheet_space_header
                  displayText="O que são os Tipos de Notas?"
                  timeDifferenceColor="#F0544F"
                  />
            </div>
            <div className="metronome-body" style={{width: '80%', height: 'auto', display: 'flex', flexDirection: 'column', paddingTop: 40}}>
                    <div className="row-item-container"><p className="Theory-Paragraph-Font">Em teoria musical, as notas representam a altura e a duração de um som. Elas são os blocos fundamentais da música e podem ser categorizadas com base em sua duração (quanto tempo elas duram) e sua altura (quão agudo ou grave elas soam). Aqui está uma descrição dos tipos de notas e seus usos:</p></div>
                    <div className="row-item-container">
                      <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Tipos de Notas por Duração </text>
                    </div>

                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                      <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Nota Inteira (Semibreve)</text>
                      <p className="Theory-Paragraph-Font">Duração: Quatro tempos (em compasso 4/4).</p>
                      <p className="Theory-Paragraph-Font">Uso: Frequentemente usada para tons sustentados em passagens lentas ou para estabelecer as bases harmônicas nas composições.</p>
                    </div>    

                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                      <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Meia Nota (Mínima)</text>
                      <p className="Theory-Paragraph-Font">Duração: Dois tempos (em compasso 4/4).</p>
                      <p className="Theory-Paragraph-Font">Uso: Oferece um equilíbrio entre tons sustentados e notas mais curtas, sendo frequentemente usada em melodias e harmonias.</p>
                    </div>     

                     <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                      <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Semínima (Crotchete)</text>
                      <p className="Theory-Paragraph-Font">Duração: Um tempo (em compasso 4/4).</p>
                      <p className="Theory-Paragraph-Font">Uso: Forma a base do ritmo em muitos estilos de música, funcionando como o pulso padrão.</p>
                    </div>    

                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                      <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Colcheia (Quaver)</text>
                      <p className="Theory-Paragraph-Font">Duração: Meio tempo (em compasso 4/4).</p>
                      <p className="Theory-Paragraph-Font">Uso: Adiciona variedade rítmica, usada em passagens mais rápidas ou para criar síncope.</p>
                    </div>    

                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                      <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Semicolcheia (Semiquaver)</text>
                      <p className="Theory-Paragraph-Font">Duração: Um quarto de tempo (em compasso 4/4).</p>
                      <p className="Theory-Paragraph-Font">Uso: Comum em melodias rápidas, ornamentos e ritmos intricados.</p>
                    </div>             
                    
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
                        <img src="../.././public/note_durations_symbols/whole_note.png" style={{width:200, height: 200}}></img>
                        <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Nota Inteira (Semibreve):</text>
                        <p className="Theory-Paragraph-Font">Representa a duração mais longa entre essas notas.</p>
                    </div>

                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                        <img src="../.././public/note_durations_symbols/half_note.png" style={{width:200, height: 200}}></img>
                        <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Meia Nota (Mínima):</text>
                        <p className="Theory-Paragraph-Font">Vale metade da duração de uma semibreve</p>
                    </div>

                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                      <img src="../.././public/note_durations_symbols/quarter_note.png" style={{width:200, height: 200}}></img>
                      <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Semínima (Quarter Note):</text>
                      <p className="Theory-Paragraph-Font">É a unidade de tempo mais comum em muitos estilos de música.</p>
                    </div>
                    
                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                      <img src="../.././public/note_durations_symbols/eight_note.png" style={{width:200, height: 200}}></img>
                      <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Colcheia (Eighth Note):</text>
                      <p className="Theory-Paragraph-Font">É mais curta que a semínima, valendo meio tempo.</p>
                    </div>
                    
                    <div className="row-item-container" style={{display:'flex', flexDirection: 'column', gap: 20}}>
                        <img src="../.././public/note_durations_symbols/sixteenth_note.png" style={{width:200, height: 200}}></img>
                        <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Semicolcheia (Sixteenth Note):</text>
                        <p className="Theory-Paragraph-Font"> ainda mais curta, valendo um quarto de tempo.</p>
                    </div>
                    
              </div>

          </div>
        </>
      )

}