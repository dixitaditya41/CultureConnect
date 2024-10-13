import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Cardslider from '../components/Cardslider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';

export default function Home() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  // Card data
  const features = [
    {
      imgSrc: "https://i.pinimg.com/originals/a3/22/21/a32221c9139c4f05eb94af6a8a691373.jpg",
      title: "Virtual Cultural Tour",
      description: "Experience cultures from around the world through immersive virtual tours."
    },
    {
      imgSrc: "https://englisheasypractice.com/wp-content/uploads/2021/08/Learn-English-By-Yourself.jpg",
      title: "Language Practice Groups",
      description: "Practice languages with native speakers and enhance your skills."
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImnBp-41mfmYWw6oeMMIqDFSeFkKH25u1gA&s",
      title: "Cultural Stories",
      description: "Read and share cultural stories from different regions, and connect with others."
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImnBp-41mfmYWw6oeMMIqDFSeFkKH25u1gA&s",
      title: "Local Artisans",
      description: "Read and share cultural stories from different regions, and connect with others."
    }, {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImnBp-41mfmYWw6oeMMIqDFSeFkKH25u1gA&s",
      title: "Cultural Shows",
      description: "Read and share cultural stories from different regions, and connect with others."
    }, 
    // Add more feature objects if needed
  ];

  return (
    <div className='flex flex-col h-screen'>
      {/* Header at the top */}
      <Header />

      {/* Main content */}
      <div className='flex-grow'>
        <section id="forimg">
          {/* Hero Section */}
          <section id="hero">
            <div className="hero-content">
              <h1><b>Discover the World from Your Home</b></h1>
              <p><b><i>Join us in exploring diverse cultures through virtual tours, language practice, and storytelling.</i></b></p>
              <Link to="/virtual-tour" className="btn">Start Exploring</Link>
            </div>
          </section>

          {/* Features Section with Slider */}
          <div className="max-w-7xl mx-auto">
             <Cardslider features={features} />
             </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
