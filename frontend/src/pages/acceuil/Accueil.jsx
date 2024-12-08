import Cards from "../../composants/card/Cards";
import  style from './Accueil.module.css'
import bandeauImg from '../../assets/bandeau.png'
import Banner from "../../composants/banner/Banner";

function Accueil() {
  return (
    <>
      <section>
        <Banner image={bandeauImg} text="Chez vous, partout et ailleurs" />
      </section>

      <section className={style.gallery}>
        <Cards/>
      </section>
    </>
  );
}
export default Accueil