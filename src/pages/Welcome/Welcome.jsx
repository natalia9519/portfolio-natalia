import React from "react";
import { Link } from 'react-router-dom';
import './Welcome.css'



export function Welcome(){

    return(
    <main className="main-welcome">
        <Link to='./home'>
        <section className="section-welcome">
           <h1 className="text-welcome">BIENVENIDOS</h1>
        </section>
        </Link>
        

    </main>
);
} 