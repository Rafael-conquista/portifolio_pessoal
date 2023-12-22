import './projetos.css'
import perfil from '../img/perfil.jpg';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from 'react';

const projects = {
    'Projeto1': 'imagem', 'Projeto2': 'imagem', 'Projeto3': 'imagem', 'Projeto4': 'imagem', 'Projeto5': 'imagem', 'Projeto6': 'imagem', 'Projeto7': 'imagem',
}

function Projetos() {
    const [showProjects, setShowProjects] = useState(true)
    const handleProjects = () => {
        if (!showProjects) {
            setShowProjects(true)
        } else {
            setShowProjects(false)
        }
    }

    return (
        <div id='projetos' className='projects_body'>
            {
                showProjects ? <div onClick={handleProjects} className='expand_button'>
                    <h1>
                        Projetos <span><MdKeyboardArrowDown /></span>
                    </h1>
                </div>
                    :
                    <div onClick={handleProjects} className='expand_button closed_button'>
                        <h1>
                            Projetos <span><MdKeyboardArrowUp /></span>
                        </h1>
                    </div>
            }

            {
                showProjects ?
                    <div className='projects_grid'>
                        {
                            Object.keys(projects).map((key, icon) => {
                                return (
                                    <div className='projects_card'>
                                        <div className='imagem'>
                                            <img src={perfil} alt='vazio' className='slider_image' />
                                        </div>
                                        <p>{key}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                    : <div></div>}


        </div>
    )
}

export default Projetos