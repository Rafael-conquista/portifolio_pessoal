import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './welcome.css'

function Welcome() {
    return(
        <div className='welcome_container'>
            <Container className='container'> 
                <Row>
                    <Col>
                        <h1>
                            Olá! meu nome é Rafael Conquista!
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span>Desenvolvedor Full Stack</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button>Download CV</button>
                        <button>Entrar em contato</button>
                    </Col>
                </Row>
                <Row>
                    Sobre mim
                </Row>
                <Row>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Row>
            </Container>
        </div>
    )
}

export default Welcome;