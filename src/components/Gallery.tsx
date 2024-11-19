import React from 'react';
import './indexx.css';

const Gallery: React.FC = () => {
  const artworks = [
    { title: 'The Potato Eaters, 1885', artist: 'Vincent van Gogh', image: 'image1.jpg' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', image: 'image2.jpg' },
    { title: 'Starry Night, 1889', artist: 'Vincent van Gogh', image: 'image3.jpg' },
    { title: 'Mona Lisa', artist: 'Leonardo da Vinci', image: 'image4.jpg' },
  ];

  return (
    <section className="gallery">
      <div className="container">
        <h3>Discover Art You Love From the World’s Leading Online Gallery</h3>
        <div className="artworks">
          {artworks.map((artwork, index) => (
            <div key={index} className="artwork">
              <img src={artwork.image} alt={artwork.title} />
              <h4>{artwork.title}</h4>
              <p>{artwork.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
