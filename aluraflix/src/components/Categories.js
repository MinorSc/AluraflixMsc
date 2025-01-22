// src/components/Categories.js
import React from 'react';

function Categories() {
  const categories = ["Frontend", "Backend", "Innovación", "Gestión"];

  return (
    <section className="categories">
      <h3>Categorías</h3>
      <div className="category-list">
        {categories.map(category => (
          <div key={category} className="category-item">
            <h4>{category}</h4>
            {/* Aquí podrías agregar imágenes o enlaces a las categorías */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
