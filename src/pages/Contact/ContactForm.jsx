import React from "react";
import './Contact.css'

export function ContactForm(){
   
   
    return(
<main className="main-contact">

<section className="section-form">
    <h3>Contacta conmigo</h3>
        <form action="" className="form-contact">

            <label htmlFor=""> Nombre </label>
            <input type="text" required/>


            <label htmlFor=""> Email </label>
            <input type="text" required/>


            <label htmlFor=""> Mensaje </label>
            <input type="text" required/>

            <button className="button-contact">Contactar</button>

        </form>
</section>

</main>
    );



}