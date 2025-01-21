import { render, screen, waitFor } from '@testing-library/react';
import Cards from '../src/composants/card/Cards';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

// Mocking global fetch
global.fetch = jest.fn();

describe('Composant Cards', () => {

  beforeEach(() => {
    // Resetting the mock before each test
    fetch.mockClear();
    // Espionne et mock la fonction
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('doit rendre sans erreur', () => {
    render(
      <Router>
        <Cards />
      </Router>
    );

    // Vérifie que le composant ne rend aucune carte au départ
    const cards = screen.queryAllByRole('link');
    expect(cards).toHaveLength(0);
  });

  it('doit afficher les cartes après la récupération des données', async () => {
    // Mock de la réponse de l'API
    const mockData = [
      {
        id: 1,
        title: 'Carte 1',
        cover: 'http://localhost/images/cover1.jpg'
      },
      {
        id: 2,
        title: 'Carte 2',
        cover: 'http://localhost/images/cover2.jpg'
      }
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(
      <Router>
        <Cards />
      </Router>
    );

    // Attendre que l'appel API se termine et les cartes soient affichées
    await waitFor(() => {
      const cards = screen.getAllByRole('link');
      expect(cards).toHaveLength(2);
    });

    // Vérifier que le titre et l'image de chaque carte sont bien rendus
    expect(screen.getByText('Carte 1')).toBeInTheDocument();
    expect(screen.getByText('Carte 2')).toBeInTheDocument();
    //expect(screen.getAllByText('image cover')).toHaveAttribute('src', 'http://localhost/images/cover1.jpg');
  });

  it('doit afficher un message d\'erreur si l\'API échoue', async () => {
    // Simuler une erreur API
    fetch.mockRejectedValueOnce(new Error('API Error'));

    render(
      <Router>
        <Cards />
      </Router>
    );

    // Attendre que l'erreur se produise et que l'état se mette à jour
    await waitFor(() => {
      // Il n'y a pas de cartes affichées
      const cards = screen.queryAllByRole('link');
      expect(cards).toHaveLength(0);
      // Vérifier qu'une erreur est bien loggée dans la console
      expect(console.error).toHaveBeenCalledWith("Erreur lors de la récupération des cartes:", expect.any(Error));
    });
  });

});
