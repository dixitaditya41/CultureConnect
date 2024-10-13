import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import './Brazil.js'

export default function Home() {

    
  return (
    <div className='w-screen h-screen'>
        
        {/* <div> 
        <Header/>
        </div>
        
        <div>
        <section id="forimg">
            <section id="hero">
              <div className="hero-content">
                <h1><b>Discover the World from Your Home</b></h1>
                <p><b><i>Join us in exploring diverse cultures through virtual tours, language practice, and storytelling.</i></b></p>
                <Link to="/virtual-tour" className="btn">Start Exploring</Link>
              </div>
            </section>
    
            <section id="features">
              <div className="feature" id="feature-tour">
                <img src="https://i.pinimg.com/originals/a3/22/21/a32221c9139c4f05eb94af6a8a691373.jpg" alt="Virtual Tour" />
                <h3>Virtual Cultural Tour</h3>
                <p>Experience cultures from around the world through immersive virtual tours.</p>
              </div>
              <div className="feature" id="feature-language">
                <img src="https://englisheasypractice.com/wp-content/uploads/2021/08/Learn-English-By-Yourself.jpg" alt="Language Practice" />
                <h3>Language Practice Groups</h3>
                <p>Practice languages with native speakers and enhance your skills.</p>
              </div>
              <div className="feature" id="feature-stories">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImnBp-41mfmYWw6oeMMIqDFSeFkKH25u1gA&s" alt="Cultural Stories" />
                <h3>Cultural Stories</h3>
                <p>Read and share cultural stories from different regions, and connect with others.</p>
              </div>
            </section>
          </section>
          </div>
          <div> 
         <Footer/>
        </div> */}
    </div>
  )
}
