import React, { useState } from 'react';


const statesData = {
  Maharashtra: {
    food: 'Vada Pav, Misal Pav, Puran Poli',
    dress: 'Nauvari Saree, Dhoti',
    culture: 'Marathi culture with influences from Maratha empire',
    dance: 'Lavani, Tamasha',
    song: 'Bhavageet',
    festivals: 'Ganesh Chaturthi, Gudi Padwa',
    language: 'Marathi',
    
    virtualTour: 'https://maharashtratourism.gov.in/', 
    video: 'https://youtu.be/fcvpAoxyx0U?t=2', 
    images: [
      'maharashtra-food.jpg',
      'maharashtra-dance.jpg',
      'maharashtra-festival.jpg',
    ], 
  },
  Karnataka: {
    food: 'Bisi Bele Bath, Mysore Pak, Ragi Mudde',
    dress: 'Ilkal Saree, Lungi',
    culture: 'Blend of Kannada, Maratha, and Deccan influences',
    dance: 'Yakshagana, Dollu Kunitha',
    song: 'Carnatic music',
    festivals: 'Dasara, Ugadi',
    language: 'Kannada',
    virtualTour: 'https://example.com/karnataka-tour',
    video: 'https://www.youtube.com/embed/example-karnataka-video',
    images: [
      'karnataka-food.jpg',
      'karnataka-dance.jpg',
      'karnataka-festival.jpg',
    ],
  },

};


const StateDetails = ({ name, details }) => {
  return (
    <div className="state-details">
      <h3>{name}</h3>
      <p><strong>Food:</strong> {details.food}</p>
      <p><strong>Dress:</strong> {details.dress}</p>
      <p><strong>Culture:</strong> {details.culture}</p>
      <p><strong>Dance:</strong> {details.dance}</p>
      <p><strong>Song:</strong> {details.song}</p>
      <p><strong>Festivals:</strong> {details.festivals}</p>
      <p><strong>Language:</strong> {details.language}</p>

      
      <div className="virtual-tour">
        <h4>Virtual Tour:</h4>
        <iframe
          src={details.virtualTour}
          title={`${name} Virtual Tour`}
          width="100%"
          height="400px"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="state-video">
        <h4>Watch a Video:</h4>
        <iframe
          width="100%"
          height="315"
          src={details.video}
          title={`${name} Video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="image-gallery">
        <h4>Image Gallery:</h4>
        {details.images.map((image, index) => (
          <img key={index} src={image} alt={`${name} ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

const India = () => {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <div>
      <header>
        <h1>Explore India</h1>
      </header>
      <main>
        <h2>Discover the Rich Culture and Heritage of Each State</h2>

       
        <div className="state-list">
          {Object.keys(statesData).map(state => (
            <button key={state} onClick={() => setSelectedState(state)}>
              {state}
            </button>
          ))}
        </div>


{/* Detailsss... */}
        {selectedState && (
          <StateDetails name={selectedState} details={statesData[selectedState]} />
        )}
      </main>
      <footer>
        <p>&copy; 2024 CultureConnect. All rights reserved.</p>
        <p>Designed by Isha Shukla</p>
      </footer>

     
      <style jsx>{`
        .state-list button {
          margin: 5px;
          padding: 10px 20px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .state-list button:hover {
          background-color: #f0f0f0;
        }
        .state-details {
          margin-top: 20px;
        }
        .virtual-tour,
        .state-video,
        .image-gallery {
          margin-top: 20px;
        }
        .gallery-image {
          width: 150px;
          margin: 10px;
        }
      `}</style>
    </div>
  );
};

export default India;
