import './Navigation.css'
import { Link } from 'react-router-dom';

export function Navigation() {

    return (

        <main className='main-header'>
            <section className='section-header'>
            <Link to='./' className='a-nav'><p>Natalia de Bustos García</p></Link>
                <div>

                </div>
            </section>
            <nav className='nav-header'>
                <ul>
                    <li>
                        <Link to='./titulos' className='a-nav'>
                            Titulos
                        </Link></li>
                    <li><Link to='./proyectos' className='a-nav'>
                        Proyectos
                    </Link></li>
                    <li><Link to='./experiencia' className='a-nav'>
                        Experiencia
                    </Link></li>
                    <li><Link to='./books' className='a-nav'>
                        Libros
                    </Link></li>
                </ul>
            </nav>
        </main>

    );
}