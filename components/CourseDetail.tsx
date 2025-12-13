import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../constants';
import { CheckCircle2, Clock, BarChart } from 'lucide-react';

export const CourseDetail: React.FC = () => {
  const { id } = useParams();
  const course = COURSES.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-800">Course Not Found</h2>
        <Link to="/academy/courses" className="text-academy-600 mt-4 hover:underline">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-academy-600 font-bold tracking-wide text-sm uppercase mb-2 block">{course.category}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{course.title}</h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">{course.fullDescription}</p>
          
          <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-500 mb-8">
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded">
              <Clock size={16} /> {course.duration}
            </div>
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded">
              <BarChart size={16} /> {course.level}
            </div>
          </div>

          <Link to="/contact" className="bg-academy-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-academy-700 transition inline-flex items-center gap-2">
            Enroll Now
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Curriculum</h3>
          <div className="space-y-4">
            {course.modules.map((mod, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-academy-500 uppercase">Module {idx + 1}</span>
                    <h4 className="font-bold text-lg text-slate-800">{mod.title}</h4>
                  </div>
                  <span className="text-sm text-slate-400">{mod.duration}</span>
                </div>
                <ul className="space-y-2">
                  {mod.topics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle2 size={14} className="text-green-500" /> {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm sticky top-24">
            <h3 className="font-bold text-slate-900 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {course.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};