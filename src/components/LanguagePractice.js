
import React from 'react';
import { Link } from 'react-router-dom';
import './LanguagePractice.css';

const LanguagePractice = () => {
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

      <section id="language-practice">
        <h2>Language Practice Sessions</h2>
        <div className="language-content">

        </div>
      </section>

      <footer>
        <p>&copy; 2024 CultureConnect. All rights reserved.</p>
        <p>Designed by Isha Shukla</p>
      </footer>
    </div>
  );
};

export default LanguagePractice;
