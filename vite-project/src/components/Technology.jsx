import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Container } from '@mui/material';
import t1 from "../image/t1.webp"
import t2 from "../image/t2.webp"
import t3 from "../image/t3.webp"
import t4 from "../image/t4.webp"
import t5 from "../image/t5.webp"
import t6 from "../image/t6.webp"
import t7 from "../image/t7.webp"
import t8 from "../image/t8.webp"
import t9 from "../image/t9.webp"
import t10 from "../image/t10.webp"
import t11 from "../image/t11.webp"
import t12 from "../image/t12.webp"

const technologies = [
  {
    title: "Iron Man Suit",
    image: t1,
    description: "An advanced armor powered by a miniaturized arc reactor. Capable of flight, super strength, energy blasts, and defensive capabilities.",
  },
  {
    title: "Captain America’s Shield",
    image:t2,
    description: "A shield made from vibranium, indestructible and capable of absorbing kinetic energy. Used both for defense and offense.",
  },
  {
    title: "Thor's Hammer (Mjolnir)",
    image: t3,
    description: "A magical weapon forged in the heart of a dying star. It summons lightning and can only be lifted by those deemed worthy.",
  },
  {
    title: "Arc Reactor",
    image: t4,
    description: "A clean energy source that powers Iron Man’s suit and several of Tony Stark’s inventions. Generates immense energy in a compact form.",
  },
  {
    title: "Loki's Scepter",
    image: t5,
    description: "A scepter wielded by Loki, containing the Mind Stone, which grants control over the minds of others.",
  },
  {
    title: "Black Panther Suit",
    image: t6,
    description: "A suit made from Vibranium that absorbs and redirects kinetic energy. Enhanced agility, speed, and strength.",
  },
  {
    title: "Hulkbuster Armor",
    image: t7,
    description: "A specialized Iron Man suit designed for combat against the Hulk. It features enhanced durability, strength, and various weapons.",
  },
  {
    title: "Ant-Man Suit",
    image: t8,
    description: "A suit designed by Hank Pym, using Pym Particles to shrink the wearer to the size of an ant while retaining strength proportional to size.",
  },
  {
    title: "Ultron",
    image: t9,
    description: "An artificial intelligence created by Tony Stark and Bruce Banner. Ultron possesses immense knowledge, strength, and the ability to evolve.",
  },
  {
    title: "Star-Lord's Element Guns",
    image:t10,
    description: "Star-Lord's weapons designed to manipulate the elements, which can fire different energy blasts with various effects.",
  },
  {
    title: "Vibranium",
    image: t11,
    description: "A rare and powerful metal from Wakanda known for its strength and energy-absorbing capabilities, used to create shields and suits.",
  },
  {
    title: "Tesseract (Space Stone)",
    image: t12,
    description: "A powerful object containing the Space Stone, allowing the user to manipulate space, teleport, and travel across the universe.",
  },
];

const Technologies = () => {
  return (
    <section className="technologies-section">
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Marvel Technologies
        </Typography>
        <Grid container spacing={4}>
          {technologies.map((tech, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={tech.image}
                  alt={tech.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {tech.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {tech.description}
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

export default Technologies;
