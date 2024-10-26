import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { features, cultures, indianEvents } from './data.js';
import { Link, NavLink } from 'react-router-dom';
import Cardslider from '../components/Cardslider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserPlus, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa'; // Importing necessary icons
import './Home.css';
import community from "../assests/community.png";
import logo from '../assests/logo.png'
import Imageslider from '../components/Imageslider.js';

export default function Home() {

  return (
    <div className='flex flex-col w-screen h-screen  p-2 '>
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
            <Cardslider cards={features} />
          </div>
        </section>
      </div>

      <div className='flex flex-col items-center mb-5'>

        <h2 className='text-2xl font-semibold'>Explore Indian Cultures </h2>
        <div class="w-3/6 h-px bg-slate-400"></div>

        <div className="max-w-7xl mx-auto">
          <Cardslider cards={cultures} />
        </div>

      </div>


      <div className='flex flex-col justify-center mt-4 items-center'>

        <div className=''>
          <Imageslider cards={indianEvents} />
        </div>
      </div>

      {/* Join the community and start exploring cultures from around the world! */}


      <div className='flex justify-center relative mt-4'>
        <img
          src={community}
          alt="Join our community"
          className='object-cover w-full' // Set width and height for the image
        />

        <div className='absolute flex flex-col m-3 p-5 justify-center items-center top-32 bg-gradient-to-b from-blue to-transparent rounded shadow-lg'>
          <h2 className='text-3xl text-white font-semibold'>Join the community</h2>
          <p className='text-white mb-4'>Start exploring cultures from around the world!</p>
          <NavLink to="/joinCommunity" className='flex items-center mb-4'>
            <button className='flex items-center p-3 bg-blue text-white rounded hover:bg-white hover:text-black transition'>
              <FaUserPlus className='mr-2' />
              Join Now ...
            </button>
          </NavLink>

          {/* Social Media Icons */}
          <div className='flex space-x-4 mt-2'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-400 transition'>
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-400 transition'>
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-400 transition'>
              <FaInstagram size={24} />
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-400 transition'>
              <FaWhatsapp size={24} />
            </a>
            <a href="https://telegram.me" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-400 transition'>
              <FaTelegram size={24} />
            </a>
          </div>
        </div>
      </div>
       
      
      {/* Our Story */}
      <div className="flex text-white h-52 justify-center items-center mt-3 w-9/12 mx-auto bg-blue-950 rounded-lg shadow-lg p-6"> 
  <img src={logo} alt="logo" className="w-30 h-40 rounded-full mr-4" /> {/* Add margin-right for spacing */}
  
  <div className="flex flex-col justify-center"> {/* Nested flex column for content */}
    <h2 className="text-3xl font-semibold mb-2 max-w-md text-center">Our Story</h2> 
  
    <p className="max-w-md text-center"> 
      CultureConnect was created to bridge cultural gaps and promote understanding among diverse communities. 
      It offers a platform for individuals to explore, share, and engage in cultural experiences, 
      fostering connections and enriching lives through the celebration of diversity and shared knowledge.
    </p>
  </div>
</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
