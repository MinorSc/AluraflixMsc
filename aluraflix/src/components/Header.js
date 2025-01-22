// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener React Router instalado para la navegación

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>AluraFlix</h1> {/* Puedes cambiarlo por un logo si tienes uno */}
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nuevo-video">Nuevo Video</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
