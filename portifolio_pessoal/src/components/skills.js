import './skills.css'
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiVitest } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiSqlalchemy } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaFlask } from "react-icons/fa";
import { SiPytest } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import { SiKubernetes } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { useState } from 'react';


const skills_list = {
    'React.js': <FaReact/>, 'CSS3':<FaCss3Alt/>, 'HTML5':<FaHtml5/>, 'Bootstrap': <FaBootstrap/>, 'Node.js':<FaNode/>, 
    'Typescript': <SiTypescript/>,'Jest and Vitest': <SiVitest/>, 'Mongoose': <SiMongoose/>, 'Sequelize':<SiSequelize/>,
    'Python': <FaPython/>, 'SqlAlchemy':<SiSqlalchemy/>, 'FastApi': <SiFastapi/>, 'Flask':<FaFlask/>, 'Pytest':<SiPytest/>,
    'Python Scrapping':<TbBrandPython/>,'PostgreSql': <BiLogoPostgresql/>, 'MySql': <SiMysql/>, 'MongoDB': <SiMongodb/>,
    'Docker':<GrDocker/>, 'Kubernets': <SiKubernetes/>, 'github': <IoLogoGithub/>
}

function Skills() {
    const [showSkill, setShowSkill] = useState(true)
    const handleSkill = () => {
        if(!showSkill){
            setShowSkill(true)
        }else{
            setShowSkill(false)
        }
    }
    return(
        <div>
            <div className='skills_body'>

                {
                    showSkill ? <div onClick={handleSkill} className='expand_button'>
                    <h1>
                        Habilidades ▲
                    </h1>
                    </div>
                    : 
                    <div onClick={handleSkill} className='expand_button'>
                    <h1>
                        Habilidades ▼
                    </h1>
                </div>
                } 

                
                {
                    showSkill ? 
                    <div className='skills_grid'>  
                    {
                    Object.keys(skills_list).map((key,icon) => {
                        return(
                            <div className='icon_card'>
                                <span>{key}</span>
                                <div className='icon'>
                                    {skills_list[key]}
                                </div>
                                
                            </div> 
                        )
                    })
                    }
                    
                 </div>
                : <div></div>} 
                
                
            </div>
        </div>
        
    )
}


export default Skills;