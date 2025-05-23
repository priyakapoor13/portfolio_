import React from 'react';
import './mywork.css';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  return (
    <div id="projects" className='mywork'>
      <div className="mywork-title">
        <h1>Projects</h1>
      </div>

      <div className="mywork-container">
        {mywork_data.map((work) => (
          <div className="mywork-card" key={work.id}>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <img src={work.image} alt={work.title} className="mywork-image" />
            </a>
            <h2>{work.title}</h2>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
