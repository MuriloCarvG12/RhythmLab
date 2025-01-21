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
              
              
              <div style={{width: "80.3%", marginTop: 40}}>
                  <Sheet_space_header
                  displayText="Diferentes tipos de Notas"
                  timeDifferenceColor="#F0544F"
                  />
              </div>


              <div className="metronome-body" style={{width: '80%', height: 'auto', display: 'flex', flexDirection: 'column', paddingTop: 40}}>
                    <div className="row-item-container"></div>
                    <div className="row-item-container"></div>
                    <div className="row-item-container"></div>
                    <div className="row-item-container"></div>
                    <div className="row-item-container"></div>
                    <div className="row-item-container"></div>
              </div>

          </div>
        </>
      )

}