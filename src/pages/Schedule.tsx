import React from 'react';
import { Clock, Music, Star, Flame, Gift, Sparkles } from 'lucide-react';

const Schedule: React.FC = () => {
  const scheduleItems = [
    {
      id: 1,
      title: "DJ Opening Set",
      time: "6:00 PM - 7:00 PM",
      description: "Get the party started with high-energy beats and crowd favorites",
      image: "/festival/dj_male.jpeg",
      icon: <Music className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Opening Ceremony",
      time: "7:00 PM - 7:20 PM", 
      description: "Traditional welcome ceremony with cultural performances",
      image: "/festival/opening.jpeg",
      icon: <Star className="w-6 h-6" />
    },
    {
      id: 3,
      title: "DJ Set",
      time: "7:30 PM - 8:00 PM",
      description: "Bollywood hits mixed with contemporary dance tracks",
      image: "/festival/dj_female.JPG",
      icon: <Music className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Mexican Fireshow with Bollywood Theme Songs",
      time: "8:00 PM - 8:40 PM",
      description: "Spectacular fire performance choreographed to Bollywood music",
      image: "/festival/fireshow.jpeg",
      icon: <Flame className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Super Secret Surprise",
      time: "9:00 PM - 10:00 PM",
      description: "A special surprise performance you won't want to miss!",
      image: "/festival/secretstar.jpeg",
      icon: <Gift className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Pyro Fireworks",
      time: "9:50 PM - 10:00 PM",
      description: "Grand finale with spectacular fireworks display",
      image: "/festival/fireworks.jpeg",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-festival-pink/5 to-festival-purple/10">
      {/* Header */}
      <section className="py-16 bg-festival-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Event Schedule</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join us for an unforgettable evening of music, dance, and celebration
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Clock className="w-8 h-8" />
            <span className="text-2xl font-semibold">6:00 PM - 10:00 PM</span>
          </div>
        </div>
      </section>

      {/* Schedule Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scheduleItems.map((item) => (
              <div
                key={item.id}
                className="festival-card group cursor-pointer overflow-hidden hover-scale"
              >
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-festival-pink/20 backdrop-blur-sm text-white flex items-center justify-center">
                    {item.icon}
                  </div>
                  
                  {/* Time Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-festival-yellow text-black font-semibold px-3 py-1 rounded-full text-sm">
                      {item.time}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-festival-pink transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-festival-purple/20 to-festival-cyan/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Don't Miss Out on Any Moment!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Book your tickets now and experience every spectacular moment of Lucknow's biggest Dandiya celebration.
          </p>
          <a
            href="/contact"
            className="btn-festival inline-block"
          >
            Book Your Tickets Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Schedule;