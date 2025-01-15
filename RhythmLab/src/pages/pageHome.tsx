import '.././index.css'
import Card_button from '../components/card'

export default function PageHome()
{
     

    const metronome = '/metronome'
    const practice = '/practice'
    const theory = '/theory'
    
    return (
        
        
        <div className='container' id='container'>
            <div className='header'>
                <div><h1 className='Titles-font'>Welcome to RhythmLab !</h1></div>
                <img src='../.././public/Favicon.png' className='favicon'></img>
            </div>
            <div className='Paragraph'>
            <p className='Titles-font' style={{fontSize:15, opacity: 1}}>
            Bem-vindo ao RhythmLab!
            </p>
            <p>
            Descubra a alegria do ritmo com nossa plataforma interativa, projetada para ajudar músicos de todos os níveis a aprimorar seu senso de ritmo e groove. Seja você um baterista, guitarrista, vocalista ou apenas alguém que adora bater junto com a música, temos ferramentas e exercícios personalizados para você.
            </p>
            <p>
            <br></br>
            <b style={{fontSize:15, opacity: 1, color: 'white'}}>O que você encontrará aqui!</b>
            </p>
            <p>
            <b>Metrônomo interativo:</b> pratique com batidas personalizáveis ​​para combinar com qualquer andamento ou assinatura de tempo.
            </p>
            <p>
            <b>Exercícios de ritmo:</b> melhore seu ritmo com desafios e exercícios envolventes.
            </p>
            <p>
            <b>Recursos de aprendizagem:</b> explore guias e tutoriais para dominar os fundamentos da teoria do ritmo.
            </p>
            <br></br>
            <p>
            Não importa onde você esteja em sua jornada musical, estamos aqui para ajudá-lo a encontrar seu ritmo e desenvolver a confiança para tocar no tempo com qualquer conjunto ou gravação.
            Vamos fazer música, uma batida de cada vez!
            Comece agora!
            </p>
            </div>
            <div className='row-item-container'>

                

                <Card_button 
                            page_name ={'Metronome'}
                            url={metronome}
                            image={"../.././public/Hmetronome.jpeg"}
                 />

                <Card_button 
                            page_name ={'Practice'}
                            url={practice}
                            image={"../.././public/Hdumbbell.jpeg"}
                 />

                <Card_button 
                            page_name ={'Theory'}
                            url={theory}
                            image={"../.././public/Hmusic_theory.jpeg"}
                 />

            </div>

            <footer><div className='footer'> </div></footer>
        </div>
        
      )

}