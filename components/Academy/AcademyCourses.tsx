import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../../constants';
import { BookOpen, ArrowRight } from 'lucide-react';

export const AcademyCourses: React.FC = () => {
  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen pb-20">
      <div className="bg-academy-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
           <h1 className="text-4xl font-bold mb-4">All Courses</h1>
           <p className="text-academy-100 text-lg">Explore our comprehensive curriculum designed for industry excellence.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
            {COURSES.map((course) => (
               <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col hover:shadow-lg transition">
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
                      <Link to={`/academy/courses/${course.id}`} className="text-academy-600 font-semibold hover:underline flex items-center gap-1">
                        View Details <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
               </div>
            ))}
        </div>
      </div>
    </div>
  );
};