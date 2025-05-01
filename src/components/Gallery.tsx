
import React from 'react';
import { Image, Video, Link, Play } from 'lucide-react';

const Gallery = () => {
  const images = [
    { 
      type: 'image', 
      url: '/lovable-uploads/4c370b39-2ab8-43a8-8deb-c3d1cde8f1e2.png', 
      title: 'Crowd'
    },
    { 
      type: 'video', 
      url: 'https://drive.google.com/file/d/1H-b-tuE4GUPm8B954ek_jMSwDsaHFD5J/view?usp=sharing', 
      thumbnail: '/lovable-uploads/a56b113b-b8c1-41aa-98f0-300873a15248.png', 
      title: 'After Movie\'24'
    },
    { 
      type: 'image', 
      url: '/lovable-uploads/b6c3da1c-dd3f-472a-b591-7a62ae271276.png', 
      title: 'Dandiya Night\'24'
    },
    { 
      type: 'image', 
      url: '/lovable-uploads/72609c26-eba1-4749-bbfe-cd4afae345c1.png', 
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
                ) : (
                  <div className="mb-2">
                    <Image className="w-8 h-8 mx-auto" />
                  </div>
                )}
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
