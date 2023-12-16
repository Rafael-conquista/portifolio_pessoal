import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import './navbar.css'

function Navbar() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <nav className="navbar navbar-light shadow navbar_view">
                <div className="container-fluid">
                    <h1 className="menu_title">Portifólio</h1>
                    <TiThMenu className='burguer_menu' onClick={handleShow}/>
                </div>
                <Offcanvas show={show} placement='end' onHide={handleClose} className="offcanvas">
                    <Offcanvas.Header>
                        <h2 className='menu_title'>Bem-vindo ao meu portifólio!</h2>
                        <TiThMenu className='burguer_menu' onClick={handleClose}/>
                    </Offcanvas.Header>
                    <button class="botao">
                        <span>Download CV</span> 
                    </button>
                    <button className='botao'>
                        <span>Entrar em contato</span> 
                    </button>
                </Offcanvas>
            </nav>
            <div className='fine_line'></div>
        </div>
    );
}

export default Navbar;