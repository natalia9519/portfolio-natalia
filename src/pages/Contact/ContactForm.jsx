import React from "react";
import './Contact.css'
import Bubble2 from '../../components/bubble2.jsx';


export function ContactForm(){
   
   
    return(
<main className="main-contact">

<section className="section-form">
    <h3 className="title-form">Contacta conmigo</h3>
        <form action="" className="form-contact">

            <label htmlFor=""> Nombre </label>
            <input type="text" required className="input-form"/>

            <br />
            <label htmlFor=""> Email </label>
            <input type="email" required className="input-form"/>

            <br />
            <label htmlFor="" > Mensaje </label>
            <textarea type="box-text" required className="input-form"/>
<br />
            <button className="button-contact" >Contactar</button>

        </form>
</section>

            <Bubble2   customStyle={{ top: '10px', left: '5px' }}  />
            <Bubble2    customStyle={{ top: '20px', left: '100px' }} />
            <Bubble2    customStyle={{ top: '30px', left: '150px' }} />
            <Bubble2    customStyle={{ top: '40px', left: '200px' }} />
            <Bubble2   customStyle={{ top: '50px', left: '5px' }}  />
            <Bubble2   customStyle={{ top: '60px', left: '100px' }} />
            <Bubble2    customStyle={{ top: '70px', left: '150px' }} />
            <Bubble2    customStyle={{ top: '80px', left: '200px' }} />
            <Bubble2   customStyle={{ top: '50px', left: '25px' }}  />
            <Bubble2    customStyle={{ top: '90px', left: '100px' }} />
            <Bubble2    customStyle={{ top: '100px', left: '150px' }} />
            <Bubble2    customStyle={{ top: '200px', left: '200px' }} />
            <Bubble2   customStyle={{ top: '250px', left: '5px' }}  />
            <Bubble2   customStyle={{ top: '270px', left: '100px' }} />
            <Bubble2    customStyle={{ top: '280px', left: '150px' }} />
            <Bubble2   customStyle={{ top: '400px', left: '200px' }} />
            <Bubble2   customStyle={{ top: '20px', left: '5px' }}  />
            <Bubble2    customStyle={{ top: '200px', left: '100px' }} />
            <Bubble2    customStyle={{ top: '250px', left: '90px' }} />
            <Bubble2    customStyle={{ top: '400px', left: '80px' }} />
            <Bubble2   customStyle={{ top: '50px', left: '5px' }}  />
            <Bubble2   customStyle={{ top: '200px', left: '10px' }} />
            <Bubble2    customStyle={{ top: '250px', left: '150px' }} />
            <Bubble2    customStyle={{ top: '400px', left: '170px' }} />
            <Bubble2   customStyle={{ top: '50px', left: '5px' }}  />
            <Bubble2    customStyle={{ top: '10px', left: '100px' }} />
            <Bubble2    customStyle={{ top: '250px', left: '60px' }} />
            <Bubble2    customStyle={{ top: '400px', left: '20px' }} />
            <Bubble2   customStyle={{ top: '50px', left: '5px' }}  />
            <Bubble2   customStyle={{ top: '200px', left: '300px' }} />
            <Bubble2    customStyle={{ top: '250px', left: '50px' }} />
            <Bubble2   customStyle={{ top: '400px', left: '30px' }} />



</main>
    );



}