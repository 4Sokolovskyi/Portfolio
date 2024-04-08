
import "./greeting.scss"

const Greeting = () => {
   return (
      <section className='greeting'>
         <div className="greeting__box">
            <h1 className="greeting__title">Frontend React Developer</h1>
            <div className="greeting__row">
               <a href="/#about" className="offset">Let's get acquainted</a>
               <a href="/#work" className="fill">Projects</a>
            </div>
         </div>
      </section>
   )
}

export default Greeting