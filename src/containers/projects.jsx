import React, { useState } from 'react';
import '../styles/projects.css';

const Projects = () => {
  const [currentView, setCurrentView] = useState('all'); // Default view is 'all'

  const projects = [
    { id: 1, title: 'JEWELLERY APP', type: 'apps', backgroundImage: '/assets/jewellery2.png' },
    { id: 2, title: 'BLOOD CONNECT', type: 'apps', backgroundImage: '/assets/bloodconnect.png' },
    { id: 3, title: 'GURUKRUPA A-Z SERVICES', type: 'websites', backgroundImage: '/assets/gurukrupa4.png ' },
    { id: 4, title: 'THV Tech Solutions', type: 'websites', backgroundImage: '/assets/thv.png ' },
    { id: 5, title: 'Fit Genie', type: 'apps', backgroundImage: '/assets/fitgenie3.png' },
    { id: 6, title: 'Other Project 1', type: 'other', backgroundImage: '/assets/other1.png' },
    { id: 7, title: 'VonC', type: 'websites', backgroundImage: '/assets/other2.png' },
  ];

  const filteredProjects = currentView === 'all' ? projects : projects.filter(project => project.type === currentView);

  const handleViewChange = view => {
    setCurrentView(view);
    document.getElementById(view).classList.add('highlight-animation');
    setTimeout(() => {
      document.getElementById(view).classList.remove('highlight-animation');
    }, 500);
  };

  return (
    <div className="projects-container">
      {/* Stylish heading */}
      <h1 className="portfolio-heading">Portfolio</h1>
      <div className="buttons-container">
        <button id="all" className={currentView === 'all' ? 'active' : ''} onClick={() => handleViewChange('all')}>All</button>
        <button id="apps" className={currentView === 'apps' ? 'active' : ''} onClick={() => handleViewChange('apps')}>Apps</button>
        <button id="websites" className={currentView === 'websites' ? 'active' : ''} onClick={() => handleViewChange('websites')}>Websites</button>
        <button id="other" className={currentView === 'other' ? 'active' : ''} onClick={() => handleViewChange('other')}>Other</button>
      </div>
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-background" style={{ backgroundImage: `url(${project.backgroundImage})` }}></div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <button>Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
