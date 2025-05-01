
import React from 'react';
import { Image, Video, Link } from 'lucide-react';

const Gallery = () => {
  const images = [
    { 
      type: 'image', 
      url: 'https://source.unsplash.com/random/800x600?dandiya', 
      title: 'Dandiya Night 2024'
    },
    { 
      type: 'video', 
      url: 'https://drive.google.com/file/d/1H-b-tuE4GUPm8B954ek_jMSwDsaHFD5J/view?usp=sharing', 
      thumbnail: 'https://source.unsplash.com/random/800x600?dance', 
      title: 'After Movie\'24',
      description: 'Click on this for Movie'
    },
    { 
      type: 'image', 
      url: 'https://source.unsplash.com/random/800x600?festival', 
      title: 'Cultural Night Performance' 
    },
    { 
      type: 'image', 
      url: 'https://source.unsplash.com/random/800x600?celebration', 
      title: 'Grand Finale 2024' 
    },
  ];

  const handleMediaClick = (item) => {
    if (item.type === 'video' && item.url) {
      window.open(item.url, '_blank');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
                <div className="mb-2">
                  {item.type === 'image' ? <Image className="w-8 h-8 mx-auto" /> : <Video className="w-8 h-8 mx-auto" />}
                </div>
                <p className="text-lg font-semibold">{item.title}</p>
                {item.description && (
                  <div className="mt-2 flex items-center justify-center gap-1 text-festival-yellow">
                    <Link className="w-4 h-4" />
                    <span>{item.description}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
