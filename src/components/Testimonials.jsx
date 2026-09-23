import React, { useState } from 'react';
import { Star, Award, Plus, CheckCircle2, MessageSquare, X, Send } from 'lucide-react';
import { sanitizeInput, checkRateLimit, recordSubmission } from '../utils/security';

export default function Testimonials({ testimonials, setTestimonials }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    score: 'IELTS Band 7.5',
    target: '',
    review: '',
    stars: 5
  });
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmitReview = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedTarget = sanitizeInput(formData.target);
    const sanitizedReview = sanitizeInput(formData.review);

    if (!sanitizedName || sanitizedName.length < 2) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!sanitizedReview || sanitizedReview.length < 10) {
      setErrorMsg('Please enter a detailed review (at least 10 characters).');
      return;
    }

    const rateCheck = checkRateLimit('student_review_submit');
    if (!rateCheck.allowed) {
      setErrorMsg(rateCheck.message);
      return;
    }

    const newEntry = {
      id: Date.now(),
      name: sanitizedName,
      score: formData.score,
      target: sanitizedTarget || 'IELTS/PTE Student',
      review: sanitizedReview,
      stars: parseInt(formData.stars, 10),
      image: null,
      date: new Date().toISOString().split('T')[0]
    };

    const updated = [newEntry, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem('easy_ielts_testimonials', JSON.stringify(updated));
    recordSubmission('student_review_submit');

    setSuccessMsg('Thank you! Your review has been submitted and added to the student feedback feed.');
    setFormData({
      name: '',
      score: 'IELTS Band 7.5',
      target: '',
      review: '',
      stars: 5
    });

    setTimeout(() => {
      setSuccessMsg('');
      setModalOpen(false);
    }, 2500);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-[#e00000] uppercase tracking-wider">
            Student Feedback & Reviews
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-[#001475]">
            Real Student Success Stories
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Read authentic reviews from students who achieved their target band scores with Sir Muhammad Yousaf.
          </p>

          {/* Public Button for New Students to Leave a Review */}
          <div className="pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary text-xs px-5 py-2.5 rounded-xl font-bold uppercase tracking-wider shadow-red-glow inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Write a Student Review / Share Experience</span>
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((rev, idx) => (
            <div 
              key={rev.id || idx}
              className="sleek-card p-6 sm:p-8 border border-slate-100 rounded-2xl bg-white shadow-sleek hover:border-red-100 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                
                {/* Scorecard Image if uploaded */}
                {rev.image && (
                  <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-100 bg-slate-50 mb-2">
                    <img 
                      src={rev.image} 
                      alt={rev.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.stars || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-red-50 text-[#e00000] border border-red-100">
                    {rev.score}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#001475] text-sm">{rev.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{rev.target}</p>
                </div>
                <Award className="w-6 h-6 text-[#e00000]" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Public Student Review Submission Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 space-y-4 text-slate-800 text-xs">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-lg text-[#001475] flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-red-600" />
                <span>Write Your Student Review</span>
              </h3>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            {successMsg && (
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{successMsg}</span>
              </div>
            )}

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 text-red-800 font-semibold border border-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmitReview} className="space-y-3">
              
              <div>
                <label className="block font-bold text-[#001475] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hammad Hassan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#001475] mb-1">
                    Score / Band Achieved *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. IELTS Band 7.5 or PTE 79+"
                    value={formData.score}
                    onChange={(e) => setFormData({ ...formData, score: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#001475] mb-1">
                    Target University / Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. University of Manchester, UK"
                    value={formData.target}
                    onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#001475] mb-1">
                  Star Rating
                </label>
                <select
                  value={formData.stars}
                  onChange={(e) => setFormData({ ...formData, stars: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                >
                  <option value={5}>5 Stars (★★★★★ Outstanding Experience)</option>
                  <option value={4}>4 Stars (★★★★ Very Good Experience)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#001475] mb-1">
                  Your Review / Experience Details *
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Share your experience studying with Sir Muhammad Yousaf..."
                  value={formData.review}
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:outline-none focus:border-red-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Student Review</span>
              </button>

            </form>

          </div>
        </div>
      )}

    </section>
  );
}
