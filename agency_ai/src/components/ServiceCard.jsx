import React, { useState } from 'react';

const ServiceCard = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl 
                 border border-gray-200 dark:border-gray-700 
                 shadow-2xl shadow-gray-100 dark:shadow-white/10 
                 hover:border-blue-500 transition-colors duration-300"
      onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {/* Gradient background */}
      <div
        className={`pointer-events-none blur-2xl rounded-full 
                    bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
                    w-[300px] h-[300px] absolute transition-opacity duration-500 
                    ${visible ? 'opacity-70' : 'opacity-0'}`}
        style={{ top: position.y - 150, left: position.x - 150, zIndex: 0 }}
      ></div>

      {/* Card content */}
      <div className="flex items-center gap-10 p-8 transition-all rounded-[10px] 
                      bg-white dark:bg-gray-900 relative z-10">
        <div>
          <img
            src={service.icon}
            alt={service.title}
            className="w-24 h-24 bg-white dark:bg-gray-900 rounded-full m-2"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold">{service.title}</h3>
          <p className="text-sm mt-2">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
