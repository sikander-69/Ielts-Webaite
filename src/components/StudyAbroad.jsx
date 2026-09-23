import React, { useState } from 'react';
import { 
  Globe2, 
  GraduationCap, 
  FileCheck2, 
  Compass, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Plane, 
  Building2, 
  Send,
  MessageCircle,
  Clock,
  Sparkles
} from 'lucide-react';

export default function StudyAbroad({ scrollToSection }) {
  const [activeCountry, setActiveCountry] = useState(0);

  const services = [
    {
      title: "Profile Assessment",
      icon: FileCheck2,
      tagline: "Comprehensive Evaluation",
      desc: "Detailed academic background, English proficiency score, budget analysis, and gap justification to map the strongest visa pathway."
    },
    {
      title: "University Selection",
      icon: Building2,
      tagline: "Course & Ranking Match",
      desc: "Selection of top recognized universities offering high acceptance rates, scholarships, and post-study work permit eligibility."
    },
    {
      title: "Application Processing",
      icon: Compass,
      tagline: "End-to-End Filing",
      desc: "Speedy admission letter processing, offer letter tracking, CAS / I-20 issuance, and complete university portal coordination."
    },
    {
      title: "SOP / Documents Preparation",
      icon: FileText,
      tagline: "Visa-Winning SOPs",
      desc: "Tailored Statements of Purpose (SOP), letters of recommendation, CV restructuring, and financial affidavit proofing."
    },
    {
      title: "Visa Documentation Guidance",
      icon: ShieldCheck,
      tagline: "Interview & File Prep",
      desc: "Complete embassy checklist, bank statement verification, mock visa interview drills, and biometric submission assistance."
    }
  ];

  const countries = [
    {
      name: "United Kingdom (UK)",
      short: "UK",
      flag: "🇬🇧",
      highlight: "Students' 1st Choice Destination",
      features: ["2-Year Post Study Work (PSW)", "Without IELTS options (ELLT / MOI)", "Fast CAS Turnaround", "Top Global Russell Group Unis"],
      popularIntakes: "Sept / Jan / May"
    },
    {
      name: "United States (USA)",
      short: "USA",
      flag: "🇺🇸",
      highlight: "STEM OPT & Ivy League Prestige",
      features: ["Up to 3-Year STEM OPT", "Merit-based institutional scholarships", "Diverse campus cultures", "Flexible course credit options"],
      popularIntakes: "Fall / Spring"
    },
    {
      name: "Australia",
      short: "Australia",
      flag: "🇦🇺",
      highlight: "Top PR Pathways & High Wages",
      features: ["Subclass 500 Student Visa", "Post-study work rights up to 4 years", "Regional area PR incentives", "High part-time earning potential"],
      popularIntakes: "Feb / July / Nov"
    },
    {
      name: "Germany",
      short: "Germany",
      flag: "🇩🇪",
      highlight: "Tuition-Free Public Education",
      features: ["Low/Zero tuition at top public universities", "18-month job seeker visa", "Europe's largest economy", "English-taught Master's degrees"],
      popularIntakes: "Winter / Summer"
    },
    {
      name: "Cyprus",
      short: "Cyprus",
      flag: "🇨🇾",
      highlight: "Affordable European Gateway",
      features: ["High visa success ratio", "Affordable living & tuition packages", "Fast track application processing", "Schengen travel access"],
      popularIntakes: "Feb / Oct"
    },
    {
      name: "Malaysia",
      short: "Malaysia",
      flag: "🇲🇾",
      highlight: "UK & Australian Twinning Programs",
      features: ["Affordable world-class campus degrees", "Zero currency friction", "Safe multicultural student environment", "Direct transfer programs"],
      popularIntakes: "March / July / Oct"
    },
    {
      name: "Turkey",
      short: "Turkey",
      flag: "🇹🇷",
      highlight: "Bologna Accord Recognized Degrees",
      features: ["Government Turkiye Burslari scholarships", "European credit transfer system (ECTS)", "No complex financial proofing", "Modern campuses"],
      popularIntakes: "Fall / Spring"
    },
    {
      name: "Finland",
      short: "Finland",
      flag: "🇫🇮",
      highlight: "World's #1 Education System",
      features: ["Permanent residency track for graduates", "Generous student spouse work rights", "English-taught tech & business degrees", "High standard of living"],
      popularIntakes: "Autumn / Spring"
    }
  ];

  return (
    <section id="study-abroad" className="py-20 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Official Global Education Desk</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001475] tracking-tight">
            Study Abroad Consultancy
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From initial profile assessment to visa grant, Sir Muhammad Yousaf's Global Education team guides you through verified admissions across premier international destinations.
          </p>
        </div>

        {/* 5 Core Consultancy Services */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-[#e00000] uppercase tracking-wider">5-Step Success Framework</span>
              <h3 className="text-2xl font-black text-[#001475] mt-0.5">Comprehensive Student Visa Services</h3>
            </div>
            <button
              onClick={() => scrollToSection('booking')}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-[#001475] hover:text-[#e00000] transition-colors"
            >
              <span>Book Profile Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div 
                  key={idx}
                  className="sleek-card p-5 border border-slate-100 rounded-2xl bg-white shadow-sleek hover:border-red-200 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 text-[#001475] group-hover:bg-[#e00000] group-hover:text-white transition-all flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      Step 0{idx + 1}
                    </span>
                    <h4 className="font-bold text-[#001475] text-base leading-snug">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#e00000]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{srv.tagline}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Destinations Grid & Interactive Tabs */}
        <div className="sleek-card p-6 sm:p-10 border border-slate-100 rounded-2xl bg-white shadow-sleek">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <Plane className="w-5 h-5 text-[#e00000]" />
                <h3 className="text-xl sm:text-2xl font-black text-[#001475]">
                  Featured Destination Countries
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                UK, USA, Australia, Germany, Cyprus, Malaysia, Turkey, Finland & more
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://whatsapp.com/channel/0029Vb6UJdeEgGfFWkFHLS16"
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 font-bold text-emerald-700 border-emerald-300 hover:bg-emerald-50"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Channel</span>
              </a>
              <button
                onClick={() => scrollToSection('booking')}
                className="btn-primary text-xs px-5 py-2.5 rounded-xl font-bold uppercase tracking-wider"
              >
                Apply for Assessment
              </button>
            </div>
          </div>

          {/* Destination Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
            {countries.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveCountry(i)}
                className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                  activeCountry === i 
                    ? 'border-[#001475] bg-[#001475] text-white shadow-md' 
                    : 'border-slate-200 bg-slate-50 hover:bg-white text-slate-700'
                }`}
              >
                <span className="text-2xl">{c.flag}</span>
                <span className="text-xs font-bold truncate w-full">{c.short}</span>
              </button>
            ))}
          </div>

          {/* Active Country Card Details */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-3xl">{countries[activeCountry].flag}</span>
                  <div>
                    <h4 className="text-2xl font-black text-[#001475]">
                      {countries[activeCountry].name}
                    </h4>
                    <span className="text-xs font-extrabold text-[#e00000]">
                      {countries[activeCountry].highlight}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold text-[#001475] uppercase tracking-wider">
                    Key Highlights & Admissions Benefits:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {countries[activeCountry].features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4 text-center">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Intake Sessions</span>
                  <p className="text-base font-black text-[#001475]">
                    {countries[activeCountry].popularIntakes}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Admissions Status</span>
                  <p className="text-xs font-bold text-emerald-600 bg-emerald-50 py-1 px-2.5 rounded-full inline-block border border-emerald-100">
                    Accepting Applications Now
                  </p>
                </div>

                <button
                  onClick={() => scrollToSection('booking')}
                  className="w-full btn-primary text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 font-bold uppercase tracking-wider"
                >
                  <span>Select {countries[activeCountry].short} Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
