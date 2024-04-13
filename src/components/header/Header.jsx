

import { useState } from "react"
import Hamburger from 'hamburger-react'
import "./header.scss"

const Header = () => {
   const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false)
   return (
      <div className='header'>
         <button className={isBurgerMenuOpen ? "header__burger-menu open" : "header__burger-menu"}>
            <nav className="header__content">
               <div className="header__nav">
                  <a href="/#about" >ABOUT</a>
                  <a href="/#work" >WORK</a>
                  <a target="_blanc" href="https://linkedin.com/in/pavlo-sokolovskyi-078958280" >LINKEDIN</a>
                  <a target="_blanc" href="https://github.com/4Sokolovskyi" >GITHUB</a>
                  {/* <a href="/#services" >SERVICES</a> */}
               </div>
               <div className="header__burger">
                  <Hamburger toggled={isBurgerMenuOpen} toggle={setBurgerMenuOpen} />
               </div>
               <div className="header__logo">
                  <a href="/" data-replace="PORTFOLIO"><span>PORTFOLIO</span></a>
               </div>
               <div className="header__contact">
                  <a href="/#contact">Hit me up!</a>
               </div>
            </nav>
            {
               isBurgerMenuOpen ? <div className="header__menu">
                  <a onClick={() =>setBurgerMenuOpen(false)} href="/#about" >ABOUT</a>
                  <a onClick={() =>setBurgerMenuOpen(false)} href="/#work" >WORK</a>
                  <a onClick={() =>setBurgerMenuOpen(false)} target="_blanc" href="https://linkedin.com/in/pavlo-sokolovskyi-078958280" >LINKEDIN</a>
                  <a onClick={() =>setBurgerMenuOpen(false)} target="_blanc" href="https://github.com/4Sokolovskyi" >GITHUB</a>
                  {/* <a onClick={() =>setBurgerMenuOpen(false)} href="/#services" >SERVICES</a> */}
               </div> : <></>
            }
         </button>
      </div>
   )
}

export default Header