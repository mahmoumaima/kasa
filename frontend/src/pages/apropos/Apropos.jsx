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
        <Collaps title="Click to Expand 1" key="collaps-1">
          <p>This is the content of the collapsible section. You can put any HTML here.</p>
        </Collaps>
        <Collaps title="Click to Expand 2" key="collaps-2">
          <p>This is the content of the collapsible section. You can put any HTML here.</p>
        </Collaps>
        <Collaps title="Click to Expand 3" key="collaps-3">
          <p>This is the content of the collapsible section. You can put any HTML here.</p>
        </Collaps>
        <Collaps title="Click to Expand 4" key="collaps-4">
          <p>This is the content of the collapsible section. You can put any HTML here.</p>
        </Collaps>
        <Collaps title="Click to Expand 5" key="collaps-5">
          <p>This is the content of the collapsible section. You can put any HTML here.</p>
        </Collaps>
        <Collaps title="Click to Expand 6" key="collaps-6">
          <p>This is the content of the collapsible section. You can put any HTML here.</p>
        </Collaps>
      </section>
   
    </>
  );
}
export default Apropos