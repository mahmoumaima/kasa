import Cards from "../../composants/card/Cards";
import  style from './Accueil.module.css'
import bandeauImg from '../../assets/bandeau.png'

function Accueil() {
  return (
    <>
      <section className={style.bandeau}>
        <img src={bandeauImg} alt='bandeau image'/>
        <div className={style.textOverlay}>Chez vous, partout et ailleurs</div>
      </section>

      <section className={style.gallery}>
        <Cards/>
      </section>
    </>
  );
}
export default Accueil