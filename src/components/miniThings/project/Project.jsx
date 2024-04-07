
import { FaImage } from "react-icons/fa";
import { MdBuildCircle } from "react-icons/md";
import "./project.scss"

const Project = ({item, dropdownValue}) => {
   const [title, link, img, types] = [item.title, item.link, item.img, item.types]
   if (dropdownValue === "All" || types.includes(dropdownValue)) return (
      <a target="_blank" href={link === "" ? null : link} className='project'>
         {
            types.includes("In development") ? <div className="project__div"><MdBuildCircle /></div> :
            img !== "" ? <img src={img} alt="picture of project"/> : <div className="project__div"><FaImage /></div>
         }
         {
            types.includes("In development") ? <><h2>{title}</h2><span>In development</span></> : <div className="project__hover">
               <h2>{title}</h2>
            </div>
         }
      </a>
   )
}

export default Project