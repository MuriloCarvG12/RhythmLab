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
                <p> A  </p>
                <p> Test </p>
                <p> Test </p>
                

              </div>
              
              
              <div style={{width: "80.3%", marginTop: 40}}>
                  <Sheet_space_header
                  displayText="Teoria Para Ritmos"
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