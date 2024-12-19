import { useState } from "react";
import styles from "./Carrousel.module.css";
import leftArrow from "../../assets/left.svg";
import rightArrow from "../../assets/right.svg";

function Carrousel({ images }) {

  const [imageIndex, setImageIndex] = useState(0);

  const increment = () => {
    setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const decrement = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <div className={styles.images}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`picture-${index}`}
            className={index === imageIndex ? styles.imageDispalyOn : styles.imageDispalyOff}
          />
        ))}
      </div>
      <div className={styles.actions}>
        <button onClick={decrement}>
          <img src={leftArrow} alt="Flèche gauche" className={styles.arrow} />
        </button>
        <button onClick={increment}>
          <img src={rightArrow} alt="Flèche droite" className={styles.arrow} />
        </button>
      </div>
      <div className={styles.count}>
        <p>{imageIndex+1}/{images.length}</p>
      </div>
    </>
  );
}

export default Carrousel;
