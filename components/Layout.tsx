import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { VerticalType } from '../types';
import { Menu, X, ArrowLeft, GraduationCap, Briefcase } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [vertical, setVertical] = useState<VerticalType>(VerticalType.HUB);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith('/academy')) {
      setVertical(VerticalType.ACADEMY);
    } else if (location.pathname.startsWith('/agency')) {
      setVertical(VerticalType.AGENCY);
    } else {
      setVertical(VerticalType.HUB);
    }
    window.scrollTo(0, 0);
  }, [location]);

  // Dynamic Theme Classes
  const themeColors = {
    [VerticalType.ACADEMY]: 'bg-white border-b border-academy-100 text-academy-900',
    [VerticalType.AGENCY]: 'bg-slate-900 border-b border-slate-800 text-white',
    [VerticalType.HUB]: 'bg-transparent absolute top-0 w-full z-10 text-white',
  };

  const linkColors = {
    [VerticalType.ACADEMY]: 'hover:text-academy-600 text-slate-600',
    [VerticalType.AGENCY]: 'hover:text-agency-400 text-slate-300',
    [VerticalType.HUB]: 'hover:text-white/80',
  };

  const buttonClass = vertical === VerticalType.ACADEMY 
    ? "bg-academy-600 hover:bg-academy-700 text-white"
    : "bg-agency-600 hover:bg-agency-500 text-white";

  if (vertical === VerticalType.HUB) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
      {/* Navbar */}
      <nav className={`sticky top-0 z-50 px-6 py-4 shadow-sm transition-colors duration-300 ${themeColors[vertical]}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/')} 
              className={`p-2 rounded-full transition-colors ${vertical === VerticalType.ACADEMY ? 'hover:bg-academy-50 text-academy-600' : 'hover:bg-slate-800 text-agency-400'}`}
              title="Back to Hub"
            >
              <ArrowLeft size={20} />
            </button>
            
            <Link to={vertical === VerticalType.ACADEMY ? '/academy' : '/agency'} className="flex items-center gap-2 font-bold text-xl tracking-tight">
              {vertical === VerticalType.ACADEMY ? (
                <>
                  <GraduationCap className="text-academy-500" />
                  <span>ARKATECHINNO <span className="text-academy-600">ACADEMY</span></span>
                </>
              ) : (
                <>
                  <Briefcase className="text-agency-500" />
                  <span>ARKATECHINNO <span className="text-agency-500">AGENCY</span></span>
                </>
              )}
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to={vertical === VerticalType.ACADEMY ? '/academy' : '/agency'} className={`font-medium transition ${linkColors[vertical]}`}>Home</Link>
            <Link to={vertical === VerticalType.ACADEMY ? '/academy/courses' : '/agency/services'} className={`font-medium transition ${linkColors[vertical]}`}>
              {vertical === VerticalType.ACADEMY ? 'All Courses' : 'Our Services'}
            </Link>
            <Link to="/contact" className={`px-5 py-2 rounded-full font-semibold shadow-md transition-transform hover:scale-105 ${buttonClass}`}>
              {vertical === VerticalType.ACADEMY ? 'Enroll Now' : 'Hire Us'}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
             {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-6 flex flex-col gap-4 text-slate-800">
             <Link to={vertical === VerticalType.ACADEMY ? '/academy' : '/agency'} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
             <Link to={vertical === VerticalType.ACADEMY ? '/academy/courses' : '/agency/services'} onClick={() => setIsMobileMenuOpen(false)}>
                {vertical === VerticalType.ACADEMY ? 'Courses' : 'Services'}
             </Link>
             <Link to="/contact" className={`text-center py-3 rounded-lg ${buttonClass}`} onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
             </Link>
          </div>
        )}
      </nav>

      <main className={`flex-grow ${vertical === VerticalType.AGENCY ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
        {children}
      </main>

      <footer className={`${vertical === VerticalType.ACADEMY ? 'bg-slate-900 text-slate-300' : 'bg-black text-slate-400'} py-12 px-6`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Arkatechinno Solutions</h3>
            <p>Empowering the future through technical education and digital excellence.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/academy" className="hover:text-white">Academy</Link></li>
              <li><Link to="/agency" className="hover:text-white">Agency</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <p className="mb-2">Hyderabad, Telangana, India</p>
            <p className="mb-2">9849463754</p>
            <p>info@arkatechinno.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};