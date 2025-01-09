module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Transforme les fichiers JS/JSX avec Babel
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock des fichiers CSS
      '\\.(svg|png|jpg|jpeg|gif)$': 'jest-transform-stub', // Mock des fichiers SVG et autres images
    },
  };
  