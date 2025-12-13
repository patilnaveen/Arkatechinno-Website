import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../../constants';
import { BookOpen, ArrowRight, Cpu, Code, Server } from 'lucide-react';

export const AcademyHome: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative bg-academy-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-academy-500/20 text-academy-100 rounded-full text-sm font-semibold mb-4 border border-academy-500/30">
              Launch Your Tech Career
            </span>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Master <span className="text-academy-500">Industry-Ready</span> Skills
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-lg">
              Hands-on training in Embedded Systems, VLSI, and Full Stack Development. 
              Designed by engineers, for future engineers.
            </p>
            <div className="flex gap-4">
              <Link to="/academy/courses" className="bg-academy-600 hover:bg-academy-500 text-white px-8 py-3 rounded-lg font-bold transition">
                View All Courses
              </Link>
              <a href="#stats" className="border border-slate-600 hover:bg-white/5 px-8 py-3 rounded-lg font-semibold transition">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 bg-academy-500/30 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" 
              alt="Students learning" 
              className="relative rounded-2xl shadow-2xl border border-slate-700"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Featured Domains</h2>
          <p className="text-slate-600 mt-4">Select a track to start your specialization</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition group cursor-pointer">
            <div className="w-14 h-14 bg-academy-50 text-academy-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-academy-600 group-hover:text-white transition">
              <Cpu size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Embedded Systems</h3>
            <p className="text-slate-600 mb-4">Firmware, RTOS, and IoT development for modern hardware.</p>
            <Link to="/academy/courses" className="text-academy-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore <ArrowRight size={16} />
            </Link>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition group cursor-pointer">
            <div className="w-14 h-14 bg-academy-50 text-academy-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-academy-600 group-hover:text-white transition">
              <Server size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">VLSI Design</h3>
            <p className="text-slate-600 mb-4">Chip layout, verification, and physical design flows.</p>
            <Link to="/academy/courses" className="text-academy-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore <ArrowRight size={16} />
            </Link>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition group cursor-pointer">
            <div className="w-14 h-14 bg-academy-50 text-academy-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-academy-600 group-hover:text-white transition">
              <Code size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Full Stack Dev</h3>
            <p className="text-slate-600 mb-4">Modern web development with React, Node, and Cloud integration.</p>
            <Link to="/academy/courses" className="text-academy-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="bg-slate-50 py-20 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Trending Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map((course) => (
               <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={course.thumbnailUrl} alt={course.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                       <span className="text-xs font-bold text-academy-600 bg-academy-50 px-2 py-1 rounded uppercase tracking-wide">{course.category}</span>
                       <span className="text-slate-400 text-sm flex items-center gap-1"><BookOpen size={14} /> {course.duration}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 flex-1">{course.shortDescription}</p>
                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                      <Link to={`/academy/courses/${course.id}`} className="text-academy-600 font-semibold hover:underline">Details</Link>
                    </div>
                  </div>
               </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};