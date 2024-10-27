// FestiveCards.js
import React from 'react';
import './FestiveCards.css';

const FestiveCards = ({ title, description, imgSrc }) => {
  return (
    <div className="feature-card bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FestiveCards;
