import Container from 'react-bootstrap/Container';
import { EscritaAutomatica } from '../utils/EscritaAutomatica';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './welcome.css';
import perfil from '../img/perfil.jpg';

function Welcome() {

    const escrita = { tempo: 120, text: "Olá! Meu nome é", delay: 0 }
    const escrita2 = { tempo: 120, text: " Rafael Conquista!", delay: 1000 }

    return (
        <div className='welcome_container'>
            <Container className='container'>
                <Row>
                    <Col>
                        <div className='imagem_div'>
                            <img src={perfil} alt='vazio' className="tema_imagem" />
                        </div>
                    </Col>
                    <Col className='col-10'>
                        <h1 className='name_title'>
                            <EscritaAutomatica
                                props={escrita}
                            /><span>
                                <EscritaAutomatica
                                    props={escrita2}
                                />
                            </span>

                        </h1>
                        <p id="about">Desenvolvedor Full Stack.</p>
                    </Col>
                </Row>
                <Row>
                    <h1 className='about'>
                        Um pouco sobre mim:
                    </h1>
                </Row>
                <Row>
                    <div id="skills" className='text_about'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Welcome;