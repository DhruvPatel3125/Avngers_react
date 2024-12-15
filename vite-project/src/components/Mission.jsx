import React from 'react';
import './Mission.css'; // Import the CSS file

const Mission = () => {
  const missions = [
    {
        title: "Avengers: The First Avenger",
        image: "https://wallpapers.com/images/hd/the-avengers-vm16xv4a69smdauy.webp", // Replace with actual image URL
        year: 2012,
        description: "The original Avengers unite for the first time to stop Loki from conquering Earth."
      },
    {
      title: "Avengers: Age of Ultron",
      image: "https://wallpapers.com/images/hd/avengers-hd-n46ustf69mbhzv2r.webp", // Replace with actual image URL
      year: 2015,
      description: "The Avengers must team up to stop the destructive Ultron, an artificial intelligence gone rogue."
    },
    {
      title: "Avengers: Infinity War",
      image: "https://wallpapers.com/images/high/avengers-infinity-war-background-n4au4fse87zu48me.webp", // Replace with actual image URL
      year: 2018,
      description: "The Avengers face their greatest threat yet as Thanos, a powerful warlord."
    },
    {
      title: "Avengers: Endgame",
      image: "https://wallpapers.com/images/hd/avengers-endgame-hd-ngu7tap7bvh1r4ns.webp", // Replace with actual image URL
      year: 2019,
      description: "The Avengers work to undo the devastation caused by Thanos in the previous movie and save the universe."
    },
    {
      title: "Avengers: Secret Wars",
      image: "https://wallpapers.com/images/high/comics-avengers-v3ub4x22i1oj4mw3.webp", // Replace with actual image URL
      year: 2026,
      description: "A secret mission unfolds as the Avengers wars a new threat that could destroy the world and save the peoples."
    },
 
  ];

  return (
    <section className="mission-section">
      <div className="container">
        <h2 className="mission-title">Avengers Missions</h2>
        <div className="row">
          {missions.map((mission, index) => (
            <div key={index} className="col-md-4 mission-card">
              <div className="card">
                <img src={mission.image} alt={mission.title} className="card-img" />
                <div className="card-body">
                  <h3 className="card-title">{mission.title}</h3>
                  <p className="card-year">Released: {mission.year}</p>
                  <p className="card-description">{mission.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
