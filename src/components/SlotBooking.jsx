import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen,
  MapPin,
  AlertCircle
} from 'lucide-react';
import { sanitizeInput, isValidEmail, isValidPhone, checkRateLimit, recordSubmission } from '../utils/security';

export default function SlotBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseTrack: 'IELTS Academic',
    mode: 'Campus (Architect Society Lahore)',
    preferredDate: '',
    preferredTime: '11:00 AM - 01:00 PM',
    notes: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [bookingStatus, setBookingStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingStatus(null);

    // Sanitization & Security Validation
    const name = sanitizeInput(formData.name);
    const email = sanitizeInput(formData.email);
    const phone = sanitizeInput(formData.phone);
    const notes = sanitizeInput(formData.notes);

    if (!name || name.length < 2) {
      setBookingStatus({ type: 'error', text: 'Security Warning: Please enter a valid full name.' });
      return;
    }
    if (!isValidEmail(email)) {
      setBookingStatus({ type: 'error', text: 'Security Warning: Please enter a valid email address.' });
      return;
    }
    if (!isValidPhone(phone)) {
      setBookingStatus({ type: 'error', text: 'Security Warning: Please enter a valid phone number.' });
      return;
    }

    // Rate limiting check
    const rateCheck = checkRateLimit('slot_booking');
    if (!rateCheck.allowed) {
      setBookingStatus({ type: 'error', text: rateCheck.message });
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      recordSubmission('slot_booking');
      setSubmitting(false);
      setBookingStatus({
        type: 'success',
        text: `Assessment Slot Confirmed for ${name}! Sir Yousaf's team will call/WhatsApp you on ${phone} to confirm your timing.`
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        courseTrack: 'IELTS Academic',
        mode: 'Campus (Architect Society Lahore)',
        preferredDate: '',
        preferredTime: '11:00 AM - 01:00 PM',
        notes: ''
      });
    }, 1200);
  };

  return (
    <section id="booking" className="py-20 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-[#e00000] uppercase tracking-wider">
            Free 1-on-1 Evaluation Slot
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001475]">
            Book Your Diagnostic Assessment
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Get your current speaking fluency and writing sample evaluated directly by Sir Muhammad Yousaf before starting your preparation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="sleek-card p-6 sm:p-10 border border-slate-100 rounded-2xl bg-white shadow-sleek space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-[#e00000]">
                  Assessment Reservation Form
                </h3>
                <p className="text-xs text-slate-500">
                  Select your preferred mode, track, and timing
                </p>
              </div>
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Slots Open Today
              </span>
            </div>

            {bookingStatus && (
              <div className={`p-4 rounded-xl text-xs flex items-start gap-2.5 ${
                bookingStatus.type === 'success' 
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {bookingStatus.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                )}
                <div className="font-medium">{bookingStatus.text}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-[#001475] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Usman Chaudhry"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#001475] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="usman@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#001475] mb-1">
                    WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="03001234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>
              </div>

              {/* Course Track & Mode */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#001475] mb-1">
                    Select Course Track
                  </label>
                  <select
                    value={formData.courseTrack}
                    onChange={(e) => setFormData({ ...formData, courseTrack: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                  >
                    <option value="IELTS Academic">IELTS Academic (7.5+ Target)</option>
                    <option value="IELTS General">IELTS General (Canada PR)</option>
                    <option value="PTE Academic">PTE Academic (79+ Guarantee)</option>
                    <option value="Spoken English">Spoken English & Accent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#001475] mb-1">
                    Class Mode
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                  >
                    <option value="Campus (Architect Society Lahore)">Campus Physical Class (Lahore)</option>
                    <option value="Online Live Zoom">Online Live Zoom Batch</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#001475] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#001475] mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                  >
                    <option value="11:00 AM - 01:00 PM">Morning: 11:00 AM - 01:00 PM</option>
                    <option value="03:00 PM - 05:00 PM">Afternoon: 03:00 PM - 05:00 PM</option>
                    <option value="07:00 PM - 09:00 PM">Evening Batch: 07:00 PM - 09:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-primary py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-red-glow flex items-center justify-center gap-2 mt-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{submitting ? 'Confirming Slot...' : 'Confirm Assessment Booking'}</span>
              </button>

              <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>No registration fee for initial diagnostic assessment session</span>
              </div>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
