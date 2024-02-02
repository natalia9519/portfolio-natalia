import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Home } from './pages/Home/Home.jsx';
import { Experience } from './pages/Experience/Experience.jsx';
import { Grades } from './pages/Grades/Grades.jsx';
import { Proyects } from './pages/Proyects/Proyects.jsx';
import { Books } from './pages/Book/Books.jsx'
import { ContactForm } from './pages/Contact/ContactForm.jsx'
import { Welcome } from './pages/Welcome/Welcome.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="home" element={<Home />} />
          <Route path="experiencia" element={<Experience />} />
          <Route path="titulos" element={<Grades />} />
          <Route path="proyectos" element={<Proyects />} />
          <Route path="books" element={<Books />} /> 
          <Route path="contacto" element={<ContactForm />} />
          
        </Routes>
        
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;