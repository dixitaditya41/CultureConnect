
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





import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './VirtualTour.css';
import './Brazil.js';

const VirtualTour = () => {
  useEffect(() => {
    const element = document.getElementById('testt');
    if (element) {
      scrambleText(element, "Explore the World Virtually!", 2000, 50);
    }
  }, []);

  function scrambleText(element, newText, duration, scrambleSpeed) {
    const oldText = element.textContent;
    //const maxLength = Math.max(oldText.length, newText.length);
    const scrambleChars = 'Wanna Explore the World?';
    
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

  return (
    <div>
      <header>
        <div className="logo">CultureConnect</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/virtual-tour">Virtual Tour</Link></li>
            <li><Link to="/language-practice">Language Practice</Link></li>
            <li><Link to="/cultural-stories">Cultural Stories</Link></li>
          </ul>
        </nav>
      </header>

      <section id="virtual-tour">
        <h2 id="testt">Wanna Explore the World</h2>

        <div className="tour-content">
          <section id="features">
            <Link to="/brazil">
              <div className="feature" id="feature-tour">
                <img src="https://allthatsinteresting.com/wordpress/wp-content/uploads/2015/02/rio-de-janeiro-carnival-incredible.jpg" alt="Virtual Tour" />
                <h3>Brazil</h3>
                <p>Experience the vibrant colors and rhythms of Carnival.</p>
              </div>
            </Link>
            <Link to="/india">
              <div className="feature" id="feature-language">
                <img src="https://www.tripsavvy.com/thmb/68Wzh35v7kY28ypwbtiF2B8xTQI=/2116x1417/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-535155562-5931223e3df78c08aba1a24c.jpg" alt="Language Practice" />
                <h3>India</h3>
                <p>Discover the heritage, traditions, and arts of various regions and communities of India.</p>
              </div>
            </Link>
            <Link to="/italy">
              <div className="feature" id="feature-stories">
                <img src="https://www.helitaly.com/wp-content/uploads/venice-carnival-festival.jpg" alt="Cultural Stories" />
                <h3>Italy</h3>
                <p>Learn about the food, holidays, family, wedding, carnival, and festival traditions that make Italian culture so special.</p>
              </div>
            </Link>
            <Link to="/spain">
              <div className="feature" id="feature-tour">
                <img src="https://res.cloudinary.com/enchanting/f_auto,q_70,w_900,h_490,c_fill/et-web/2020/03/bullfight-in-spain.jpg" alt="Virtual Tour" />
                <h3>Spain</h3>
                <p>Spain - Culture, Cuisine, Traditions.</p>
              </div>
            </Link>
            <Link to="/japan">
              <div className="feature" id="feature-language">
                <img src="https://mnlop.com.ph/wp-content/uploads/2019/08/japan-culture.jpg" alt="Language Practice" />
                <h3>Japan</h3>
                <p>Japanese culture is based on social harmony, respect for nature, collective responsibility, and hard work.</p>
              </div>
            </Link>
           
          </section>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 CultureConnect. All rights reserved.</p>
        <p>Designed by Isha Shukla</p>
      </footer>
    </div>
  );
};

export default VirtualTour;
