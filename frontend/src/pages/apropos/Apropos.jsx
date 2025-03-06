import styles from './Apropos.module.css'
import bandeauImg from '../../assets/bandeau-apropos.png'
import Banner from '../../composants/banner/Banner';
import Collaps from '../../composants/collaps/Collaps';

function Apropos() {
  return (
    <>
      <section>
        <Banner image={bandeauImg} />
      </section>
      <section className={styles.collapsList}>
        <Collaps title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Collaps>
        <Collaps title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collaps>
        <Collaps title="Service">
          <p>La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
        </Collaps>
        <Collaps title="Sécurité">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collaps>
      </section>
   
    </>
  );
}
export default Apropos