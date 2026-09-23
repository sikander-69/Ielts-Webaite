import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Trainer' },
    { id: 'courses', label: 'Courses' },
    { id: 'international', label: 'International Students', badge: 'Online' },
    { id: 'pte-templates', label: 'PTE Modules' },
    { id: 'testimonials', label: 'Student Reviews' },
    { id: 'tools', label: 'Calculator' },
    { id: 'contact', label: 'Location' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'sleek-nav py-3' 
        : 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Unframed Client Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="flex items-center group cursor-pointer py-0.5 focus:outline-none"
            aria-label="EASY IELTS & PTE Global Education"
          >
            <img 
              src="/client_main_logo_transparent.png" 
              alt="EASY IELTS & PTE Global Education" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]" 
            />
          </a>

          {/* Clean Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-bold text-[#001475]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors relative py-1 hover:text-[#e00000] flex items-center ${
                  activeSection === link.id
                    ? 'text-[#e00000] font-extrabold'
                    : 'text-[#001475]'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="ml-1 px-1.5 py-0.5 text-[9px] font-extrabold uppercase rounded bg-red-50 text-[#e00000] border border-red-100">
                    {link.badge}
                  </span>
                )}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e00000] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Single Clean Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('booking')}
              className="btn-primary text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-sm font-bold uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Assessment</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-[#001475] hover:bg-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 mt-3 shadow-xl space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-bold ${
                activeSection === link.id
                  ? 'bg-[#001475] text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                scrollToSection('booking');
                setMobileMenuOpen(false);
              }}
              className="w-full btn-primary text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 font-bold uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Assessment Slot</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
