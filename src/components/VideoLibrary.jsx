import React from 'react';
import { Youtube, Play, ExternalLink } from 'lucide-react';

export default function VideoLibrary() {
  const videos = [
    {
      title: "How to Score Band 8.0+ in IELTS Speaking Part 2",
      channel: "@usafsanii YouTube",
      duration: "14:20",
      desc: "Sir Yousaf demonstrates live cue card planning and fluency techniques."
    },
    {
      title: "PTE Read Aloud 79+ Fluency Secrets",
      channel: "@usafsanii YouTube",
      duration: "18:45",
      desc: "Stop pausing! AI algorithm secrets for PTE oral fluency & pronunciation."
    },
    {
      title: "IELTS Writing Task 2 Complex Sentence Structures",
      channel: "@usafsanii YouTube",
      duration: "12:10",
      desc: "Learn 5 band-boosting sentence templates for essay coherence."
    }
  ];

  return (
    <section id="videos" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-[#e00000] uppercase tracking-wider">
            Video Lectures & Tips
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001475]">
            Watch Free Video Lessons
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Subscribe to Sir Muhammad Yousaf's official YouTube channel <strong className="text-red-600">@usafsanii</strong> for weekly test tips, exam reviews, and band score secrets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <div 
              key={idx}
              className="sleek-card p-4 border border-slate-100 rounded-2xl bg-white shadow-sleek hover:border-red-100 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-900 flex items-center justify-center group cursor-pointer">
                <img 
                  src="/hero_banner.jpg" 
                  alt={vid.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform"
                />
                <a
                  href="https://www.youtube.com/@usafsanii"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </a>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {vid.duration}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-red-600 font-bold">
                  <Youtube className="w-4 h-4" />
                  <span>{vid.channel}</span>
                </div>
                <h3 className="font-bold text-[#001475] text-sm">
                  {vid.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {vid.desc}
                </p>
              </div>

              <a
                href="https://www.youtube.com/@usafsanii"
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-xs py-2 rounded-xl flex items-center justify-center gap-2 font-bold text-red-600 border-red-200 hover:bg-red-50"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
