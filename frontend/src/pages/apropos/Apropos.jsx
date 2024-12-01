import styles from './Apropos.module.css'
import bandeauImg from '../../assets/bandeau-apropos.png'

function Apropos() {
  return (
    <>
      <section className={styles.bandeauApropos}>
        <img src={bandeauImg} alt='bandeau image'/>
      </section>
   
    </>
  );
}
export default Apropos