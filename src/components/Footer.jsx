import React from 'react';
import { 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Youtube, 
  Instagram, 
  Facebook,
  MessageCircle, 
  ArrowUp,
  ShieldCheck
} from 'lucide-react';

export default function Footer({ scrollToSection, onOpenAdmin }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001475] text-white pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/client_main_logo_white.png" 
                alt="EASY IELTS & PTE Global Education" 
                className="h-12 w-auto object-contain" 
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Premier IELTS & PTE preparation academy led by Certified Trainer <strong className="text-white">Sir Muhammad Yousaf</strong>. Guaranteed band score strategies, 1-on-1 speaking evaluations, and study visa counseling.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official IDP & Pearson Aligned Institute</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-[#e00000] text-sm uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Trainer Yousaf</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('courses')} className="hover:text-white transition-colors">Courses & Band Scores</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('international')} className="hover:text-white transition-colors text-emerald-400 font-semibold">International Students Portal</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('queries')} className="hover:text-white transition-colors">Student Query Feed (Formspree)</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('tools')} className="hover:text-white transition-colors">Band Calculator</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Lahore Campus & Map</button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-[#e00000] text-sm uppercase tracking-wider">
              Academy Campus
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e00000] shrink-0 mt-0.5" />
                <span>Architect Society, B Block, near Basharat Chowk, Lahore, Pakistan.</span>
              </p>
              <a 
                href="https://whatsapp.com/channel/0029Vb6UJdeEgGfFWkFHLS16"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Official WhatsApp Channel (Join Direct)</span>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://www.facebook.com/share/1Difxa4uov/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                title="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@usafsanii"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#e00000] text-white flex items-center justify-center transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vb6UJdeEgGfFWkFHLS16"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                title="WhatsApp Channel"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://www.instagram.com/usafsanii?igsh=OW8yOTVkYnM0YWVx"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p onDoubleClick={onOpenAdmin} className="cursor-default select-none">
            © {currentYear} EASY IELTS / PTE Global Education. All rights reserved. Head Trainer: Sir Muhammad Yousaf
            <span onClick={onOpenAdmin} className="text-slate-800 hover:text-slate-500 cursor-pointer ml-1" title="Teacher Admin Portal">•</span>
          </p>
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
