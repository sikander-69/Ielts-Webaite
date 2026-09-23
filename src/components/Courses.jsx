import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Calendar,
  Globe2,
  Award,
  Stethoscope,
  GraduationCap,
  MessageCircle,
  Clock
} from 'lucide-react';

export default function Courses({ scrollToSection }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'ielts_pte', label: 'IELTS & PTE' },
    { id: 'medical', label: 'Healthcare & OET' },
    { id: 'university', label: 'TOEFL, ELLT, Duolingo & LanguageCert' },
    { id: 'spoken', label: 'Spoken English' }
  ];

  const courses = [
    {
      id: "ielts-academic",
      category: "ielts_pte",
      title: "IELTS Academic Intensive",
      target: "Target Band 7.5 - 8.5",
      badge: "Most Popular",
      badgeColor: "bg-red-50 text-[#e00000] border-red-100",
      desc: "Designed for university admissions in UK, Australia, USA, & Europe. Intensive coverage of Academic Reading, Essay Writing, Listening tricks & Speaking mock tests.",
      features: [
        "Daily 1-on-1 Speaking mock interviews",
        "Individual Task 1 & Task 2 essay feedback",
        "Cambridge 1-19 real test practice",
        "Classroom & Online Live Zoom option"
      ],
      duration: "4 Weeks / 8 Weeks Batches"
    },
    {
      id: "ielts-general",
      category: "ielts_pte",
      title: "IELTS General Training",
      target: "Canada & Australia PR (CLB 9)",
      badge: "Express Entry Aligned",
      badgeColor: "bg-blue-50 text-[#001475] border-blue-100",
      desc: "Tailored for Express Entry, Provincial Nominees, & Work Visas requiring CLB 9 (8, 7, 7, 7). Master formal letter writing and general passage speed reading.",
      features: [
        "Proven templates for Formal/Informal letters",
        "Targeted CLB 9 score strategies",
        "Daily vocabulary & grammar corrections",
        "Mock test evaluation report"
      ],
      duration: "4 Weeks Intensive"
    },
    {
      id: "pte-academic",
      category: "ielts_pte",
      title: "PTE Academic & Core (79+)",
      target: "PTE Score 79+ / 90",
      badge: "AI Scoring Engine Aligned",
      badgeColor: "bg-red-50 text-[#e00000] border-red-100",
      desc: "Pearson PTE Academic coaching using automated scoring algorithms. Learn Read Aloud, Repeat Sentence, Summarize Spoken Text, and Describe Image templates.",
      features: [
        "100% verified PTE Exam Templates",
        "Pearson software-simulated lab access",
        "Oral Fluency & Pronunciation mastery",
        "Real repeated exam prediction files"
      ],
      duration: "3 Weeks / 6 Weeks Option"
    },
    {
      id: "toefl-ibt",
      category: "university",
      title: "TOEFL iBT (Internet-Based Test)",
      target: "Target Score 100+ / 120",
      badge: "ETS Official Format",
      badgeColor: "bg-blue-50 text-[#001475] border-blue-100",
      desc: "Comprehensive preparation for American, Canadian, and global universities accepting ETS TOEFL iBT. Master the new 2-hour shorter exam format with confidence.",
      features: [
        "Writing for Academic Discussion templates",
        "Integrated Speaking & note-taking drills",
        "ETS genuine past test papers analysis",
        "High-scoring academic transition phrases"
      ],
      duration: "4 Weeks Intensive"
    },
    {
      id: "oet-medical",
      category: "medical",
      title: "OET (Occupational English Test)",
      target: "Target Grade B / 350+ (All Subtests)",
      badge: "Doctors & Nurses Specialization",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      desc: "Specialized language coaching for Healthcare Professionals (Doctors, Nurses, Pharmacists, Dentists) pursuing registration in UK (GMC, NMC), Australia (AHPRA), & Ireland.",
      features: [
        "Clinical Speaking role-plays with doctor/nurse rubrics",
        "Referral & discharge letter writing corrections",
        "Healthcare patient consultation listening tracks",
        "Medical workplace communication etiquette"
      ],
      duration: "4 Weeks / 6 Weeks Batch"
    },
    {
      id: "oxford-ellt",
      category: "university",
      title: "Oxford ELLT (English Language Level Test)",
      target: "Target Level 7 / 8 (B2 - C1)",
      badge: "100+ UK Universities Accepted",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      desc: "Direct online English test recognized by top UK universities as a rapid IELTS alternative. Fast online preparation covering all 4 automated and live examiner modules.",
      features: [
        "Live examiner Speaking interview preparation",
        "45-minute timed essay writing structuring",
        "Reading & Listening speed-answering tactics",
        "Direct portal score verification guidance"
      ],
      duration: "2 Weeks / 4 Weeks Fast-Track"
    },
    {
      id: "language-cert",
      category: "university",
      title: "LanguageCert International ESOL",
      target: "Target B2 Communicator / C1 Expert",
      badge: "UK Home Office / SELT Approved",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      desc: "Approved for UK Student Visas, Skilled Worker, and Health & Care Worker routes. Fast online exam booking with official results delivered in just 3 business days.",
      features: [
        "SELT and Non-SELT official syllabus coverage",
        "1-on-1 Speaking interview simulation drills",
        "Formal & informal writing task formulas",
        "Exam-day software setup & technical orientation"
      ],
      duration: "2 Weeks Express / 4 Weeks"
    },
    {
      id: "duolingo-english",
      category: "university",
      title: "Duolingo English Test (DET)",
      target: "Target Score 125 - 145+ / 160",
      badge: "4,500+ Global Institutions",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      desc: "Rapid, affordable computer-adaptive test accepted by top universities worldwide. Target high subscores across Production, Literacy, Comprehension, and Conversation.",
      features: [
        "Interactive Reading & Fill in the Blanks tips",
        "Production score booster (Speaking & Writing)",
        "Read Aloud & Listen-Type accuracy practice",
        "Adaptive computer testing algorithms secrets"
      ],
      duration: "2 Weeks / 4 Weeks"
    },
    {
      id: "spoken-english",
      category: "spoken",
      title: "Spoken English & Accent Neutralization",
      target: "Fluency & Confidence",
      badge: "Foundation & Corporate",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
      desc: "Build natural conversational fluency, eliminate hesitation, correct grammar errors, and develop neutral pronunciation for visa interviews, job presentations, and daily life.",
      features: [
        "Public speaking & debate drills",
        "Pronunciation & accent neutralization",
        "Real-world conversation scenarios",
        "Small group interactive practice"
      ],
      duration: "4 Weeks Regular"
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  return (
    <section id="courses" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#e00000] uppercase tracking-wider">
            Preparation Programs
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001475]">
            Target-Driven Preparation Courses
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Expert coaching by Certified Trainer Sir Muhammad Yousaf for IELTS, PTE, TOEFL iBT, OET, Oxford ELLT, LanguageCert, and Duolingo. Physical campus in Lahore & Live Zoom worldwide.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl border text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#001475] border-[#001475] text-white shadow-md'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-[#001475]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div 
              key={course.id}
              className="sleek-card p-6 border border-slate-100 rounded-2xl bg-white shadow-sleek hover:border-red-200 transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                
                {/* Header & Badges */}
                <div className="flex items-start justify-between gap-2">
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                  <span className="text-[11px] font-extrabold text-[#001475] px-2.5 py-0.5 bg-slate-100 rounded-lg shrink-0">
                    {course.target}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#e00000] leading-snug">
                    {course.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {course.desc}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-[#001475] uppercase tracking-wider">What's Covered:</p>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {course.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Duration:</span>
                  </span>
                  <strong className="text-[#001475]">{course.duration}</strong>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => scrollToSection('booking')}
                    className="btn-primary text-[11px] py-2.5 rounded-xl flex items-center justify-center gap-1 font-bold uppercase tracking-wider"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <a
                    href="https://whatsapp.com/channel/0029Vb6UJdeEgGfFWkFHLS16"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline text-[11px] py-2.5 rounded-xl flex items-center justify-center gap-1 font-bold text-emerald-700 border-emerald-300 hover:bg-emerald-50"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
