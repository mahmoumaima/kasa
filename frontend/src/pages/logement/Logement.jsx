import styles from './Logement.module.css'
import { useParams } from 'react-router-dom';

function Logement() {

    // Récupère l'ID depuis l'URL
    const { id } = useParams();

  return (
    <>
      <section className={styles.logement}>
        <h1>Logement Id : {id}</h1>
      </section>
   
    </>
  );
}
export default Logement