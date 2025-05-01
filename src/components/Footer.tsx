
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-festival-gradient flex items-center justify-center">
                <span className="text-white font-bold text-xl">DN</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl">Day & Night</span>
                <span className="text-sm block text-gray-400">Productions</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Creating vibrant cultural experiences and uplifting local talent through unforgettable events.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-festival-red transition-colors">
                <span>FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-festival-red transition-colors">
                <span>IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-festival-red transition-colors">
                <span>TW</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-festival-yellow transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-festival-yellow transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-festival-yellow transition-colors">Our Team</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-festival-yellow transition-colors">Event Schedule</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-festival-yellow transition-colors">Sponsorship</a>
              </li>
            </ul>
          </div>
          
          <div id="contact">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-festival-yellow mt-1" />
                <span className="text-gray-400">Sahara States, Jankipuram, Lucknow, 226021</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-festival-yellow" />
                <span className="text-gray-400">+91 7355023541</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-festival-yellow" />
                <span className="text-gray-400">info@dayandnightproductions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Day and Night Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
