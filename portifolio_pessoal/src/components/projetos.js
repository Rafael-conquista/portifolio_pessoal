import './projetos.css'
import projectImage from '../img/no_image.jpg'
import pokeLogo from '../img/pokedex/logo.png'
import myarchLogo from '../img/myarch/logo.jpeg'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { IoMdClose } from "react-icons/io";

const projects = {
    'pokedex': pokeLogo, 'MYARCH': myarchLogo,
}
const projects_desc = {
    'pokedex': {'desc': 'Descubra mais sobre os Pokémon e desafie seus conhecimentos com o PokéChallenge! Este projeto Pokedex foi desenvolvido com o objetivo de aplicar conhecimentos no framework React.js. Além disso, foi essencial para compreender o funcionamento de componentes, hooks e requisições, com ênfase no consumo de APIs.', 'link': 'https://streamable.com/e/iectjp?autoplay=1&muted=1&nocontrols=1', 'deploy': 'https://pokedex-ivory-eta.vercel.app/'},
    'MYARCH': {'desc': 'Este portfólio foi concebido como uma compilação dos projetos do cliente, proporcionando a apresentação organizada do currículo e uma listagem clara de suas realizações. O objetivo é destacar suas habilidades por meio de uma exibição ordenada de projetos concluídos. No desenvolvimento deste portfólio, foram empregadas tecnologias como React, HTML e CSS para garantir uma apresentação sólida e profissional.', 'link': 'https://streamable.com/e/0yp9re?autoplay=1&muted=1&nocontrols=1', 'deploy': 'https://my-arch-portifolio.vercel.app/'},
}

function Projetos() {
    const [showProjects, setShowProjects] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const [project, setProject] = useState('')
    const [image, setImage] = useState(projectImage)
    const handleProjects = () => {
        if (!showProjects) {
            setShowProjects(true)
        } else {
            setShowProjects(false)
        }
    }
    const handleModal = (event) => {
        const id = event.target.id
        setProject(id)
        setImage(projects[id])
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const redirectToProject = () => {
        console.log(projects_desc[project]?.deploy)
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
                                    <div className='projects_card' onClick={handleModal}>
                                        <p>{key.toUpperCase()}</p>
                                        <div className='imagem'>
                                            <img src={projects[key]} alt='vazio' id={key} className='slider_image' />
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    : <div></div>}
            <Modal show={showModal} onHide={handleClose} centered size="xl">
                <Modal.Header>
                    <Modal.Title><h1 className='modal_title'>{project}</h1></Modal.Title>
                    <IoMdClose onClick={handleClose} className='close_button'/>
                </Modal.Header>
                <Modal.Body>
                    <Row className='modal_position'>
                        <Col className='d-flex'>
                            <iframe allow="fullscreen;autoplay" height="100%" src={projects_desc[project]?.link} width="100%" className='projeto_imagem'></iframe>
                        </Col>
                        <Col className='text_desc'>
                            <p>{projects_desc[project]?.desc}</p>
                            
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className='modal_footer'>
                    <div className='buttons'>
                        <div className='botao'>
                            <a href={projects_desc[project]?.deploy} className="" target="blank"><span>Acessar</span></a>
                        </div>
                        <div className='botao' onClick={handleClose}>
                            <span>Fechar</span>
                        </div>
                    </div>
                    
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Projetos