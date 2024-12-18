import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Container } from '@mui/material';
// import './Mission.css'; // Custom CSS for additional styling
import ma from "../image/m1.webp";
import m2 from '../image/m2.webp';
import m3 from '../image/m3.webp';
import m4 from '../image/m4.webp';
import m5 from '../image/m5.webp';

const Mission = () => {
  const missions = [
    {
      title: "Avengers: The First Avenger",
      image: ma,
      year: 2012,
      description: "The original Avengers unite for the first time to stop Loki from conquering Earth."
    },
    {
      title: "Avengers: Age of Ultron",
      image: m2,
      year: 2015,
      description: "The Avengers must team up to stop the destructive Ultron, an artificial intelligence gone rogue."
    },
    {
      title: "Avengers: Infinity War",
      image: m3,
      year: 2018,
      description: "The Avengers face their greatest threat yet as Thanos, a powerful warlord."
    },
    {
      title: "Avengers: Endgame",
      image: m4,
      year: 2019,
      description: "The Avengers work to undo the devastation caused by Thanos in the previous movie and save the universe."
    },
    {
      title: "Avengers: Secret Wars",
      image: m5,
      year: 2026,
      description: "A secret mission unfolds as the Avengers wars a new threat that could destroy the world and save the peoples."
    },
  ];

  return (
    <section className="mission-section">
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Avengers Missions
        </Typography>
        <Grid container spacing={4}>
          {missions.map((mission, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={mission.image}
                  alt={mission.title}
                  sx={{ height: 200 }}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {mission.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Released: {mission.year}
                  </Typography>
                  <Typography variant="body2">
                    {mission.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Mission;
