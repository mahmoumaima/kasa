import { Routes, Route } from 'react-router-dom';

// Composants
import Header from './composants/header/Header';
import Footer from './composants/footer/Footer';

// Pages
import Accueil from './pages/acceuil/Accueil';
import Apropos from './pages/apropos/Apropos';
import Logement from './pages/logement/Logement';

// Page d'erreur
import Error404 from './pages/error/Error404';


function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App