import './destaques.css'
import Carousel from 'react-bootstrap/Carousel';
import perfil from '../img/perfil.jpg';
import perfil2 from '../img/cloth.png';

function Destaques() {
    return(
        <div className='destaques_body'>
            <h1>Destaques</h1>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <h3>First slide label</h3>
                    <img src={perfil} alt='vazio' className='slider_image'/>   
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <h3>Second slide label</h3>
                    <img src={perfil2} alt='vazio' className='slider_image'/>   
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <h3>Third slide label</h3>
                    <img src={perfil} alt='vazio' className='slider_image'/>   
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Destaques