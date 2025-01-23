import '.././index.css'
import Card_button from '../components/card'
import Header from '../components/header'

export default function PageHome()
{
     

    const metronome = '/metronome'
    const practice = '/practice'
    const theory = '/theory'
    
    return (
        
        
        <div className='container' id='container'>
            <Header/>
            <div className='Paragraph'>
            <p className='Titles-font' style={{fontSize:30, opacity: 1}}>
                Bem-vindo ao RhythmLab!
            </p>

            <div>
                    <p className="Theory-Paragraph-Font"> Descubra a alegria do ritmo com nossa plataforma interativa, projetada para ajudar músicos de todos os níveis a aprimorar seu senso de ritmo e groove. Seja você um baterista, guitarrista, vocalista ou apenas alguém que adora bater junto com a música, temos ferramentas e exercícios personalizados para você. </p>
            </div>

            <div style={{paddingBottom: 40}}>
                    <p className='Titles-font' style={{fontSize:30, opacity: 1}}>O que você encontrará aqui!</p>
            </div>
            
            
            

            <div style={{paddingBottom: 40}}>
                    <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Metrônomo interativo:</text> 
                    <p className="Theory-Paragraph-Font">Pratique com batidas personalizáveis ​para combinar com qualquer andamento ou assinatura de tempo.</p>
            </div>
            
            <div style={{paddingBottom: 40}}>
                    <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Exercícios de ritmo:</text> 
                    <p className="Theory-Paragraph-Font"> Melhore seu ritmo com desafios e exercícios envolventes.</p>
            </div>

            <div>
                    <text className="Titles-font" style={{ fontSize: '23px', opacity: 1 }}>Recursos de aprendizagem:</text> 
                    <p className="Theory-Paragraph-Font"> explore guias e tutoriais para dominar os fundamentos da teoria do ritmo.</p>
            </div>

            <div style={{paddingBottom: 40}}>
                    <p className="Theory-Paragraph-Font">
                        Não importa onde você esteja em sua jornada musical, estamos aqui para ajudá-lo a encontrar seu ritmo e desenvolver a confiança para tocar no tempo com qualquer conjunto ou gravação.
                        Vamos fazer música, uma batida de cada vez!
                        Comece agora!
                    </p>
            </div>

            </div>
            <div className='row-item-container' >

                

                <Card_button 
                            page_name ={'Metrônomo'}
                            url={metronome}
                            image={"../.././public/Hmetronome.jpeg"}
                 />

                <Card_button 
                            page_name ={'Prática'}
                            url={practice}
                            image={"../.././public/Hdumbbell.jpeg"}
                 />

                <Card_button 
                            page_name ={'Teoria'}
                            url={theory}
                            image={"../.././public/Hmusic_theory.jpeg"}
                 />

            </div>

            <footer><div className='footer'> </div></footer>
        </div>
        
      )

}