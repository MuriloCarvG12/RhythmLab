import Header from "../components/header"
import Sheet_space_header from "../components/sheet_space_header"

export default function PageTheory()
{
    return (
        <>
          <div className="container" style={{height: 'auto', width: '100vh'}}>      
              
              <div className="header-size"  style={{height: 400, width: '100%'}}>
                <Header/>
              </div>

              <div className='Paragraph'>
                <p className='Titles-font' style={{fontSize:30, opacity: 1}}> Bem vindo a pagina Teoria! </p>
                <p> Na pagina teoria você podera encontrar explicações sobre os principais conceitos a respeito de ritmos utilizados para música</p>
                <p className='Titles-font' style={{fontSize:30, opacity: 1}}> O que será apresentado: </p>
                <p> Metrônomo: Uma ferramenta para manter e acompanhar o ritmo </p>
                <p> Pautas Músicais </p>
                <p> O que são os tipos de notas e seus usos</p>
                <p> Os diferentes tipos de notas presentes na música</p>
                

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
                  displayText="O que são os pautas músicais"
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
                  displayText="O que são os tipos de Notas?"
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
                    <div className="row-item-container"><p className="Theory-Paragraph-Font">Talk about Whole Notes here</p></div>
                    <div className="row-item-container"><p className="Theory-Paragraph-Font">Talk about Half Notes here</p></div>
                    <div className="row-item-container"><p className="Theory-Paragraph-Font">Talk about Quarter Notes here</p></div>
                    <div className="row-item-container"><p className="Theory-Paragraph-Font">Talk about Eighth Notes here</p></div>
                    <div className="row-item-container"><p className="Theory-Paragraph-Font">Talk about Sixteenth Notes here</p></div>
                    
              </div>

          </div>
        </>
      )

}