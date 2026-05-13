import React from 'react';
import { Play } from 'lucide-react';

interface LatestCardProps {
  tag: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  tagColor?: 'black' | 'green' | 'blue' | 'red';
  isVideo?: boolean;
}

export default function LatestCard({
  tag,
  title,
  date,
  excerpt,
  imageUrl,
  tagColor = 'black',
  isVideo = false,
}: LatestCardProps) {
  
  const colorMap = {
    black: 'text-black',
    green: 'text-[#5b8c5a]',
    blue: 'text-[#4a7c9f]',
    red: 'text-[#8b2323]',
  };

  return (
    <div className="bg-white p-6 md:p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-gray-100">
      <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 mb-4">
        <div className="flex-1">
          <p className={`text-xs font-bold tracking-widest uppercase mb-3 md:mb-4 ${colorMap[tagColor]}`}>
            {tag}
          </p>
          <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-2 md:mb-4 leading-snug">
            {title}
          </h3>
        </div>
        
        {imageUrl && (
          <div className="w-full h-48 md:w-40 md:h-40 flex-shrink-0 relative mb-2 md:mb-0">
            <img src={imageUrl} alt={title} className="w-full h-full object-contain object-left md:object-right-top rounded-sm md:rounded-none" />
            {isVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white">
                  <Play className="w-4 h-4 ml-1 fill-white" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed mt-auto">
        {excerpt}
      </p>
    </div>
  );
}
