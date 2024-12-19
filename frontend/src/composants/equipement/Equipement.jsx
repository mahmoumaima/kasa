
import styles from './Equipement.module.css'


function Equipement({equipments}) {
    
  return (
    <>
    <div className={styles.equipements}>
        <ul>
            {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
            ))}
        </ul>
    </div>
    
    </>
  );
}
export default Equipement