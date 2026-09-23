import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  GraduationCap, 
  Sparkles, 
  Target, 
  Users, 
  Globe, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  ShieldCheck, 
  FileCheck,
  MessageCircle
} from 'lucide-react';

export default function AboutTrainer({ scrollToSection }) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [activeCertIdx, setActiveCertIdx] = useState(0);

  const trainerPhotos = [
    {
      src: "/trainer_yousaf_office.jpg",
      title: "Executive Desk at Easy IELTS/PTE Campus",
      badge: "Official Campus"
    },
    {
      src: "/trainer_yousaf_desk.png",
      title: "Interactive Classroom & Whiteboard Coaching",
      badge: "Coaching Studio"
    },
    {
      src: "/trainer_yousaf.jpg",
      title: "Sir Muhammad Yousaf - Certified Trainer",
      badge: "Certified Trainer"
    }
  ];

  const highlights = [
    {
      title: "15+ Years Certified Coaching",
      desc: "Deep expertise in IDP IELTS & Pearson PTE evaluation rubrics.",
      icon: Award
    },
    {
      title: "10,000+ Success Stories",
      desc: "Students scoring Band 7.5 to 8.5 & PTE 79+ for UK, Canada, Aus & US.",
      icon: Users
    },
    {
      title: "1-on-1 Daily Evaluations",
      desc: "Personalized essay marking & daily speaking mock interviews.",
      icon: Target
    },
    {
      title: "Architect Society Campus",
      desc: "Physical academy near Basharat Chowk, Lahore + Live Zoom online worldwide.",
      icon: Globe
    }
  ];

  const certificates = [
    {
      id: "cb7e310bf9b74459ab24e85df2385423",
      title: "PTE Academic for Teachers: Introduction to PTE Academic & Scoring",
      module: "Core Scoring & Framework",
      issued: "September 17, 2025",
      issuer: "Pearson PTE",
      url: "https://courses.pearsonpte.com/certificates/cb7e310bf9b74459ab24e85df2385423",
      description: "Official accreditation covering Pearson's AI automated scoring engine, Global Scale of English (GSE), and question-level scoring mechanics."
    },
    {
      id: "2e3d9dfae9894c9a999af572b9326860",
      title: "PTE Academic for Teachers: Reading",
      module: "Reading Section Mastery",
      issued: "September 17, 2025",
      issuer: "Pearson PTE",
      url: "https://courses.pearsonpte.com/certificates/2e3d9dfae9894c9a999af572b9326860",
      description: "Specialized training on Fill in the Blanks (R&W), Re-order Paragraphs, and academic collocation strategies for score 79+."
    },
    {
      id: "3c91fc6f6e42404ca35a5ac2cf626bae",
      title: "PTE Academic for Teachers: Listening",
      module: "Listening & Acoustic Analysis",
      issued: "September 18, 2025",
      issuer: "Pearson PTE",
      url: "https://courses.pearsonpte.com/certificates/3c91fc6f6e42404ca35a5ac2cf626bae",
      description: "Advanced methodology for Summarize Spoken Text (SST), Write From Dictation (WFD), and accent adaptation."
    },
    {
      id: "a92ab88c789543e58ca7b85fbc76c560",
      title: "PTE Academic for Teachers: Scoring Speaking and Writing Questions",
      module: "Speaking & Writing Rubric Calibration",
      issued: "September 20, 2025",
      issuer: "Pearson PTE",
      url: "https://courses.pearsonpte.com/certificates/a92ab88c789543e58ca7b85fbc76c560",
      description: "In-depth calibration on Pearson oral fluency algorithms, pronunciation parameters, and essay lexical metrics."
    },
    {
      id: "6b9a828806e84025bdcefccf4ade0698",
      title: "PTE Academic for Teachers: Writing",
      module: "Academic Writing Pedagogy",
      issued: "September 19, 2025",
      issuer: "Pearson PTE",
      url: "https://courses.pearsonpte.com/certificates/6b9a828806e84025bdcefccf4ade0698",
      description: "Expert instruction in Write Essay (WE) discourse structure, cohesion, and Summarize Written Text single-sentence syntax."
    }
  ];

  const prevCert = () => {
    setActiveCertIdx((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextCert = () => {
    setActiveCertIdx((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const currentCert = certificates[activeCertIdx];

  return (
    <section id="about" className="py-20 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-[#e00000] uppercase tracking-wider">
            Certified Trainer Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001475]">
            Meet Sir Muhammad Yousaf
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Pakistan's Premier IELTS & PTE Specialist with a proven track record of elevating band scores through structured, strategy-driven guidance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Trainer Bio & Interactive Photo Gallery */}
          <div className="lg:col-span-5 space-y-4">
            <div className="sleek-card p-4 border border-slate-100 rounded-2xl bg-white shadow-sleek">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100">
                <img 
                  src={trainerPhotos[activePhotoIdx].src} 
                  alt={trainerPhotos[activePhotoIdx].title} 
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001475]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-[#e00000] text-white uppercase tracking-wider">
                    {trainerPhotos[activePhotoIdx].badge}
                  </span>
                  <h3 className="text-xl font-black text-white mt-1">Sir Muhammad Yousaf</h3>
                  <p className="text-xs text-slate-200">{trainerPhotos[activePhotoIdx].title}</p>
                </div>
              </div>

              {/* Photo Selector Thumbnails */}
              <div className="grid grid-cols-3 gap-2 pt-3">
                {trainerPhotos.map((photo, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => setActivePhotoIdx(pIdx)}
                    className={`relative rounded-lg overflow-hidden h-16 border-2 transition-all ${
                      activePhotoIdx === pIdx 
                        ? 'border-[#e00000] scale-[1.02] shadow-sm' 
                        : 'border-slate-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={photo.src} 
                      alt={photo.badge} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Expertise & Methodology */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#e00000]">
                Why Students Trust EASY IELTS / PTE Global Education
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Most students struggle not due to weak English, but due to lack of understanding of examiner band descriptors and computer algorithms. Sir Yousaf's methodology focuses on precise task fulfillment, Pearson acoustic cadence, and structural fluency.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="sleek-card p-5 border border-slate-100 rounded-xl bg-white shadow-sm hover:border-red-100 transition-all space-y-2"
                  >
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-[#e00000] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#001475] text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Box */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToSection('booking')}
                className="btn-primary text-xs px-6 py-3 rounded-xl uppercase tracking-wider font-bold"
              >
                Book 1-on-1 Assessment Session
              </button>
              
              <button
                onClick={() => scrollToSection('queries')}
                className="btn-outline text-xs px-5 py-3 rounded-xl font-bold"
              >
                Ask Sir Yousaf a Question
              </button>

              <a
                href="https://whatsapp.com/channel/0029Vb6UJdeEgGfFWkFHLS16"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs px-4 py-3 rounded-xl flex items-center gap-1.5 font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current text-emerald-600" />
                <span>Join Official WhatsApp Channel</span>
              </a>
            </div>

          </div>

        </div>

        {/* Pearson PTE Certificates Slide Bar (Carousel) */}
        <div className="sleek-card p-6 sm:p-8 border border-slate-200 rounded-2xl bg-white shadow-sleek">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#e00000] text-xs font-bold mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Pearson PTE Official Teacher Accreditations</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#001475]">
                Verified Pearson PTE Teacher Certificates
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm">
                Demonstrating Sir Muhammad Yousaf's official Pearson teacher training completions and scoring calibration.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevCert}
                className="w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-[#001475] transition-colors"
                aria-label="Previous Certificate"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-bold text-slate-500 px-2">
                {activeCertIdx + 1} / {certificates.length}
              </span>
              <button
                onClick={nextCert}
                className="w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-[#001475] transition-colors"
                aria-label="Next Certificate"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Certificate Card Showcase */}
          <div className="bg-gradient-to-br from-slate-50 to-red-50/30 border border-slate-200 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold flex items-center gap-1.5 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verified Credential
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-[11px] font-bold">
                    {currentCert.module}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white text-slate-600 text-[11px] font-semibold border border-slate-200">
                    Issued: {currentCert.issued}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#001475] leading-snug">
                    {currentCert.title}
                  </h4>
                  <p className="text-xs text-[#e00000] font-bold mt-1">
                    Recipient: Muhammad Yousaf • Certified by Pearson PTE
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentCert.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={currentCert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs px-5 py-2.5 rounded-xl inline-flex items-center gap-2 font-bold shadow-sm"
                  >
                    <span>Verify Live on Pearson PTE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <div className="text-[11px] text-slate-500 font-mono bg-white px-3 py-2 rounded-lg border border-slate-200">
                    Certificate ID: <strong className="text-slate-800">{currentCert.id.slice(0, 16)}...</strong>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#e00000]">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Accreditation Body</span>
                  <h5 className="font-extrabold text-[#001475] text-base">Pearson PTE Courses</h5>
                  <p className="text-[11px] text-slate-500">Official Teacher Training Certificate</p>
                </div>
                <a
                  href={currentCert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#e00000] hover:underline font-bold inline-flex items-center gap-1"
                >
                  <span>Open Official Document</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>

          {/* Certificate Slider Dots & Quick Thumbnails */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {certificates.map((cert, cIdx) => (
              <button
                key={cert.id}
                onClick={() => setActiveCertIdx(cIdx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCertIdx === cIdx
                    ? 'bg-[#001475] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Cert 0{cIdx + 1}: {cert.module.split(' ')[0]}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
