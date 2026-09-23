import React from 'react';
import { Download, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export default function StudyMaterial({ scrollToSection }) {
  const resources = [
    {
      title: "IELTS Writing Task 2 Formula Guide",
      type: "PDF Resource",
      desc: "Sir Yousaf's 7-structure template for Opinion, Discussion, Problem-Solution, and Advantage-Disadvantage essays.",
      downloads: "4,200+ Downloads"
    },
    {
      title: "PTE 79+ Scoring & Modules Guide",
      type: "PTE Resource",
      desc: "Comprehensive breakdown of Describe Image, Re-tell Lecture, and Summarize Spoken Text scoring metrics and template frameworks.",
      downloads: "5,800+ Downloads"
    },
    {
      title: "IELTS Speaking Part 1, 2, 3 Cue Cards 2026",
      type: "PDF Resource",
      desc: "Latest verified exam cue cards with model Band 8.5 sample answers and topic-specific vocabulary lists.",
      downloads: "6,100+ Downloads"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-[#e00000] uppercase tracking-wider">
            Preparation Library
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001475]">
            Official Study Resources & Guides
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Free prep materials compiled directly by Sir Muhammad Yousaf for IELTS Academic, General, and PTE candidates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((res, idx) => (
            <div 
              key={idx}
              className="sleek-card p-6 border border-slate-100 rounded-2xl bg-white shadow-sleek hover:border-red-100 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-red-50 text-[#e00000] border border-red-100">
                  {res.type}
                </span>
                <h3 className="text-lg font-bold text-[#001475]">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {res.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">{res.downloads}</span>
                <button
                  onClick={() => scrollToSection('queries')}
                  className="btn-outline text-xs px-3.5 py-2 rounded-lg flex items-center gap-1.5 font-bold"
                >
                  <Download className="w-3.5 h-3.5 text-red-600" />
                  <span>Request PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
