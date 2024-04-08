

import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState } from "react"
import Nameing from "../miniThings/nameing/Nameing"
import "./portfolio.scss"
import Project from "../miniThings/project/Project";

const projectsArr = [
   {
      id: 1,
      title: "Swindler",
      link: "https://priwat-portfolio-domain.online",
      img: "swindler.jpg",
      types: ["Pet projects",],
   },
   {
      id: 2,
      title: "Hoteles",
      link: "https://pavlosokolovskyi-portfolio.com",
      img: "hotele.jpg",
      types: ["Pet projects",],
   },
   {
      id: 3,
      title: "Betonotechnika",
      link: "",
      img: "",
      types: ["Comertial", "In development" ],
   },
]

const Portfolio = () => {
   const [isDeropdownOpen, setDropdownOpen] = useState(false)
   const [dropdownValue, setDropdownValue] = useState("All")
   const changeFilterValue = (type) => {
      setDropdownValue(type)
      setDropdownOpen(false)
   }
   return (
      <section className='portfolio' id="work">
         <Nameing nameing="WORK" />
         <h2 className="portfolio__title">Dive into my universe</h2>
         <div className="portfolio__filter">
            <button
               onClick={() => setDropdownOpen(!isDeropdownOpen)}
               className="portfolio__filter-btn">{dropdownValue}{isDeropdownOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</button>
            {
               isDeropdownOpen ? <div className="portfolio__filter-menu">
                  <button onClick={() => changeFilterValue("All")} className="portfolio__filter-option">{dropdownValue === "All" ? <span>All</span> : "All"}</button>
                  <button onClick={() => changeFilterValue("Comertial")} className="portfolio__filter-option">{dropdownValue === "Comertial" ? <span>Comertial</span> : "Comertial"}</button>
                  <button onClick={() => changeFilterValue("Pet projects")} className="portfolio__filter-option">{dropdownValue === "Pet projects" ? <span>Pet projects</span> : "Pet projects"}</button>
                  <button onClick={() => changeFilterValue("In development")} className="portfolio__filter-option">{dropdownValue === "In development" ? <span>In development</span> : "In development"}</button>
               </div> : null
            }
         </div>
         <div className="portfolio__row">
            {
               projectsArr.map(item => <Project key={item.id} item={item} dropdownValue={dropdownValue}/>)
            }
         </div>
      </section>
   )
}

export default Portfolio