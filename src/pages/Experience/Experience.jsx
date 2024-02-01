import React, { useState, useEffect } from "react";
import './Experience.css'

export function Experience(){
    const [experience, setExperience] = useState([]); 
    
    useEffect(() => {
      fetch('/json/experience.json')
      .then(response => response.json())
      .then(data => {
        const experienceArray = Object.values(data.experience);
        setExperience(experienceArray);
      })
      .catch(error => console.error('Error al cargar la experience', error));
    }, []);


    return(
        <main className="main-experience">

        <h1>Experiencia profesional</h1>
        <section>
            {/* buscador y filtrado */}
        </section>
        <section className="section-experience">
            
        
                  
                    {experience.map(experience => (
                      <div key={experience.id} className="div-grade">
                        <h3 className="h3-tittle">{experience.tittle}</h3>
                        <p className="p-date">{experience.date}</p>
                        <p className="p-company">Compañia: {experience.company}</p>
                        <p className="p-description">{experience.description}</p>
                      </div>
                    ))}
                </section>
              </main>

    );



}