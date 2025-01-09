import { render, screen } from '@testing-library/react';
import Rating from '../src/composants/rating/Rating'
import starOn from '../src/assets/starOn.svg';
import starOff from '../src/assets/starOff.svg';

// Fonction utilitaire pour récupérer les étoiles remplies et vides
//const getFilledStars = () => screen.getAllByRole('img', { name: /picture-/ }).filter(star => star.src.includes(starOn));
//const getEmptyStars = () => screen.getAllByRole('img', { name: /picture-/ }).filter(star => star.src.includes(starOff));

describe('Composant Rating', () => {
  test('Afficher une note maximale (5)', () => {
    render(<Rating rate={5} />);
    const images = screen.getAllByRole('img');
    //const getFilledStars = () => screen.getAllByRole('img', { name: /picture-/ }).filter(star => star.src.includes(starOn));
    //const getFilledStars = screen.container.querySelectorAll('.starOn');
    //console.log(getFilledStars.length); // Affiche toutes les images dans la console
    const filledStars = images.filter(star => star.src.includes("src/assets/starOn.svg"));
    console.log(filledStars)
    //expect(filledStars.length).toBe(5);
    expect(images.length).toBe(5);
   // console.log(images.length);
 
  });

  /*test('Afficher une note partielle (3)', () => {
    render(<Rating rate={3} />);
    expect(getFilledStars().length).toBe(3); // 3 étoiles remplies
    expect(getEmptyStars().length).toBe(2); // 2 étoiles vides
  });

  test('Afficher une note nulle (0)', () => {
    render(<Rating rate={0} />);
    expect(getFilledStars().length).toBe(0); // 0 étoiles remplies
    expect(getEmptyStars().length).toBe(5); // 5 étoiles vides
  });

  test('Afficher une note supérieure au maximum (7)', () => {
    render(<Rating rate={7} />);
    expect(getFilledStars().length).toBe(5); // Limité à 5 étoiles remplies
    expect(getEmptyStars().length).toBe(0); // 0 étoiles vides
  });

  test('Afficher une note inférieure au minimum (-3)', () => {
    render(<Rating rate={-3} />);
    expect(getFilledStars().length).toBe(0); // 0 étoiles remplies
    expect(getEmptyStars().length).toBe(5); // 5 étoiles vides
  });

  test('Afficher une note décimale (2.5)', () => {
    render(<Rating rate={2.5} />);
    expect(getFilledStars().length).toBe(2); // 2 étoiles remplies
    expect(getEmptyStars().length).toBe(3); // 3 étoiles vides
  });*/
});
