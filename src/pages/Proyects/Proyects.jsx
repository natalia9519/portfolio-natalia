import React, { useState, useEffect } from "react";
import './Proyects.css'
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import { Link } from "react-router-dom";

export function Proyects(){
    const [proyects, setProyects] = useState([]);
    const [proyectsFiltrados, setProyectsFiltrados] = useState([]);

    //Llamar al json
useEffect(() => {
      fetch('/json/proyects.json')
      .then(response => response.json())
      .then(data => {
        const proyectsArray = Object.values(data.proyects);
        setProyects(proyectsArray);
      })
      .catch(error => console.error('Error al cargar los proyectos', error));
   }, []);

   //Buscar por categoria
   const handleCategoryFilter = (selectedCategory) => {
    if (selectedCategory === 'Todos') {
      setProyectsFiltrados(proyects); // Mostrar todos los proyectos si se selecciona 'Todos'
    } else {
      const filteredProyects = proyects.filter(proyecto =>
        proyecto.categories.includes(selectedCategory)
      );
      setProyectsFiltrados(filteredProyects); // Mostrar solo los proyectos de la categoría seleccionada
    }
  };

  const [solapaVisible, setSolapaVisible] = useState(false);

  function toggleTab() {
    setSolapaVisible(!solapaVisible);
  }


// filtrar en el buscador
   const handleSearch = (searchTerm) => {
   const proyectsFiltrados = proyects.filter(proyects =>
      proyects.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProyectsFiltrados(proyectsFiltrados);
  };



    return(
        <main className="main-proyects">
        <h1 className="title-proyects"> Proyectos de github</h1>
        <section className="section-search">
        
        <div className="filter-bar">
                  <button onClick={toggleTab} className="btn-filter-bar"> Lenguajes </button>
          {solapaVisible && (
            <div id="solapa" className="solapa">
              <label><input type="checkbox" onChange={() => handleCategoryFilter('Todos')} /> Todos </label>
                      <label><input type="checkbox" onChange={() => handleCategoryFilter('HTML')}/> Html </label>
                      <label><input type="checkbox" onChange={() => handleCategoryFilter('CSS')}/> Css </label>
                      <label><input type="checkbox" onChange={() => handleCategoryFilter('JavaScript')}/> Javascript</label>
                      <label><input type="checkbox" onChange={() => handleCategoryFilter('React')}/> React </label>
                      <label><input type="checkbox" onChange={() => handleCategoryFilter('Api')}/> Api </label>
                      <label><input type="checkbox" onChange={() => handleCategoryFilter('Vite')}/> Vite </label>
                    </div>
          )}
        </div>


          <SearchBar onSearch={handleSearch} />

        </section>
        <section className="section-proyects">
                {proyectsFiltrados.length > 0 ? (
                      proyectsFiltrados.map((proyecto) => (
                        <div key={proyecto.id} className="div-grade">
                          <h3 className="h3-title">{proyecto.title}</h3>
                          <p className="p-date">{proyecto.date}</p>
                          <p className="p-link">Link del repositorio: <Link to={proyects.link}>Pincha aquí</Link></p>
                        </div>
                      ))
                    ) : (
                    proyects.map(proyects => (
                      <div key={proyects.id} className="div-grade">
                        <h3 className="h3-title">{proyects.title}</h3>
                        <p className="p-date">{proyects.date}</p>
                        <p className="p-link">Link del repositorio:  <Link to={proyects.link}>Pincha aquí</Link> </p>
                      </div>
                    ))
                    )}
                </section>
        </main>


    );



}

  



  