import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

export const DualLanding: React.FC = () => {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <div className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-slate-900">
      
      {/* Academy Side (Left) */}
      <Link 
        to="/academy"
        className={`relative flex-1 h-1/2 md:h-full transition-all duration-700 ease-in-out cursor-pointer group
          ${hoveredSide === 'right' ? 'md:flex-[0.5] opacity-60' : 'md:flex-1'}
          ${hoveredSide === 'left' ? 'md:flex-[1.5]' : ''}
        `}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 bg-academy-900/90 mix-blend-multiply z-10 transition group-hover:bg-academy-900/80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-8 text-white">
          <div className="bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm group-hover:scale-110 transition duration-500">
            <GraduationCap size={48} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Arkatechinno Academy</h2>
          <p className="max-w-md text-lg text-academy-100 mb-8 opacity-0 md:opacity-100 md:group-hover:opacity-100 transition duration-500 transform translate-y-4 md:group-hover:translate-y-0">
            Launch your career with industry-aligned technical courses.
          </p>
          <span className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm border-b-2 border-transparent group-hover:border-white pb-1 transition">
            Enter Academy <ArrowRight size={16} />
          </span>
        </div>
      </Link>

      {/* Agency Side (Right) */}
      <Link 
        to="/agency"
        className={`relative flex-1 h-1/2 md:h-full transition-all duration-700 ease-in-out cursor-pointer group
          ${hoveredSide === 'left' ? 'md:flex-[0.5] opacity-60' : 'md:flex-1'}
          ${hoveredSide === 'right' ? 'md:flex-[1.5]' : ''}
        `}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 bg-agency-900/90 mix-blend-multiply z-10 transition group-hover:bg-agency-900/80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-8 text-white">
          <div className="bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm group-hover:scale-110 transition duration-500">
            <Briefcase size={48} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Arkatechinno Agency</h2>
          <p className="max-w-md text-lg text-agency-100 mb-8 opacity-0 md:opacity-100 md:group-hover:opacity-100 transition duration-500 transform translate-y-4 md:group-hover:translate-y-0">
            Scale your business with data-driven digital marketing.
          </p>
          <span className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm border-b-2 border-transparent group-hover:border-white pb-1 transition">
            Hire Agency <ArrowRight size={16} />
          </span>
        </div>
      </Link>

      {/* Center Logo / Divider */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:block">
        <div className="bg-white text-slate-900 font-bold text-xl px-4 py-2 rounded shadow-2xl tracking-widest">
          ARKATECHINNO
        </div>
      </div>
    </div>
  );
};