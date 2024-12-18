import styles from './Logement.module.css'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Collaps from '../../composants/collaps/Collaps';

function Logement() {

    // Récupère l'ID depuis l'URL
    const { id } = useParams();

    // Pour rediriger
    const navigate = useNavigate();

    // Déclare un état pour stocker un logement
    const [logement, setLogement] = useState(null);

    
    // Appel API lors du premier rendu du composant
    useEffect(() => {
      const fetchLogement = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/properties/${id}`);
          
          // Vérifiez si le statut HTTP est une erreur
          if (!response.ok) {
            throw new Error("Logement introuvable");
          }

          const data = await response.json();
          setLogement(data); // Stocker le logement dans l'état
        } catch (err) {
          console.error("Erreur lors de la récupération du logement :", err);
          navigate("/404", { replace: true }); // Redirection vers la page 404
        }
      };

      fetchLogement();
    }, [id, navigate]);

  return (
    <>
      { logement? (
        <div>
          <section className={styles.carroussel}>
          </section>
          <section className={styles.logement}>
          <div className={styles.itemLeft}>
            <div className={styles.left}>
              <h1>{logement.title}</h1>
              <h2>{logement.location}</h2>
            </div>
          </div>
          <div className={styles.itemRight}>
            <div className={styles.right}>
              <h2>{logement.host.name}</h2>
              <img src={logement.host.picture}  alt="picture"/>
            </div>
          </div>
          <div className={styles.itemLeft}>
            <div className={styles.left}>
            <ul>
              {logement.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
            </div>
          </div>
          <div className={styles.itemRight}>
            <div className={styles.right}>
              <h2>Rating : {logement.rating}</h2>
            </div>
          </div>
          <div className={styles.itemLeft}>
            <div className={styles.left}>
              <Collaps title="Description" key="collaps-1">
                <p>{logement.description}</p>
              </Collaps>
            </div>
          </div>
          <div className={styles.itemRight}>
            <div className={styles.right}>
              <Collaps title="Equipments" key="collaps-2">
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
              </Collaps>
            </div>
          </div>
          </section>
        </div>
      ) : ''}
    </>
  );
}
export default Logement