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
                        <li className="menu_item"><a href="#" className="menu_link">about</a></li>
                        <li className="menu_item"><a href="#" className="menu_link">projetos</a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer;