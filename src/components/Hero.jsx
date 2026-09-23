import React, { useState } from 'react';
import { 
  Award, 
  Calendar, 
  Calculator, 
  MessageCircle, 
  Play, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  X,
  Star,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export default function Hero({ scrollToSection }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 md:pb-24 bg-white overflow-hidden">
      
      {/* Subtle Background Glow Accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-soft pointer-events-none blur-3xl opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Prominent Logo & Certified Credential Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm text-xs font-bold">
              <img src="/client_main_logo_transparent.png" alt="EASY IELTS & PTE" className="h-6 w-auto object-contain" />
              <span className="text-slate-300">•</span>
              <span className="text-[#001475] font-bold">IDP & Pearson Certified Trainer</span>
            </div>

            {/* Main Headline (Blue for Main Headings) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#001475] leading-[1.12]">
              Achieve Band <span className="text-[#e00000]">8.0+</span> in IELTS & <span className="text-[#001475] underline decoration-[#e00000] decoration-4 underline-offset-4">79+</span> in PTE
            </h1>

            {/* Sub-headline (Red for Subheadings) */}
            <h3 className="text-lg sm:text-xl font-bold text-[#e00000] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Guaranteed Results with Sir Muhammad Yousaf's Proven 1-on-1 Coaching & Daily Speaking Evaluations
            </h3>

            {/* Descriptive Body */}
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Expert classroom & online coaching tailored for study visas, work permits, and PR applications. Located at Architect Society B-Block, Lahore & Live Online.
            </p>

            {/* Credential Pillars */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-slate-700 font-semibold">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>IDP Certified Trainer</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-[#001475]" />
                <span>Pearson PTE Aligned</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">
                <MapPin className="w-4 h-4 text-[#e00000]" />
                <span>Architect Society B-Block, Lahore</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              <button
                onClick={() => scrollToSection('booking')}
                className="w-full sm:w-auto btn-primary px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider shadow-red-glow"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Assessment</span>
              </button>

              <button
                onClick={() => scrollToSection('queries')}
                className="w-full sm:w-auto btn-outline px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold"
              >
                <MessageSquare className="w-4 h-4 text-[#e00000]" />
                <span>Ask Email Query (Formspree)</span>
              </button>

              <a
                href="https://whatsapp.com/channel/0029Vb6UJdeEgGfFWkFHLS16"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-5 py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current text-emerald-600" />
                <span>Official WhatsApp Channel</span>
              </a>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-black text-[#001475] font-heading">
                  15+ Yrs
                </p>
                <p className="text-xs font-semibold text-slate-500">Teaching Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-black text-[#001475] font-heading">
                  10,000+
                </p>
                <p className="text-xs font-semibold text-slate-500">Trained Students</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-black text-[#e00000] font-heading">
                  Band 8.5
                </p>
                <p className="text-xs font-semibold text-slate-500">Proven Highest Band</p>
              </div>
            </div>

          </div>

          {/* Right Column: Executive Hero Card Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="sleek-card rounded-2xl p-2.5 border border-slate-100 shadow-sleek overflow-hidden bg-white">
                <div className="relative h-[380px] sm:h-[420px] rounded-xl overflow-hidden group">
                  <img 
                    src="/hero_banner.jpg" 
                    alt="EASY IELTS/PTE Campus" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001475]/90 via-[#001475]/20 to-transparent" />

                  {/* Play Video Button */}
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#e00000] text-white flex items-center justify-center shadow-red-glow hover:scale-110 transition-transform"
                    aria-label="Play Intro Video"
                  >
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </button>

                  {/* Bottom Bio Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-lg">
                    <div className="flex items-center gap-3.5">
                      <img 
                        src="/trainer_yousaf.jpg" 
                        alt="Sir Muhammad Yousaf" 
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#e00000] shadow-sm"
                      />
                      <div>
                        <h4 className="font-bold text-[#001475] text-sm">Sir Muhammad Yousaf</h4>
                        <p className="text-xs text-[#e00000] font-semibold">IELTS & PTE Certified Trainer</p>
                        <div className="flex items-center gap-1 text-[11px] text-amber-500 mt-0.5 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>5.0 Star Rating (480+ Reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-[#001475] text-white">
              <h3 className="font-bold text-white text-sm">Sir Muhammad Yousaf Class Orientation Intro</h3>
              <button onClick={() => setVideoModalOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed?listType=user_uploads&list=usafsanii"
                title="Sir Muhammad Yousaf"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
