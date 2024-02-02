import React, { useState } from "react";
import './Home.css'
import  natalia  from '../../assets/natalia.jpg'
import logoHtml from '../../assets/html.png'
import logoCss from '../../assets/css.png'
import logoReact from '../../assets/React-icon.png'
import logoGithub from '../../assets/github.png'
import Bubble from '../../components/bubble.jsx';


export function Home(){
    
    const [cambioEstilo, setCambioEstilo] = useState(false);

    const handleCambioEstilo = () => {
      setCambioEstilo(!cambioEstilo);
    };

    return(
        <main className={cambioEstilo ? 'main-home-alt' : 'main-home'}>
            <img src={natalia} alt="Foto Natalia" className="image-home" onClick={handleCambioEstilo}/>
           
            <p className="p-home">¡Hola! Soy Natalia, una desarrolladora web FullStack con experiencia y conocimiento en el sector de la educación y la producción de eventos. Estoy en búsqueda de un nuevo proyecto que me permita aplicar mis habilidades tanto en el front-end como en el back-end. Me interesa colaborar con una empresa que valore el crecimiento profesional y ofrezca un entorno profesional para seguir desarrollándome. </p>


            <Bubble imageSrc={logoHtml} altText="logo Html" customStyle={{ top: '50px', left: '5px' }}  />
            <Bubble imageSrc={logoCss}  altText="logo CSS" customStyle={{ top: '200px', left: '100px' }} />
            {/* <Bubble imageSrc={logoJava}  altText="logo Javascript" /> */}
            <Bubble imageSrc={logoReact}  altText="logo React" customStyle={{ top: '250px', left: '150px' }} />
            <Bubble imageSrc={logoGithub}  altText="logo Github" customStyle={{ top: '400px', left: '200px' }} />
        </main>

    );

}

