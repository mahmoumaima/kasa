import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import  style from './Cards.module.css'

function Cards() {

    // Déclare un état pour stocker les cartes
    const [cards, setCards] = useState([]);

    // Appel API lors du premier rendu du composant
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/properties');
                if (!response.ok) {
                    throw new Error('Erreur réseau lors de la récupération des cartes');
                }
                const data = await response.json(); // Convertir la réponse en JSON
                setCards(data); // Stocker les cartes dans l'état
            } catch (error) {
                // Affciher l'erreur dans la console
                console.error("Erreur lors de la récupération des cartes:", error);
            }
        };
            
        fetchCards();
    }, []);

  return (
    <>
        {cards.map((card, index) => (
            <Link to={`/logement/${card.id}`} key={index}>
                <article className={style.card}>
                    <img src={card.cover} alt="image cover" className={style.cardImg}/>
                    <div className={style.shadow}></div>
                    <h1 className={style.cardTitle}>{card.title}</h1>
                </article>
            </Link>
        ))}
    </>
  );
}
export default Cards