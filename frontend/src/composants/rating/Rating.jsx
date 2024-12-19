import styles from "./Rating.module.css";

function Rating({ rate }) {

    const maxStars = 5;

  return (
    <>
        <div className={styles.stars}>
            {Array.from({ length: maxStars }, (_, index) => (
                <span
                key={index}
                className={`${styles.star} ${index < rate ? styles.filled : ""}`}
                >
                &#9733;
                </span>
             ))}
        </div>
    </>
  );
}

export default Rating;