import styles from './Footer.module.css';
import logoImage from '../../assets/logo-footer.png';

function Footer() {
  return (
    <>
      <div className={styles.copyright}>
        <img src={logoImage} className='logo-footer' alt='logo'/>
        <p>&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </>
  )
}

export default Footer