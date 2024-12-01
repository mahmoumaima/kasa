import { Link } from "react-router-dom";
import logoImage from '../../assets/logo.png';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {

  const location = useLocation();
   // Détermine si la route active est "/accueil" ou "/apropos"
   const isActiveAccueil = location.pathname === '/';
   const isActiveApropos = location.pathname === '/apropos';

  return (
    <>
       <img src={logoImage} className='logo' alt='logo'/>
       <nav>
        <ul>
          <li>
              <Link to="/" className={isActiveAccueil ? styles.visited : ''}>Accueil</Link>
            </li>
            <li>
              <Link to="/apropos" className={isActiveApropos ? styles.visited : ''}>À propos</Link>
            </li>
        </ul>
       </nav>
    </>
  )
}

export default Header