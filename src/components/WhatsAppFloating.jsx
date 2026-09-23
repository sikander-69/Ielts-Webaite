import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloating() {
  const [openTooltip, setOpenTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Popover Bubble */}
      {openTooltip && (
        <div className="mb-3 p-3.5 rounded-2xl bg-white border border-emerald-200 shadow-xl text-slate-900 text-xs max-w-xs animate-fade-in-up relative">
          <button 
            onClick={() => setOpenTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-700"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <strong className="text-emerald-700 font-bold">Sir Muhammad Yousaf Desk</strong>
          </div>
          <p className="text-slate-600 text-[11px] leading-snug">
            Need guidance on IELTS vs PTE or class timings? Join Sir Muhammad Yousaf's official WhatsApp Channel!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://whatsapp.com/channel/0029Vb6UJdeEgGfFWkFHLS16"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 transition-transform relative group"
        aria-label="Official WhatsApp Channel"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />
      </a>

    </div>
  );
}
