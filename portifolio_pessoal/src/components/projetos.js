import './projetos.css'
import perfil from '../img/perfil.jpg';
import projectImage from '../img/no_image.jpg'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { IoMdClose } from "react-icons/io";

const projects = {
    'Projeto1': projectImage, 'Projeto2': projectImage, 'Projeto3': projectImage, 'Projeto4': projectImage, 'Projeto5': projectImage, 'Projeto6': projectImage, 'Projeto7': projectImage,
}
const projects_desc = {
    'Projeto1': 'Descição completa do projeto, onde será adaptado de forma dinâmica', 'Projeto2': 'batata completa do projeto, onde será adaptado de forma dinâmica', 'Projeto3': 'Descição completa do projeto, onde será adaptado de forma dinâmica', 'Projeto4': 'Descição completa do projeto, onde será adaptado de forma dinâmica', 'Projeto5': 'Descição completa do projeto, onde será adaptado de forma dinâmica', 'Projeto6': 'Descição completa do projeto, onde será adaptado de forma dinâmica', 'Projeto7': 'Descição completa do projeto, onde será adaptado de forma dinâmica',
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
                                        <div className='imagem'>
                                            <img src={projects[key]} alt='vazio' id={key} className='slider_image' />
                                        </div>
                                        <p>{key}</p>
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
                    <Row>
                        <Col>
                            <p>{projects_desc[project]}</p>
                        </Col>
                        <Col>
                            <img src={image} alt='vazio' className='slider_image' />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className='teste'>
                    <div className='botao' onClick={handleClose}>
                        <span>Acessar</span>
                    </div>
                    <div className='botao' onClick={handleClose}>
                        <span>Fechar</span>
                    </div>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Projetos