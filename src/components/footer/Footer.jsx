
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./footer.scss"

const Footer = () => {
   return (
      <div className='footer'>
         <a href="https://linkedin.com/in/pavlo-sokolovskyi-078958280" target="_blanc"><FaLinkedin/></a>
         <a href="https://github.com/4egoPoint" target="_blanc"><FaGithub/></a>
         <a href="https://www.instagram.com/q3.wwe._" target="_blanc"><FaInstagram/></a>
      </div>
   )
}

export default Footer