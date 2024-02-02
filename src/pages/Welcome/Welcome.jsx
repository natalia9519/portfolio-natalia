import React from "react";
import { Link } from 'react-router-dom';
import './Welcome.css'



export function Welcome(){

    return(
    <main className="main-welcome">
        <Link to='./home'>
        <section className="section-welcome">
           <h1 className="text-welcome"><span>B</span><span>I</span><span>E</span><span>N</span><span>V</span><span>E</span><span>N</span><span>I</span><span>D</span><span>O</span><span>S</span></h1>
        </section>
        </Link>
        

    </main>
);
} 