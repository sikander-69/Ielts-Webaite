import React, { useState } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Volume2, 
  PenTool, 
  FileText, 
  Award, 
  Clock, 
  CheckCircle2, 
  MessageCircle,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function PteTemplates({ scrollToSection }) {
  const [selectedTask, setSelectedTask] = useState(0);

  const modules = [
    {
      id: "describe-image",
      title: "Describe Image",
      task: "Speaking Section",
      duration: "40 Seconds (25s prep, 40s speak)",
      target: "Score 79+ / 90 Aligned",
      icon: Volume2,
      scoringTip: "Pearson AI algorithm evaluates 70% of score on Oral Fluency & Pronunciation. No hesitation, pauses, or self-correction.",
      coverage: [
        "Bar charts, line graphs, pie charts, and flowcharts",
        "Acoustic speed management and constant cadence",
        "Sir Yousaf's 3-sentence high-fluency vocal framework"
      ]
    },
    {
      id: "retell-lecture",
      title: "Re-tell Lecture",
      task: "Speaking & Listening Integrated",
      duration: "40 Seconds Speaking",
      target: "Score 79+ / 90 Aligned",
      icon: Volume2,
      scoringTip: "Capturing 5-7 key academic content phrases while sustaining continuous, unhesitating oral flow without filler words.",
      coverage: [
        "Fast audio keyword extraction technique",
        "High-scoring connector phrases for smooth transitions",
        "Targeting optimal 32-36 second speech completion"
      ]
    },
    {
      id: "respond-to-situation",
      title: "Respond to a Situation",
      task: "PTE Core Speaking",
      duration: "40 Seconds Speaking",
      target: "High CLB / 79+ Aligned",
      icon: Volume2,
      scoringTip: "Social tone appropriateness (polite, assertive, or professional) with direct problem resolution and clear outcome.",
      coverage: [
        "Immediate situational context identification",
        "Dual actionable solution delivery",
        "Professional closing etiquette calibrated for CLB 9+"
      ]
    },
    {
      id: "summarize-group-discussion",
      title: "Summarize Group Discussion",
      task: "PTE Core Speaking & Listening",
      duration: "40 Seconds Speaking",
      target: "CLB 9 / High Band Aligned",
      icon: Volume2,
      scoringTip: "Identifying contrasting vs consensus views across multiple speakers with precise discourse markers.",
      coverage: [
        "Multi-speaker viewpoint separation strategy",
        "Balanced discourse transition terminology",
        "Consensus synthesis and crisp conclusion"
      ]
    },
    {
      id: "summarize-spoken-text",
      title: "Summarize the Spoken Text (SST)",
      task: "Listening & Writing",
      duration: "10 Minutes (Strictly 50 - 70 Words)",
      target: "Score 79+ / 90 Aligned",
      icon: FileText,
      scoringTip: "Strict word count compliance (50-70 words). 100% accurate spelling, capitalization, and punctuation required.",
      coverage: [
        "5-phrase content extraction framework",
        "Compound-complex grammatical sentence linking",
        "Error-free proofreading checklist for full marks"
      ]
    },
    {
      id: "summarize-written-text",
      title: "Summarize Written Text (SWT)",
      task: "Reading & Writing",
      duration: "10 Minutes (Single Sentence 5 - 75 Words)",
      target: "Score 79+ / 90 Aligned",
      icon: PenTool,
      scoringTip: "MUST be exactly ONE complete compound/complex sentence ending with a single full stop (.) without run-ons.",
      coverage: [
        "Connecting main ideas via subordinating conjunctions",
        "Ideal sweet-spot target length (35-45 words)",
        "Eliminating comma splices and punctuation penalties"
      ]
    },
    {
      id: "essay-writing",
      title: "Essay Writing (Write Essay)",
      task: "Writing Section (WE)",
      duration: "20 Minutes (200 - 300 Words)",
      target: "Score 79+ / 90 Aligned",
      icon: BookOpen,
      scoringTip: "Standard 4-paragraph structure with academic lexical range, cohesive devices, and formal stance.",
      coverage: [
        "Opinion, Discussion, and Problem-Solution structures",
        "Band 9 academic linking words & collocations",
        "Optimal 220-260 word count sweet-spot for zero penalties"
      ]
    }
  ];

  const current = modules[selectedTask];
  const CurrentIcon = current.icon;

  return (
    <section id="pte-templates" className="py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PTE Academic & Core Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001475] tracking-tight">
            PTE 79+ Template Names & Modules
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Sir Muhammad Yousaf's tested module frameworks optimized for Pearson's AI automated scoring algorithms across all test sections.
          </p>
        </div>

        {/* Task Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedTask(idx)}
                className={`px-4 py-3 rounded-xl border text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedTask === idx
                    ? 'bg-[#001475] border-[#001475] text-white shadow-md'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{m.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Module Details Card */}
        <div className="sleek-card p-6 sm:p-10 border border-slate-200 rounded-2xl bg-white shadow-sleek">
          
          {/* Card Top Details */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-red-50 text-[#e00000] border border-red-100">
                  {current.task}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-[#001475]">
                  {current.duration}
                </span>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  {current.target}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#001475]">
                {current.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToSection('booking')}
                className="btn-primary text-xs px-5 py-3 rounded-xl flex items-center gap-2 font-bold uppercase tracking-wider shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Practice 1-on-1 with Sir Yousaf</span>
              </button>
            </div>
          </div>

          {/* Scoring Insight */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm mb-6 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block mb-0.5">Pearson AI Scoring Engine Criteria:</strong>
              <p className="text-amber-800 leading-relaxed text-xs">{current.scoringTip}</p>
            </div>
          </div>

          {/* Core Framework & Rubric Focus */}
          <div className="space-y-4 mb-6">
            <h4 className="text-xs font-bold text-[#001475] uppercase tracking-wider">
              Sir Yousaf's Strategy Points for {current.title}:
            </h4>
            <div className="grid sm:grid-cols-3 gap-3">
              {current.coverage.map((point, pIdx) => (
                <div key={pIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-semibold flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Confidential Proprietary Formula Notice */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-[#e00000] flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-[#001475] block font-bold">1-on-1 Formula Practice Sessions:</strong>
                <span>Exact fill-in formulas and personalized live computer mock practice are provided directly in Sir Yousaf's coaching sessions.</span>
              </div>
            </div>

            <a
              href="https://whatsapp.com/channel/0029Vb6UJdeEgGfFWkFHLS16"
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-xs px-4 py-2.5 rounded-xl font-bold flex items-center gap-1.5 text-emerald-700 border-emerald-300 hover:bg-emerald-50 shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Inquire on WhatsApp Channel</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
