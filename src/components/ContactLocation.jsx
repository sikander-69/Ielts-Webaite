import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Youtube, 
  Instagram, 
  Facebook,
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Navigation,
  ShieldCheck,
  Mail
} from 'lucide-react';
import { sanitizeInput, isValidEmail, isValidPhone, checkRateLimit, recordSubmission } from '../utils/security';

export default function ContactLocation() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const name = sanitizeInput(formData.name);
    const email = sanitizeInput(formData.email);
    const phone = sanitizeInput(formData.phone);
    const message = sanitizeInput(formData.message);

    if (!name || name.length < 2) {
      setErrorMsg('Security Warning: Please enter a valid name.');
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMsg('Security Warning: Please enter a valid email address.');
      return;
    }
    if (!isValidPhone(phone)) {
      setErrorMsg('Security Warning: Please enter a valid phone number.');
      return;
    }

    const rateCheck = checkRateLimit('contact_form');
    if (!rateCheck.allowed) {
      setErrorMsg(rateCheck.message);
      return;
    }

    recordSubmission('contact_form');
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <span className="text-xs font-bold text-[#e00000] uppercase tracking-wider">
            Campus Location & Inquiries
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001475]">
            Visit Our Lahore Academy
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Located at Architect Society B-Block near Basharat Chowk, Lahore. Drop by for a campus tour or send us an inquiry.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academy Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sleek-card p-6 border border-slate-100 rounded-2xl bg-white shadow-sleek space-y-5">
              
              {/* Prominent Logo & Title */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <img 
                  src="/client_main_logo_transparent.png" 
                  alt="EASY IELTS & PTE Global Education" 
                  className="h-10 w-auto object-contain" 
                />
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-red-50 text-[#e00000] border border-red-100">
                  Certified Campus
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-700 font-medium">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#e00000] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#001475] font-bold block">Campus Address:</strong>
                    Architect Society, B Block, near Basharat Chowk, Lahore, Pakistan.
                  </div>
                </div>

                <a 
                  href="https://whatsapp.com/channel/0029Vb6UJdeEgGfFWkFHLS16"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 hover:text-emerald-700 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <strong className="text-[#001475] font-bold block group-hover:text-emerald-700">Official WhatsApp Channel:</strong>
                    Direct guidance & counseling via Sir Yousaf's Channel.
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#001475] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#001475] font-bold block">Classroom & Lab Hours:</strong>
                    Mon - Sat: 10:00 AM - 09:00 PM PKT
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <p className="text-xs text-[#001475] font-bold">Official Social Media:</p>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://www.facebook.com/share/1Difxa4uov/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold"
                  >
                    <Facebook className="w-4 h-4" /> Facebook (Yousaf Sani)
                  </a>
                  <a
                    href="https://www.youtube.com/@usafsanii"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-red-50 text-[#e00000] hover:bg-red-600 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold"
                  >
                    <Youtube className="w-4 h-4" /> YouTube (@usafsanii)
                  </a>
                  <a
                    href="https://whatsapp.com/channel/0029Vb6UJdeEgGfFWkFHLS16"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp Channel
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Architect+Society+B+block+near+basharat+chowk+Lahore"
              target="_blank"
              rel="noreferrer"
              className="w-full btn-secondary p-4 rounded-xl flex items-center justify-between text-xs font-bold shadow-blue-glow"
            >
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#e00000]" />
                <span>Get Directions on Google Maps</span>
              </div>
              <span className="text-[#e00000]">Open Map</span>
            </a>
          </div>

          {/* Right Column: Google Maps & Direct Message Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="sleek-card p-2 border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sleek">
              <div className="h-[250px] rounded-xl overflow-hidden relative">
                <iframe
                  title="Academy Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13615.123456789!2d74.28!3d31.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901c000000000%3A0x0!2sArchitect+Society+B+Block+Lahore!5e0!3m2!1sen!2spk!4v1700000000000"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

            <div className="sleek-card p-6 sm:p-8 border border-slate-100 rounded-2xl bg-white shadow-sleek space-y-4">
              <h3 className="text-xl font-bold text-[#e00000]">
                Quick Admissions Inquiry
              </h3>

              {formSent ? (
                <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs text-center flex items-center justify-center gap-2 font-bold border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Inquiry received successfully! Sir Yousaf's team will contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-800 text-xs font-semibold border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp / Phone *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                  />

                  <textarea
                    rows="3"
                    required
                    placeholder="Describe your inquiry or target band requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600 resize-none"
                  />

                  <button type="submit" className="btn-primary text-xs px-6 py-3 rounded-xl flex items-center gap-2 font-bold uppercase tracking-wider shadow-red-glow">
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
