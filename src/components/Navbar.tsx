
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <Avatar className="w-12 h-12 border-2 border-festival-red">
              <AvatarImage src="/festival/logo.jpg" alt="Day & Night Productions Logo" />
              <AvatarFallback>D&N</AvatarFallback>
            </Avatar>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl">Day & Night</span>
              <span className="text-sm block text-gray-600">Productions</span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={cn("nav-link", isActive('/') && "active-nav-link")}>Home</Link>
            <Link to="/about" className={cn("nav-link", isActive('/about') && "active-nav-link")}>About Us</Link>
            <Link to="/team" className={cn("nav-link", isActive('/team') && "active-nav-link")}>Our Team</Link>
            <Link to="/contact" className={cn("nav-link", isActive('/contact') && "active-nav-link")}>Contact</Link>
          </div>

          <div className="hidden md:block">
            <Link to="/contact" className="btn-festival">Book Tickets</Link>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t mt-3 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={cn("px-3 py-2 font-medium", isActive('/') ? "text-festival-red" : "text-gray-700")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={cn("px-3 py-2 font-medium", isActive('/about') ? "text-festival-red" : "text-gray-700")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/team" 
                className={cn("px-3 py-2 font-medium", isActive('/team') ? "text-festival-red" : "text-gray-700")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link 
                to="/contact" 
                className={cn("px-3 py-2 font-medium", isActive('/contact') ? "text-festival-red" : "text-gray-700")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/contact" className="btn-festival w-full">Book Tickets</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
