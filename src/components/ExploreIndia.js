
// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './VirtualTour.css';

// const VirtualTour = () => {
//   useEffect(() => {
//     const element = document.getElementById('testt');
//     if (element) {
//       scrambleText(element, "Explore the World Virtually!", 2000, 50);
//     }
//   }, []);

//   function scrambleText(element, newText, duration, scrambleSpeed) {
//     const oldText = element.textContent;
//     const maxLength = Math.max(oldText.length, newText.length);
//     const scrambleChars = 'Wanna Explore the World?';
    
//     let scrambleInterval;
//     let startTime;

//     function scramble() {
//         const elapsed = Date.now() - startTime;
//         const progress = Math.min(elapsed / duration, 1);
//         const updatedText = newText.split('').map((char, index) => {
//             if (index < progress * newText.length) {
//                 return char;
//             }
//             const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
//             return randomChar;
//         }).join('');
        
//         element.textContent = updatedText;
        
//         if (progress === 1) {
//             clearInterval(scrambleInterval);
//             element.textContent = newText;
//         }
//     }

//     function startScrambling() {
//         startTime = Date.now();
//         scrambleInterval = setInterval(scramble, scrambleSpeed);
//     }

//     startScrambling();
//   }

//   return (
//     <div>
//       <header>
//         <div className="logo">CultureConnect</div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/virtual-tour">Virtual Tour</Link></li>
//             <li><Link to="/language-practice">Language Practice</Link></li>
//             <li><Link to="/cultural-stories">Cultural Stories</Link></li>
//           </ul>
//         </nav>
//       </header>

//       <section id="virtual-tour">
//         <h2 id="testt">Wanna Explore the World</h2>

//         <div className="tour-content">
//           {
//              <section id="features">
//              <div className="feature" id="feature-tour">
//                <img src="https://allthatsinteresting.com/wordpress/wp-content/uploads/2015/02/rio-de-janeiro-carnival-incredible.jpg" alt="Virtual Tour" />
//                <h3>Brazil</h3>
//                <p>Experience the vibrant colors and rhythms of Carnival.</p>
//              </div>
//              <div className="feature" id="feature-language">
//                <img src="https://www.tripsavvy.com/thmb/68Wzh35v7kY28ypwbtiF2B8xTQI=/2116x1417/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-535155562-5931223e3df78c08aba1a24c.jpg" alt="Language Practice" />
//                <h3>India</h3>
//                <p>Discover the heritage, traditions, and arts of various regions and communities of India.</p>
//              </div>
//              <div className="feature" id="feature-stories">
//                <img src="https://www.helitaly.com/wp-content/uploads/venice-carnival-festival.jpg" alt="Cultural Stories" />
//                <h3>Italy</h3>
//                <p>Learn about the food, holidays, family, wedding, carnival, and festival traditions that make Italian culture so special. </p>
//              </div>
//              <div className="feature" id="feature-tour">
//                <img src="https://res.cloudinary.com/enchanting/f_auto,q_70,w_900,h_490,c_fill/et-web/2020/03/bullfight-in-spain.jpg" alt="Virtual Tour" />
//                <h3>Spain</h3>
//                <p>Spain - Culture, Cuisine, Traditions.</p>
//              </div>
//              <div className="feature" id="feature-language">
//                <img src="https://mnlop.com.ph/wp-content/uploads/2019/08/japan-culture.jpg" alt="Language Practice" />
//                <h3>Japan</h3>
//                <p>Japanese culture is based on social harmony, respect for nature, collective responsibility, and hard work.</p>
//              </div>
//              <div className="feature" id="feature-stories">
//                <img src="https://www.helitaly.com/wp-content/uploads/venice-carnival-festival.jpg" alt="Cultural Stories" />
//                <h3>Italy</h3>
//                <p>Learn about the food, holidays, family, wedding, carnival, and festival traditions that make Italian culture so special. </p>
//              </div>
//              <div className="feature" id="feature-tour">
//                <img src="https://allthatsinteresting.com/wordpress/wp-content/uploads/2015/02/rio-de-janeiro-carnival-incredible.jpg" alt="Virtual Tour" />
//                <h3>Brazil</h3>
//                <p>Experience the vibrant colors and rhythms of Carnival.</p>
//              </div>
//              <div className="feature" id="feature-language">
//                <img src="https://www.tripsavvy.com/thmb/68Wzh35v7kY28ypwbtiF2B8xTQI=/2116x1417/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-535155562-5931223e3df78c08aba1a24c.jpg" alt="Language Practice" />
//                <h3>India</h3>
//                <p>Discover the heritage, traditions, and arts of various regions and communities of India.</p>
//              </div>
//              <div className="feature" id="feature-stories">
//                <img src="https://www.helitaly.com/wp-content/uploads/venice-carnival-festival.jpg" alt="Cultural Stories" />
//                <h3>Italy</h3>
//                <p>Learn about the food, holidays, family, wedding, carnival, and festival traditions that make Italian culture so special. </p>
//              </div>
//            </section>
        
//           }
//         </div>
//       </section>

//       <footer>
//         <p>&copy; 2024 CultureConnect</p>
//       </footer>
//     </div>
//   );
// };

// export default VirtualTour;




// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './ExploreIndia.css'; // Update the CSS file name
// import { motion } from 'framer-motion'; // Import framer-motion for animations

// const ExploreIndia = () => {
//   useEffect(() => {
//     const element = document.getElementById('header-text');
//     if (element) {
//       scrambleText(element, "Explore India Virtually!", 2000, 50);
//     }
//   }, []);

//   function scrambleText(element, newText, duration, scrambleSpeed) {
//     const oldText = element.textContent;
//     const maxLength = Math.max(oldText.length, newText.length);
//     const scrambleChars = 'Explore India Virtually';
    
//     let scrambleInterval;
//     let startTime;

//     function scramble() {
//       const elapsed = Date.now() - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const updatedText = newText.split('').map((char, index) => {
//         if (index < progress * newText.length) {
//           return char;
//         }
//         const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
//         return randomChar;
//       }).join('');
      
//       element.textContent = updatedText;
      
//       if (progress === 1) {
//         clearInterval(scrambleInterval);
//         element.textContent = newText;
//       }
//     }

//     function startScrambling() {
//       startTime = Date.now();
//       scrambleInterval = setInterval(scramble, scrambleSpeed);
//     }

//     startScrambling();
//   }

//   const states = [
//     { name: 'Maharashtra', imgSrc: 'http://vignette2.wikia.nocookie.net/travel/images/c/ce/Maharashtra_Highlights.jpg/revision/latest?cb=20100409143301&path-prefix=en', description: 'Explore the rich culture of Maharashtra.' },
//     { name: 'Kerala', imgSrc: 'https://link-to-kerala-image.jpg', description: 'Discover God\'s Own Country.' },
//     // Add more states here...
//   ];

//   return (
//     <div className='bodyy'>
//       <header>
//         <div className="logo">CultureConnect</div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/explore-india">Explore India</Link></li>
//           </ul>
//         </nav>
//       </header>

//       <section id="explore-india">
//         <h2 id="header-text">Explore India</h2>



// <motion.div
//   initial={{ opacity: 0, y: 50 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 1 }}
//   className="india-intro"
// >
//   <p>India is a land of diversity, with rich cultural heritage, traditions, and vibrant history. From the Himalayas in the north to the coastal regions in the south, every state has its unique flavor and charm.</p>
  
 
//   <div className="intro-media">
//   <iframe 
//     width="100%" 
//     height="100%" 
//     src="https://www.youtube.com/embed/1K4fL_P5rQI?autoplay=1&loop=1&playlist=1K4fL_P5rQI" 
//     title="YouTube video player" 
//     frameBorder="0" 
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//     allowFullScreen={true} 
//     className="intro-video"
//   ></iframe>
// </div>

// </motion.div>




//         {/* State Cards Section */}
//         <div className="state-cards">
//           {states.map((state, index) => (
//             <motion.div
//               key={index}
//               className="state-card"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//             >
//               <img src={state.imgSrc} alt={state.name} />
//               <h3>{state.name}</h3>
//               <p>{state.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <footer>
//         <p>&copy; 2024 CultureConnect. All rights reserved.</p>
//         <p>Designed by Isha Shukla</p>
//       </footer>
//     </div>
//   );
// };

// export default ExploreIndia;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ExploreIndia.css';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

const ExploreIndia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const element = document.getElementById('header-text');
    if (element) {
      scrambleText(element, "Explore India Virtually!", 2000, 50);
    }

    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % culturalPlaces.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, []);

  function scrambleText(element, newText, duration, scrambleSpeed) {
    const oldText = element.textContent;
    const maxLength = Math.max(oldText.length, newText.length);
    const scrambleChars = 'Explore India Virtually';
    
    let scrambleInterval;
    let startTime;

    function scramble() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const updatedText = newText.split('').map((char, index) => {
        if (index < progress * newText.length) {
          return char;
        }
        const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        return randomChar;
      }).join('');
      
      element.textContent = updatedText;
      
      if (progress === 1) {
        clearInterval(scrambleInterval);
        element.textContent = newText;
      }
    }

    function startScrambling() {
      startTime = Date.now();
      scrambleInterval = setInterval(scramble, scrambleSpeed);
    }

    startScrambling();
  }

  const states = [
    { name: 'Madhya Pradesh', imgSrc: 'https://www.humsamvet.com/uploads/images/2023/04/image_1200x675_643565540270b.jpg', description: 'Explore Maharashtra.' },
    { name: 'Kerala', imgSrc: 'http://www.mnkindustry.com/wp-content/uploads/2017/11/dsc_0667.jpg', description: 'Discover Kerala.' },
    { name: 'Maharashtra', imgSrc: 'https://rooftopapp.com/wp-content/uploads/2023/04/Tribal-Art-3.jpg', description: 'Explore Maharashtra.' },
    { name: 'Rajasthan', imgSrc: 'https://routeprints.com/wp-content/uploads/2019/05/Rajasthan-Tradition-1.png', description: 'Discover Kerala.' },
    { name: 'Tamil Nadu', imgSrc: 'https://i.pinimg.com/originals/1a/46/87/1a46879a050f9d5cb30acbc4fa4c9018.jpg', description: 'Explore Maharashtra.' },
    { name: 'Himachal Pradesh', imgSrc: 'https://usercontent2.hubstatic.com/8590865_f260.jpg', description: 'Discover Kerala.' },
    { name: 'Maharashtra', imgSrc: 'https://link-to-maharashtra-image.jpg', description: 'Explore Maharashtra.' },
    { name: 'Kerala', imgSrc: 'https://link-to-kerala-image.jpg', description: 'Discover Kerala.' },
  ];

  const culturalPlaces = [
    { name: 'Taj Mahal', imgSrc: 'https://cdn.mos.cms.futurecdn.net/asMq6cVwZsckf8sGUaRJU4.jpg', description: 'Iconic symbol of love.' },
    { name: 'Jaipur City Palace', imgSrc: 'https://media.istockphoto.com/photos/jaipur-india-chandra-mahal-palace-within-the-city-palace-picture-id487804438?k=20&m=487804438&s=612x612&w=0&h=dzYikOteZfg0v95m02ScGsf5CXR1bDBYXNeqT4gSguk=', description: 'Royal grandeur of Jaipur.' },
    { name: 'Mathura Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/11/Cultural-destinations-in-India-10.jpg', description: 'Birthplace of Lord Krishna.' },
    { name: 'Meenakshi Temple', imgSrc: 'https://www.laurewanders.com/wp-content/uploads/2023/06/Things-to-do-in-Madurai-92.jpg', description: 'Best Swachh Iconic Place.' },
  ];

  return (
    <div className='explore-body'>
      <Header/>

      <section id="explore-india">
        <h2 id="header-text">Explore India</h2>

        {/* Larger Centered Image Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="cultural-places-slider"
        >
          <div className="slider-item">
            <img src={culturalPlaces[currentSlide].imgSrc} alt={culturalPlaces[currentSlide].name} />
            <div className="slider-text">
              <h3>{culturalPlaces[currentSlide].name}</h3>
              <p>{culturalPlaces[currentSlide].description}</p>
            </div>
          </div>
        </motion.div>

        {/* State Cards Section */}
        <div className="state-cards">
          {states.map((state, index) => (
            <motion.div
              key={index}
              className="state-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <img src={state.imgSrc} alt={state.name} />
              <h3>{state.name}</h3>
              <p>{state.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default ExploreIndia;
