import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './welcome.css';
import perfil from '../img/perfil.jpg';

function Welcome() {
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
                            Olá! Meu nome é <span>Rafael Conquista!</span>
                        </h1>
                        <p>Desenvolvedor Full Stack.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='button_space'/>
                    <Col className='welcome_buttons col-10'>
                        <button class="botao">
                            <span>Download CV</span> 
                        </button>
                        <button className='botao'>
                            <span>Entrar em contato</span> 
                        </button>
                    </Col>
                </Row>
                <Row>
                    <h1 className='about'>
                        Sobre mim
                    </h1>
                </Row>
                <Row>
                    <div className='text_about'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Welcome;