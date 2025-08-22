import React, { useEffect } from 'react';
import { ArrowDown, Music, Users, Star, Award, MapPin, Video, Image, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import FireworksAnimation from '../components/FireworksAnimation';

const Home: React.FC = () => {
  useEffect(() => {
    // Simple scroll reveal animation using Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll('.reveal');
    animateElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Fireworks Animation */}
      <FireworksAnimation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-festival-gradient overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/festival/wallpaper.jpeg" 
            alt="Ethnic Concert" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FEF7CD] mb-4 animate-fade-in">
              Lucknow ki Bollywood <br />
              Dandiya Night <span className="text-festival-yellow">2025</span><br />
              <span className="text-2xl md:text-3xl">Season 1</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              City Centre ki BIGGEST Dandiya Night
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://in.bookmyshow.com/activities/lucknow-bollywood-dandiya-night/ET00458445" className="btn-festival" target="_blank" rel="noopener noreferrer">
              Book Your Tickets
            </a>
              <Link to="/schedule" className="bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300">
                View Schedule
              </Link>
            </div>
            <div className="flex space-x-6 mt-12">
              <div className="text-white">
                <div className="text-3xl font-bold">11-12</div>
                <div className="text-sm uppercase tracking-wider">October</div>
              </div>
              <div className="border-l border-white/30 pl-6 text-white">
                <div className="text-3xl font-bold">Jhulelal</div>
                <div className="text-sm uppercase tracking-wider">Vatika</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-10 h-10 text-white" />
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 bg-gradient-to-br from-festival-purple/10 to-festival-cyan/10">
        <div className="container mx-auto px-4">
          <h2 className="section-title reveal">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="festival-card text-center reveal">
              <div className="w-12 h-12 rounded-full bg-festival-pink/10 text-festival-pink flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="metric-value">16,000+</div>
              <div className="metric-label">Expected Footfall</div>
            </div>
            
            <div className="festival-card text-center reveal">
              <div className="w-12 h-12 rounded-full bg-festival-cyan/10 text-festival-cyan flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6" />
              </div>
              <div className="metric-value">95%</div>
              <div className="metric-label">Previous Venue Capacity</div>
            </div>
            
            <div className="festival-card text-center reveal">
              <div className="w-12 h-12 rounded-full bg-festival-purple/10 text-festival-purple flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="metric-value">10M+</div>
              <div className="metric-label">Social Media Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-festival-pink/10 to-festival-yellow/10">
        <div className="container mx-auto px-4">
          <h2 className="section-title reveal">Previous Year Highlights</h2>
          <Gallery />
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16 bg-gradient-to-br from-festival-blue/5 to-festival-orange/5">
        <div className="container mx-auto px-4">
          <h2 className="section-title reveal">Why Attend</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 reveal">
            Join us for an unforgettable celebration of tradition, culture, and vibrant energy at Lucknow's most anticipated Dandiya event of the year.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 reveal">
              <div className="w-12 h-12 rounded-full bg-festival-pink/10 text-festival-pink flex-shrink-0 flex items-center justify-center">
                <Music className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Energy-Packed Performances</h3>
                <p className="text-gray-600">
                  Experience electrifying live performances from renowned artists and musicians that will keep you dancing all night long.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 reveal">
              <div className="w-12 h-12 rounded-full bg-festival-yellow/10 text-festival-yellow flex-shrink-0 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Cultural Authenticity</h3>
                <p className="text-gray-600">
                  Immerse yourself in the authentic traditions of Dandiya with carefully curated performances that honor our rich cultural heritage.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 reveal">
              <div className="w-12 h-12 rounded-full bg-festival-cyan/10 text-festival-cyan flex-shrink-0 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Prime Venue</h3>
                <p className="text-gray-600">
                  Hosted at the prestigious Jhulelal Vatika, offering the perfect ambiance, ample space, and state-of-the-art facilities for a magical experience.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 reveal">
              <div className="w-12 h-12 rounded-full bg-festival-purple/10 text-festival-purple flex-shrink-0 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Influencer Collaborations</h3>
                <p className="text-gray-600">
                  Special appearances and performances by popular social media influencers and celebrities, bringing a modern twist to traditional celebrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-festival-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience the Magic?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Don't miss out on Lucknow's biggest cultural celebration. Book your tickets now and be part of this extraordinary experience.
          </p>
          {/* <Link to="/contact" className="bg-white text-festival-pink font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Book Tickets Now
          </Link> */}
          <a href="https://in.bookmyshow.com/activities/lucknow-bollywood-dandiya-night/ET00458445" className="bg-white text-festival-pink font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg" target="_blank" rel="noopener noreferrer">
          Book Tickets Now
            </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
