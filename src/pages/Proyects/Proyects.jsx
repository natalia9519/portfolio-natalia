import React, { useState, useEffect } from "react";
import './Proyects.css'

export function Proyects(){
    const [proyects, setProyects] = useState([]);
   
useEffect(() => {
      fetch('/json/proyects.json')
      .then(response => response.json())
      .then(data => {
        const proyectsArray = Object.values(data.proyects);
        setProyects(proyectsArray);
      })
      .catch(error => console.error('Error al cargar los proyectos', error));
   }, []);

    return(
<main className="main-proyects">
<h1> Proyectos de github</h1>
<section>
    {/* buscador y filtrado */}
</section>
<section className="section-proyects">
              
            {proyects.map(proyects => (
              <div key={proyects.id} className="div-grade">
                <h3 className="h3-tittle">{proyects.tittle}</h3>
                <p className="p-date">{proyects.date}</p>
                <p className="p-link">Link del repositorio: {proyects.link}</p>
                <p className="p-category">{proyects.categories}</p>
              </div>
            ))}
        </section>
</main>


    );



}

  



  