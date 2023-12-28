import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoMdDownload } from "react-icons/io";
import './navbar.css'
import curriculo_rafael_conquista from '../img/curriculo.pdf';

function Navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const iniciarDownload = () => {
        const link = document.createElement('a');
        link.href = curriculo_rafael_conquista;
        link.setAttribute('download', ''); // Isso força o download ao invés de abrir o arquivo no navegador
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <nav className="navbar navbar-light shadow navbar_view">
                <div className="container-fluid">
                    <h1 className="menu_title" href="#"><a href="#" className="menu_link">Portifólio</a></h1>
                    <TiThMenu className='burguer_menu' onClick={handleShow} />
                </div>
                <Offcanvas show={show} placement='end' onHide={handleClose} className="offcanvas">
                    <Offcanvas.Header>
                        <h2 className='menu_title'>Bem-vindo ao meu portifólio!</h2>
                        <TiThMenu className='burguer_menu' onClick={handleClose} />
                    </Offcanvas.Header>
                    <ul>
                        <li className="menu_item_nav" onClick={handleClose}><a href="#" className="menu_link">Início</a></li>
                        <li className="menu_item_nav" onClick={handleClose}><a href="#about" className="menu_link">Sobre mim</a></li>
                        <li className="menu_item_nav" onClick={handleClose}><a href="#skills" className="menu_link">Habilidades</a></li>
                        <li className="menu_item_nav" onClick={handleClose}><a href="#projetos" className="menu_link">Projetos</a></li>
                        <li className="menu_item_nav" onClick={handleClose}><a href="#footer" className="menu_link">Entrar em contato</a></li>
                        <li className="menu_item_nav" onClick={iniciarDownload} ><a className="menu_link">Baixar meu currículo <IoMdDownload /></a></li>
                    </ul>
                </Offcanvas>
            </nav>
            <div className='fine_line'></div>
        </div>
    );
}

export default Navbar;