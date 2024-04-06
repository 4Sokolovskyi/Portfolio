
import "./greeting.scss"

const Greeting = () => {
   return (
      <section className='greeting'>
         <div className="greeting__box">
            <h1 className="greeting__title">Super Frontend Web Developer 3000lvl</h1>
            <div className="greeting__row">
               <a href="#" className="offset">Let's get acquainted</a>
               <a href="#" className="fill">Offset</a>
            </div>
         </div>
      </section>
   )
}

export default Greeting