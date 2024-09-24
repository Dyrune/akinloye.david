// src/components/Gallery.js
import React, { useState } from 'react';
import '../styles/CombinedGalleryAndServices.css'; // Use the combined CSS styles

const Gallery = () => {
  const [sortOption, setSortOption] = useState('all');

  const projects = [
    { title: 'The Hairy', type: 'Clearic Building', image: '/images/pexels-tomfisk-3419308.jpg' },
    { title: 'Balcony', type: 'Residential Building', image: '/images/pexels-rok-romih-1746122-3312663.jpg' },
    { title: 'Jrecked', type: 'Community Building', image: '/images/pexels-federico-orlandi-1423142-3260627.jpg' },
    { title: 'The Hairy', type: 'Clearic Building', image: '/images/pexels-tomfisk-3419308.jpg' },
    { title: 'Balcony', type: 'Residential Building', image: '/images/pexels-rok-romih-1746122-3312663.jpg' },
    { title: 'Jrecked', type: 'Community Building', image: '/images/pexels-federico-orlandi-1423142-3260627.jpg' },
    { title: 'The Hairy', type: 'Clearic Building', image: '/images/pexels-tomfisk-3419308.jpg' },
    { title: 'Balcony', type: 'Residential Building', image: '/images/pexels-rok-romih-1746122-3312663.jpg' },
    { title: 'Jrecked', type: 'Community Building', image: '/images/pexels-federico-orlandi-1423142-3260627.jpg' },
  
  ];

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const filteredProjects = sortOption === 'all' ? projects : projects.filter(p => p.type === sortOption);

  return (
    <div>
      {/* Gallery Section */}
      <div className="gallery-section">
        <aside className="sidebar">
          <h2>Architectural Project Gallery</h2>
          <select className="sort-dropdown" value={sortOption} onChange={handleSortChange}>
            <option value="all">All</option>
            <option value="Clearic Building">Clearic Building</option>
            <option value="Residential Building">Residential Building</option>
            <option value="Community Building">Community Building</option>
          </select>
        </aside>

        <div className="gallery-grid">
          {filteredProjects.map((project, index) => (
            <div className="gallery-item" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="gallery-info">
                <h3>{project.title}</h3>
                <p>Type: {project.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Gallery;
