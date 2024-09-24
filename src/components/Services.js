import React, { useState } from 'react';
import '../styles/Services.css'; 

const Services = () => {
  const [sortOption, setSortOption] = useState('Urban Design');
  const services = [
    { title: 'Masterplanning', type: 'Urban Design', description: 'Comprehensive urban planning...', video: '/animations/Architecture.mp4' },
    { title: 'Architecture', type: 'Building Design', description: 'Architectural design services...', video: '/animations/Building%20designs.mp4' }, 
    { title: 'Interior Design', type: 'Interior', description: 'Creative interior solutions...', video: '/animations/Landscape.mp4' },
    { title: 'Landscape Architecture', type: 'Landscape', description: 'Green space planning...', video: '/animations/Masterplanning.mp4' },
    { title: 'Project Management', type: 'Management', description: 'Effective project execution...', video: '/animations/video.mp4' },
  ];

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const filteredServices = services.filter(service => service.type === sortOption);

  return (
    <div className="services-container">
      <aside className="services-sidebar">
        <h2 className="sidebar-title">Our Services</h2>
        <select className="sort-dropdown" value={sortOption} onChange={handleSortChange}>
          <option value="Urban Design">Urban Design</option>
          <option value="Building Design">Building Design</option>
          <option value="Interior">Interior</option>
          <option value="Landscape">Landscape</option>
          <option value="Management">Management</option>
        </select>
      </aside>

      <div className="services-grid">
        {filteredServices.map((service, index) => (
          <div className="service-item" key={index}>
            <video 
              src={service.video} 
              className="service-video"
              autoPlay 
              loop 
              muted 
              style={{ display: 'block', width: '100%', height: 'auto' }} // Display like an image
            >
              Your browser does not support the video tag.
            </video>
            <div className="service-info">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
