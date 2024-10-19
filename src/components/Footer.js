import React from 'react';
import img from '../assests/logo.png';

const Footer = () => {
  return (
    <div className="min-w-full  mx-auto">
    <footer className="bg-gray-900 text-gray-300 py-6 px-2 md:px-4">
      
        
        <div className="flex flex-wrap justify-evenly gap-5">
           
          <div>
          <img src={img} alt="CultureConnect Logo" className="w-32 h-auto" />
          </div> 
          <div className="flex flex-col space-y-4 min-w-[240px]">
           
            <h1 className="text-xl font-bold text-orange-500">CultureConnect</h1>
            <div className="space-y-3 text-sm">
              <p>
                Customer Support: <br />
                <span className="text-white font-semibold">(629) 555-0129</span>
              </p>
              <p>
                4517 Washington Ave. <br />
                Manchester, Kentucky 39495
              </p>
              <p>
                <a 
                  href="mailto:cultureConnect@gmail.com" 
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  cultureConnect@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Top category section */}
          <div className="flex flex-col space-y-4 min-w-[200px]">
            <h2 className="text-lg font-semibold text-white">Festive-Seasons</h2>
            <ul className="space-y-2">
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Diwali</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Holi</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Garba</li>
              <li className="hover:text-orange-500 cursor-pointer">Kumbh</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Chat Puja</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Navratri</li>
            </ul>
            <a href="/" className="text-yellow-500 text-sm hover:text-orange-500 transition-colors mt-2">
              Browse All  →
            </a>
          </div>

          {/* Quick links section */}
          <div className="flex flex-col space-y-4 min-w-[200px]">
            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Cultures</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Languages</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Places</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Festivals</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Stories</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">About Us</li>
            </ul>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-2 border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; 2024 CultureConnect. All rights reserved.</p>
          <p className="mt-1 text-gray-400">Designed by Isha Shukla</p>
        </div>
      
    </footer>
    </div>
  );
};

export default Footer;