import React from "react";
import './footer.css'
import { 
    SiInstagram, 
    SiGithub,
    SiGmail
} from "react-icons/si";
function Footer(){
    return(
        <>
            <div className="body"> 
                <footer className="footer">
                    <ul className="social_icons">
                        <li className="social_list"><a href="#" className="link"></a><SiInstagram/></li>
                        <li className="social_list"><a href="#" className="link"></a><SiGithub/></li>
                        <li className="social_list"><a href="#" className="link"></a><SiGmail/></li>
                    </ul>
                    <ul className="menu">
                        <li className="menu_item"><a href="#" className="menu_link">home</a></li>
                        <li className="menu_item"><a href="#about" className="menu_link">Sobre mim</a></li>
                        <li className="menu_item"><a href="#skills" className="menu_link">Habilidades</a></li>
                        <li className="menu_item"><a href="#destaques" className="menu_link">Destaques</a></li>
                        <li className="menu_item"><a href="#projetos" className="menu_link">Projetos</a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer;