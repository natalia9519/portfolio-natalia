import './Footer.css'
import { Link } from 'react-router-dom';

export function Footer(){

    return(

        <main className='main-footer'>


            <ul>
                <li>
                <a href='https://github.com/natalia9519' className='a-nav'>
                Github
                    </a></li>
                <li><a href='https://www.linkedin.com/in/natalia-de-bustos-garc%C3%ADa-5ba965298/' className='a-nav'>
                LinkedlIn
                    </a></li>
                <li><Link to='./ContactForm' className='a-nav'>
                Contactame
                    </Link></li>

            </ul>
        </main>

    );
}