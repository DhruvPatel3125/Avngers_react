import React from 'react';
import './Technologies.css'; // Import the CSS for styling

const technologies = [
  {
    title: "Iron Man Suit",
    image: "https://wallpapers.com/images/high/iron-man-suit-4096-x-2304-wallpaper-a1kndn90m9im4d43.webp", // Replace with actual image URL
    description: "An advanced armor powered by a miniaturized arc reactor. Capable of flight, super strength, energy blasts, and defensive capabilities.",
  },
  {
    title: "Captain America’s Shield",
    image: "https://wallpapers.com/images/high/vibrant-hd-image-of-captain-america-s-shield-22dx2vnngnve2464.webp", // Replace with actual image URL
    description: "A shield made from vibranium, indestructible and capable of absorbing kinetic energy. Used both for defense and offense.",
  },
  {
    title: "Thor's Hammer (Mjolnir)",
    image: "https://wallpapers.com/images/high/thor-hammer-cu6a393ztjwg3j6c.webp", // Replace with actual image URL
    description: "A magical weapon forged in the heart of a dying star. It summons lightning and can only be lifted by those deemed worthy.",
  },
  {
    title: "Arc Reactor",
    image: "https://wallpapers.com/images/high/iron-man-arc-reactor-1920-x-1080-wallpaper-se4uc7mpa42h90t5.webp", // Replace with actual image URL
    description: "A clean energy source that powers Iron Man’s suit and several of Tony Stark’s inventions. Generates immense energy in a compact form.",
  },
  {
    title: "Loki's Scepter",
    image: "https://wallpapers.com/images/high/cartoon-loki-with-scepter-6f775t97yu10psk4.webp", // Replace with actual image URL
    description: "A scepter wielded by Loki, containing the Mind Stone, which grants control over the minds of others.",
  },
  {
    title: "Black Panther Suit",
    image: "https://wallpapers.com/images/hd/black-panther-suit-gf822sz6sci44sma.webp", // Replace with actual image URL
    description: "A suit made from Vibranium that absorbs and redirects kinetic energy. Enhanced agility, speed, and strength.",
  },
 
  {
    title: "Hulkbuster Armor",
    image: "https://wallpapers.com/images/high/iron-man-hulkbuster-armor-action-j1ue3pkgoff1lacj.webp", // Replace with actual image URL
    description: "A specialized Iron Man suit designed for combat against the Hulk. It features enhanced durability, strength, and various weapons.",
  },
  {
    title: "Ant-Man Suit",
    image: "https://wallpapers.com/images/high/ant-man-with-suit-kiiqxd28h3j4tj57.webp", // Replace with actual image URL
    description: "A suit designed by Hank Pym, using Pym Particles to shrink the wearer to the size of an ant while retaining strength proportional to size.",
  },
  {
    title: "Ultron",
    image: "https://wallpapers.com/images/high/marvel-comics-ultron-character-5lov2nbrko6d7ebv.webp", // Replace with actual image URL
    description: "An artificial intelligence created by Tony Stark and Bruce Banner. Ultron possesses immense knowledge, strength, and the ability to evolve.",
  },
  {
    title: "Star-Lord's Element Guns",
    image: "https://wallpapers.com/images/high/star-lord-shooting-gun-uzn0f4n0cu6byppd.webp", // Replace with actual image URL
    description: "Star-Lord's weapons designed to manipulate the elements, which can fire different energy blasts with various effects.",
  },
  {
    title: "Vibranium",
    image: "https://wallpapers.com/images/high/vibranium-1248-x-702-wallpaper-ba14l8126up63nw3.webp", // Replace with actual image URL
    description: "A rare and powerful metal from Wakanda known for its strength and energy-absorbing capabilities, used to create shields and suits.",
  },
  {
    title: "Tesseract (Space Stone)",
    image: "https://wallpapers.com/images/high/cartoon-loki-with-tesseract-vh7jnunrc3132lf9.webp", // Replace with actual image URL
    description: "A powerful object containing the Space Stone, allowing the user to manipulate space, teleport, and travel across the universe.",
  },

];

const Technologies = () => {
  return (
    <section className="technologies-section">
      <h2 className="section-title">Marvel Technologies</h2>
      <div className="technologies-container">
        {technologies.map((tech, index) => (
          <div key={index} className="technology-item">
            <img src={tech.image} alt={tech.title} className="technology-image" />
            <div className="technology-details">
              <h3 className="technology-title">{tech.title}</h3>
              <p className="technology-description">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
