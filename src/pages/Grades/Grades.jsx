import React, { useState, useEffect } from "react";
import './Grades.css'

export function Grades(){
  const [grades, setGrades] = useState([]);

  
    useEffect(() => {
      fetch('/json/titulos.json')
      .then(response => response.json())
      .then(data => {
        const gradesArray = Object.values(data.grades);
        setGrades(gradesArray);
      })
      .catch(error => console.error('Error al cargar las titulaciones', error));
   }, []);
   
   return(
      <main className="main-grades">

<h1>Titulaciones obtenidas</h1>
<section>
    {/* buscador y filtrado */}
</section>
<section className="section-grades">
    

          
            {grades.map(grades => (
              <div key={grades.id} className="div-grade">
                <h3 className="h3-tittle">{grades.tittle}</h3>
                <p className="p-date">{grades.date}</p>
                <p className="p-institute">Institución: {grades.institute}</p>
                <p className="p-category">{grades.categories}</p>
              </div>
            ))}
        </section>
      </main>
   );
}


  