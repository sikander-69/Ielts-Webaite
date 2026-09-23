import React, { useState } from 'react';
import { 
  Globe2, 
  Clock, 
  Laptop, 
  Award, 
  CheckCircle2, 
  MessageCircle, 
  Calendar, 
  ArrowRight, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Compass,
  MapPin
} from 'lucide-react';

export default function InternationalStudents({ scrollToSection }) {
  const [activeZone, setActiveZone] = useState('gulf');

  const timeZones = [
    {
      id: 'australia',
      name: 'Australia & New Zealand',
      region: 'AEDT / AEST (Sydney, Melbourne, Brisbane, Perth)',
      tag: 'PR Points Track (PTE 79+ / 8 Bands)',
      slots: ['06:30 PM - 08:30 PM AEDT', '08:30 PM - 10:30 PM AEDT', 'Weekend Intensive Classes'],
      highlights: 'Tailored for Subclass 189, 190, 491 visas requiring superior English (PTE 79+ for maximum 20 points).'
    },
    {
      id: 'gulf',
      name: 'UAE, Saudi Arabia & Middle East',
      region: 'GST / AST (Dubai, Riyadh, Doha, Kuwait, Muscat)',
      tag: 'Working Professionals Evening Slots',
      slots: ['07:00 PM - 09:00 PM GST', '09:00 PM - 11:00 PM GST', 'Flexible One-on-One Timings'],
      highlights: 'Designed for expatriate professionals, doctors, and engineers balancing tight full-time job routines.'
    },
    {
      id: 'uk_europe',
      name: 'United Kingdom & Europe',
      region: 'GMT / BST / CET (London, Birmingham, Berlin, Dublin)',
      tag: 'NHS / PLAB & Tier 2 Visa Fast-Track',
      slots: ['04:00 PM - 06:00 PM GMT', '07:00 PM - 09:00 PM GMT', 'Custom Weekend Morning Slots'],
      highlights: 'Strict focus on GMC/NMC registration criteria (IELTS 7.5+ or PTE 76+) with rigorous speaking drills.'
    },
    {
      id: 'north_america',
      name: 'Canada & United States',
      region: 'EST / CST / PST (Toronto, Vancouver, Dallas, New York)',
      tag: 'Canada Express Entry (CLB 9/10)',
      slots: ['08:00 AM - 10:00 AM EST', '08:00 PM - 10:00 PM EST', 'Late Evening Live Zoom'],
      highlights: 'Proven strategies for IELTS General & PTE Core to maximize CRS scores for Permanent Residency.'
    }
  ];

  const overseasFeatures = [
    {
      icon: Laptop,
      title: "1-on-1 Live Zoom Coaching",
      desc: "Direct private training sessions with Sir Muhammad Yousaf. Live audio-video interaction, real-time screen sharing, and diagnostic evaluations."
    },
    {
      icon: Clock,
      title: "Flexible Time-Zone Scheduling",
      desc: "Custom batches tailored to Australian, Gulf, British, and North American standard times so your job schedule is never disrupted."
    },
    {
      icon: Zap,
      title: "10-Day Rapid Crash Course",
      desc: "Got a test date in two weeks? Our intensive high-speed bootcamps focus strictly on high-yield question types to elevate your score quickly."
    },
    {
      icon: ShieldCheck,
      title: "24-Hour Express Essay Feedback",
      desc: "Send your essays and written summaries via WhatsApp/email and receive line-by-line grammatical, lexical, and rubric corrections within 24 hours."
    },
    {
      icon: Users,
      title: "Daily Private Speaking Mocks",
      desc: "Overcome accent barriers and speech hesitations through daily 1-on-1 simulated examiner interviews calibrated to IDP and Pearson algorithms."
    },
    {
      icon: Award,
      title: "Verified Global Track Record",
      desc: "Over 3,500+ overseas students trained across 20+ countries securing Band 8.0+ and PTE 79+ on their very first or second attempt."
    }
  ];

  const internationalCountries = [
    { name: "Australia", flag: "🇦🇺", count: "1,200+ Overseas Students" },
    { name: "United Kingdom", flag: "🇬🇧", count: "950+ Overseas Students" },
    { name: "Canada", flag: "🇨🇦", count: "800+ Overseas Students" },
    { name: "United Arab Emirates", flag: "🇦🇪", count: "650+ Overseas Students" },
    { name: "Saudi Arabia", flag: "🇸🇦", count: "400+ Overseas Students" },
    { name: "United States", flag: "🇺🇸", count: "300+ Overseas Students" }
  ];

  const currentZone = timeZones.find(z => z.id === activeZone) || timeZones[0];

  return (
    <section id="international" className="py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#001475] text-xs font-bold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5 text-[#e00000]" />
            <span>Dedicated Overseas Students Portal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001475] tracking-tight">
            Coaching for International Students
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Sir Muhammad Yousaf brings decades of expertise in training expatriates, working professionals, and overseas candidates worldwide via live 1-on-1 Zoom sessions aligned with your local time zone.
          </p>
        </div>

        {/* Global Student Footprint Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {internationalCountries.map((c, i) => (
            <div 
              key={i} 
              className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/70 text-center flex flex-col items-center justify-center space-y-1 hover:border-red-100 transition-all"
            >
              <span className="text-2xl">{c.flag}</span>
              <h4 className="font-bold text-xs text-[#001475]">{c.name}</h4>
              <p className="text-[10px] text-slate-500 font-medium">{c.count}</p>
            </div>
          ))}
        </div>

        {/* 6 Key Benefits for Overseas Candidates */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {overseasFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="sleek-card p-6 border border-slate-100 rounded-2xl bg-white shadow-sleek hover:border-red-200 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#e00000] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#001475] text-base">
                  {feat.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Global Time Zone Scheduler Box */}
        <div className="sleek-card p-6 sm:p-10 border border-slate-200 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-50 shadow-sleek">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
            <div>
              <span className="text-xs font-bold text-[#e00000] uppercase tracking-wider block mb-1">
                Flexible Online Zoom Schedules
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#001475]">
                Select Your Study Time Zone
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Choose your country or region to see available live batch slots and 1-on-1 coaching timings.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://whatsapp.com/channel/0029Vb6UJdeEgGfFWkFHLS16"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs px-5 py-3 rounded-xl flex items-center gap-2 font-bold uppercase tracking-wider shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Join WhatsApp Channel</span>
              </a>
            </div>
          </div>

          {/* Time Zone Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
            {timeZones.map((tz) => (
              <button
                key={tz.id}
                onClick={() => setActiveZone(tz.id)}
                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                  activeZone === tz.id
                    ? 'bg-[#001475] text-white border-[#001475] shadow-md'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="block text-sm">{tz.name}</span>
                <span className="block text-[11px] opacity-75 font-normal truncate mt-0.5">{tz.tag}</span>
              </button>
            ))}
          </div>

          {/* Active Time Zone Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <h4 className="text-xl font-bold text-[#001475]">{currentZone.name}</h4>
                <p className="text-xs text-[#e00000] font-semibold">{currentZone.region}</p>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 w-fit">
                Live Online Slots Open
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {currentZone.highlights}
            </p>

            {/* Slot Timings */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#001475] uppercase tracking-wider block">
                Typical Live Batch & 1-on-1 Slots:
              </span>
              <div className="grid sm:grid-cols-3 gap-3">
                {currentZone.slots.map((slot, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#e00000] shrink-0" />
                    <span>{slot}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToSection('booking')}
                className="btn-primary text-xs px-6 py-3 rounded-xl font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book International Assessment</span>
              </button>

              <a
                href="https://whatsapp.com/channel/0029Vb6UJdeEgGfFWkFHLS16"
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-xs px-5 py-3 rounded-xl font-bold flex items-center gap-2 text-emerald-700 border-emerald-300 hover:bg-emerald-50"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Message on WhatsApp Channel</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
