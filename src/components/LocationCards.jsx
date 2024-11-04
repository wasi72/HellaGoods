import React from 'react';
import '../assets/styles/LocationCards.css';

const locations = [
  {
    city: "CDMX, MEXICO",
    hours: "Thu-Sun 12pm till late",
    address: "Nápoles 55-71, Juárez, Cuauhtémoc"
  },
  {
    city: "NYC, USA",
    hours: "Thu-Sun 12pm till late",
    address: "47 W 13th St, New York"
  },
  {
    city: "TOKYO, JAPAN",
    hours: "Thu-Sun 12pm till late",
    address: "1 Chome-8-21 Jingumae, Shibuya City, Tokyo"
  }
];

const LocationCards = () => {
  return (
    <div className="location-cards-container">
      <h2 className="locations-title">LOCATIONS</h2>
      <div className="location-cards">
        {locations.map((location, index) => (
          <div key={index} className={`location-card shape-${index + 1}`}>
            <h3>{location.city}</h3>
            <p>{location.hours}</p>
            <p>{location.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCards;
