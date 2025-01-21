import { render, screen } from '@testing-library/react';
import Banner from '../src/composants/banner/Banner'; // Assure-toi que le chemin est correct
import '@testing-library/jest-dom'; // Pour avoir accès aux matchers comme `toBeInTheDocument`

describe('Banner Component', () => {

   const imageSrc = 'bandeau.png';
   const textValue = 'Chez vous, partout et ailleurs';
  
  it('affiche une image avec la bonne source', () => {
    render(<Banner image={imageSrc} text={textValue} />);

    // Vérifie que l'image avec la source correcte est dans le document
    const imgElement = screen.getByAltText('bandeau image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', imageSrc);
  });

  it('affiche le texte si une valeur de texte est fournie', () => {
    render(<Banner image={imageSrc} text={textValue} />);

    // Vérifie que le texte est présent dans le document
    const textElement = screen.getByText(textValue);
    expect(textElement).toBeInTheDocument();
  });

  it('ne rend pas le texte si aucune valeur de texte n\'est fournie', () => {
    render(<Banner image={imageSrc} text={undefined} />);

    // Vérifie que le texte n'est pas rendu
    const textElement = screen.queryByText(/.+/); // Utilise une regex pour vérifier l'absence de texte
    expect(textElement).not.toBeInTheDocument();
  });

  it('ne rend pas le texte si la prop "text" est une chaîne vide', () => {
    render(<Banner image={imageSrc} text={''} />);

    // Vérifie que le texte n'est pas rendu si la prop "text" est une chaîne vide
    const textElement = screen.queryByText(/.+/);
    expect(textElement).not.toBeInTheDocument();
  });

});
