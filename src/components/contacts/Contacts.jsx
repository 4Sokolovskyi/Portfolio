

import "./contacts.scss"
import { useEffect, useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import Nameing from "../miniThings/nameing/Nameing";

const Contacts = () => {
   const [error, setError] = useState(false)
   const [success, setSuccess] = useState(false)
   const formRef = useRef()
   const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_j27t55f', 'template_wcvbzb8', formRef.current, 'urFjATdD6hDsoaEPY')
         .then((result) => {
            setSuccess(true)
         }, (error) => {
            setError(true)
         });
   };
   return (
      <section className='contacts' id="contact">
         <div className="contacts__wrapper">
            <div className="contacts__content">
               <Nameing nameing="CONTACT" />
               <h2>Ready to contact?</h2>
            </div>
            <div className="contacts__email email">
               <form onSubmit={sendEmail} ref={formRef}>
                  <input type="text" required placeholder="Name" name="name" />
                  <input type="email" required placeholder="Email" name="email" />
                  <textarea rows={6} placeholder="Message" name="message" />
                  <button>Submit</button>
                  {error && "Error"}
                  {success && "Success"}
               </form>
            </div>
         </div>
      </section>
   )
}

export default Contacts