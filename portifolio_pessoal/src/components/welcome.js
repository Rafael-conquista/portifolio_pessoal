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
                        Sou um engenheiro de Software apaixonado por desafios. Minha jornada é impulsionada pela busca contínua por conhecimento e aprimoramento. Com habilidades tanto em Backend(Python, Node.js e Typescript) e Frontend(React, Javascript), estou preparado para enfrentar projetos complexos e exigentes. Minha paixão por aprender novas tecnologias me mantém atualizado e pronto para contribuir com soluções inovadoras e escaláveis.

                        Com um compromisso sólido com o desenvolvimento pessoal e profissional, busco constantemente novos desafios para crescer e agregar valor, trazendo minha experiência e dedicação para cada projeto que abraço. Estou entusiasmado para fazer a diferença e enfrentar os desafios que o mundo da tecnologia apresenta.
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Welcome;