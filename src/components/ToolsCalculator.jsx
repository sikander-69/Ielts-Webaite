import React, { useState } from 'react';
import { Calculator, Award, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function ToolsCalculator({ scrollToSection }) {
  const [activeTab, setActiveTab] = useState('ielts');
  const [rawScore, setRawScore] = useState(30); // 0 - 40 for IELTS
  const [pteScore, setPteScore] = useState(65); // 10 - 90 for PTE

  // Calculate IELTS Band from raw score out of 40
  const getIELTSBand = (score) => {
    if (score >= 39) return { band: '9.0', level: 'Expert User' };
    if (score >= 37) return { band: '8.5', level: 'Very Good User' };
    if (score >= 35) return { band: '8.0', level: 'Very Good User' };
    if (score >= 33) return { band: '7.5', level: 'Good User' };
    if (score >= 30) return { band: '7.0', level: 'Good User' };
    if (score >= 27) return { band: '6.5', level: 'Competent User' };
    if (score >= 23) return { band: '6.0', level: 'Competent User' };
    if (score >= 19) return { band: '5.5', level: 'Modest User' };
    if (score >= 15) return { band: '5.0', level: 'Modest User' };
    return { band: '4.5', level: 'Limited User' };
  };

  // Convert PTE score to equivalent IELTS band
  const getPTEToIELTS = (score) => {
    if (score >= 86) return { ielts: '9.0', visa: 'Maximum Australia PR Points (20 pts)' };
    if (score >= 79) return { ielts: '8.0', visa: 'Superior English - 20 Points Australia / UK Work' };
    if (score >= 65) return { ielts: '7.0', visa: 'Proficient English - 10 Points Australia / UK / NZ' };
    if (score >= 58) return { ielts: '6.5', visa: 'Competent English - University Direct Admissions' };
    if (score >= 50) return { ielts: '6.0', visa: 'Standard University Undergraduate Requirement' };
    return { ielts: '5.5', visa: 'Foundation Pathway Course Requirement' };
  };

  const ieltsResult = getIELTSBand(rawScore);
  const pteResult = getPTEToIELTS(pteScore);

  return (
    <section id="tools" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-[#e00000] uppercase tracking-wider">
            Interactive Band Score Tools
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001475]">
            IELTS & PTE Score Calculators
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Instantly convert your raw practice scores into official IELTS Bands and PTE score equivalencies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="sleek-card p-6 sm:p-10 border border-slate-100 rounded-2xl bg-white shadow-sleek space-y-8">
            
            {/* Tab Selector */}
            <div className="flex items-center justify-center gap-3 border-b border-slate-100 pb-4">
              <button
                onClick={() => setActiveTab('ielts')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'ielts'
                    ? 'bg-[#001475] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                IELTS Raw Score to Band Converter
              </button>
              <button
                onClick={() => setActiveTab('pte')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'pte'
                    ? 'bg-[#001475] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                PTE Score to IELTS Equivalency
              </button>
            </div>

            {/* IELTS Calculator */}
            {activeTab === 'ielts' && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#e00000]">
                    Select Raw Correct Answers (Out of 40)
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-[#001475]">
                      <span>Correct Answers:</span>
                      <span className="text-[#e00000] text-base">{rawScore} / 40</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="40"
                      value={rawScore}
                      onChange={(e) => setRawScore(parseInt(e.target.value, 10))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#e00000]"
                    />
                  </div>
                  <p className="text-xs text-slate-500">
                    Applies to IELTS Reading (Academic & GT) and IELTS Listening raw mark conversions.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Calculated Result
                  </span>
                  <div className="text-5xl font-black text-[#001475]">
                    Band {ieltsResult.band}
                  </div>
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#e00000] border border-red-100">
                    {ieltsResult.level}
                  </span>
                  <p className="text-xs text-slate-600 pt-2">
                    Want to achieve Band 8.0+? Book a free diagnostic speaking & writing feedback session with Sir Yousaf.
                  </p>
                </div>
              </div>
            )}

            {/* PTE Calculator */}
            {activeTab === 'pte' && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#e00000]">
                    Select Overall PTE Academic Score
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-[#001475]">
                      <span>PTE Score:</span>
                      <span className="text-[#001475] text-base">{pteScore} / 90</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="90"
                      value={pteScore}
                      onChange={(e) => setPteScore(parseInt(e.target.value, 10))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#001475]"
                    />
                  </div>
                  <p className="text-xs text-slate-500">
                    Calculated based on official Pearson PTE to IELTS Band equivalency chart.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    IELTS Equivalent
                  </span>
                  <div className="text-5xl font-black text-[#001475]">
                    Band {pteResult.ielts}
                  </div>
                  <div className="text-xs font-bold text-slate-700 pt-1">
                    {pteResult.visa}
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 text-center">
              <button
                onClick={() => scrollToSection('booking')}
                className="btn-primary text-xs px-6 py-3 rounded-xl uppercase font-bold tracking-wider inline-flex items-center gap-2"
              >
                <span>Book Detailed Band Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
