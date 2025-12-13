import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../constants';
import { ArrowUpRight, TrendingUp, Search, Palette } from 'lucide-react';

export const AgencyHome: React.FC = () => {
  return (
    <div className="animate-fade-in bg-slate-900 text-slate-200">
      {/* Hero */}
      <section className="relative py-32 px-6">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-900/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-none">
            Digital Growth <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-agency-500 to-purple-400">Accelerated.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mb-12 font-light">
            We are a data-first digital agency. We blend creative storytelling with rigorous analytics to scale brands in the modern economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition text-center">
              Start a Project
            </Link>
            <Link to="/agency/services" className="border border-slate-700 text-white px-8 py-4 rounded-full font-semibold hover:border-agency-500 transition flex items-center justify-center gap-2">
              Our Services <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Scroller */}
      <section className="py-24 border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
               <h2 className="text-sm font-bold text-agency-500 uppercase tracking-widest mb-2">What We Do</h2>
               <h3 className="text-3xl md:text-4xl font-bold text-white">Comprehensive Solutions</h3>
            </div>
            <Link to="/agency/services" className="text-slate-400 hover:text-white hidden md:block">View All</Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-agency-600 transition group">
                <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit group-hover:bg-agency-600 group-hover:text-white transition-colors text-agency-400">
                   {service.iconName === 'Search' && <Search size={24} />}
                   {service.iconName === 'TrendingUp' && <TrendingUp size={24} />}
                   {service.iconName === 'Palette' && <Palette size={24} />}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-slate-400 mb-6 line-clamp-2">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0,2).map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-agency-500"></div> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics / Social Proof */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
           <div>
             <div className="text-4xl font-bold text-white mb-2">200+</div>
             <div className="text-slate-500 text-sm uppercase tracking-wide">Clients Scaled</div>
           </div>
           <div>
             <div className="text-4xl font-bold text-white mb-2">15x</div>
             <div className="text-slate-500 text-sm uppercase tracking-wide">Avg ROI</div>
           </div>
           <div>
             <div className="text-4xl font-bold text-white mb-2">50M+</div>
             <div className="text-slate-500 text-sm uppercase tracking-wide">Ad Spend Managed</div>
           </div>
           <div>
             <div className="text-4xl font-bold text-white mb-2">24/7</div>
             <div className="text-slate-500 text-sm uppercase tracking-wide">Support</div>
           </div>
        </div>
      </section>
    </div>
  );
};