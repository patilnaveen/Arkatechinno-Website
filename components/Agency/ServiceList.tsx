import React from 'react';
import { SERVICES } from '../../constants';
import { Search, TrendingUp, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServiceList: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 animate-fade-in pb-20">
      <div className="py-20 px-6 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-white">Our Services</h1>
            <p className="text-slate-400 text-lg max-w-2xl">End-to-end digital solutions tailored to scale your brand and maximize ROI.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-agency-600 transition group flex flex-col">
                <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit group-hover:bg-agency-600 group-hover:text-white transition-colors text-agency-400">
                   {service.iconName === 'Search' && <Search size={24} />}
                   {service.iconName === 'TrendingUp' && <TrendingUp size={24} />}
                   {service.iconName === 'Palette' && <Palette size={24} />}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-slate-400 mb-6 flex-1">{service.description}</p>
                <div className="mt-auto">
                    <ul className="space-y-3 mb-8">
                    {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-agency-500"></div> {f}
                        </li>
                    ))}
                    </ul>
                    <Link to="/contact" className="w-full block text-center border border-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-agency-600 hover:border-agency-600 transition">
                        Get Started
                    </Link>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};