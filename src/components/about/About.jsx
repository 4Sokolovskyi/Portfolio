
import Nameing from "../miniThings/nameing/Nameing"
import "./about.scss"

const About = () => {
   return (
      <section className='about' id="about">
         <div className="about__img">
            <img src="me.jpg" alt="my picture" />
         </div>
         <div className="about__content">
            <Nameing nameing="ABOUT" />
            <h2 className="about__title"><span></span></h2>
            <p className="about__text">Welcome to my portfolio!<br/> Delving into the realm of React, I craft digital experiences that harmonize functionality with aesthetic appeal. With a blend of creativity and technical acumen, I transform ideas into immersive journeys. Let’s embark on a collaborative exploration of innovation and possibility.</p>
         </div>
      </section>
   )
}

export default About