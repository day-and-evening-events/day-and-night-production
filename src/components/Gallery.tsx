
import React from 'react';
import { Play } from 'lucide-react';

// Import images directly to ensure they're properly bundled
import crowdImage from '../assets/gallery/crowd.png';
import afterMovieThumbnail from '../assets/gallery/aftermovie.png';
import dandiyaNightImage from '../assets/gallery/dandiya.png';
import openingCeremonyImage from '../assets/gallery/opening.png';

const Gallery = () => {
  const images = [
    { 
      type: 'image', 
      url: crowdImage, 
      title: 'Crowd'
    },
    { 
      type: 'video', 
      url: 'https://drive.google.com/file/d/1H-b-tuE4GUPm8B954ek_jMSwDsaHFD5J/view?usp=sharing', 
      thumbnail: afterMovieThumbnail, 
      title: 'After Movie\'24'
    },
    { 
      type: 'image', 
      url: dandiyaNightImage, 
      title: 'Dandiya Night\'24'
    },
    { 
      type: 'image', 
      url: openingCeremonyImage, 
      title: 'Opening Ceremony'
    },
  ];

  const handleMediaClick = (item) => {
    if (item.type === 'video' && item.url) {
      window.open(item.url, '_blank');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {images.map((item, index) => (
        <div 
          key={index} 
          className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
          onClick={() => handleMediaClick(item)}
        >
          <div className="relative aspect-video">
            <img 
              src={item.type === 'image' ? item.url : item.thumbnail} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                {item.type === 'video' ? (
                  <div className="mb-2">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                ) : null}
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
