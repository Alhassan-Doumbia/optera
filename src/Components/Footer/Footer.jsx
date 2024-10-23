import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo ou Nom de l'application */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">OPTERA</h2>
        </div>
        {/* Liens */}
        <div className="flex gap-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-white">À propos</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          <a href="#" className="text-gray-400 hover:text-white">Politique de confidentialité</a>
        </div>

        {/* Informations légales ou droits d'auteur */}
        <div>
          <p className="text-gray-500">© 2024 OPTERA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
