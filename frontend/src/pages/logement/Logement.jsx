import styles from './Logement.module.css'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Collaps from '../../composants/collaps/Collaps';
import Carrousel from '../../composants/carousel/Carrousel';
import Rating from '../../composants/Rating/rating';
import Tags from '../../composants/tags/Tags';
import Profil from '../../composants/profil/Profil';

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
            <Carrousel images={logement.pictures} />
          </section>
          <section className={styles.logement}>
          <div className={styles.itemLeft}>
            <div className={`${styles.left} ${styles.title}`}>
              <h1>{logement.title}</h1>
              <h2>{logement.location}</h2>
            </div>
          </div>
          <div className={styles.itemRight}>
            <div className={styles.right}>
              <Profil name={logement.host.name} picture={logement.host.picture}/>
            </div>
          </div>
          <div className={styles.itemLeft}>
            <div className={styles.left}>
            <Tags tags={logement.tags}/>
            </div>
          </div>
          <div className={styles.itemRight}>
            <div className={styles.right}>
              <Rating rate={logement.rating}/>
            </div>
          </div>
          <div className={styles.itemLeft}>
            <div className={styles.left}>
              <Collaps title="Description" key="collaps-1">
                <p className={styles.description}>{logement.description}</p>
              </Collaps>
            </div>
          </div>
          <div className={styles.itemRight}>
            <div className={styles.right}>
              <Collaps title="Equipments" key="collaps-2">
                <div className={styles.equipements}>
                        <ul> 
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                </div>
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