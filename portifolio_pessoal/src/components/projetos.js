import './projetos.css'
import perfil from '../img/perfil.jpg';

const projects = {
    'Projeto1': 'imagem', 'Projeto2':'imagem', 'Projeto3':'imagem', 'Projeto4': 'imagem', 'Projeto5':'imagem','Projeto6':'imagem', 'Projeto7':'imagem',
}

function Projetos() {
    return(
        <div className='projects_body'>
            <h1>Outros projetos:</h1>

            <div className='projects_grid'>  
                    {
                    Object.keys(projects).map((key,icon) => {
                        return(
                            <div className='projects_card'>
                                <div className='imagem'>
                                    <img src={perfil} alt='vazio' className='slider_image'/>   
                                </div>
                                <p>{key}</p>
                            </div> 
                        )
                    })
                    }
                    
            </div>
        </div>
    )
}

export default Projetos