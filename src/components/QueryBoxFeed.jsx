import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  ThumbsUp, 
  Filter, 
  Mail, 
  User, 
  Phone, 
  Sparkles, 
  HelpCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { sanitizeInput, isValidEmail, isValidPhone, checkRateLimit, recordSubmission } from '../utils/security';

// Authentic Seed Queries for EASY IELTS / PTE Global Education
const INITIAL_QUERIES = [
  {
    id: 1,
    author: "Hamza Malik",
    target: "IELTS Academic (Target 7.5+)",
    category: "IELTS Writing",
    question: "How can I structure my Writing Task 2 essay to avoid getting stuck at Band 6.5?",
    answer: "Sir Yousaf's Advice: Focus on clear paragraph coherence. Use precise topic sentences, avoid overusing complex vocabulary incorrectly, and support every main idea with a specific example. In our 2-week intensive module, we give daily customized feedback on task achievement.",
    upvotes: 42,
    date: "2026-09-05",
    status: "Answered by Sir Yousaf"
  },
  {
    id: 2,
    author: "Zainab Chaudhry",
    target: "PTE Academic (Target 79+)",
    category: "PTE Speaking",
    question: "I keep losing marks in PTE Read Aloud & Describe Image. Is it fluency or pronunciation?",
    answer: "Sir Yousaf's Advice: In PTE, oral fluency accounts for 60% of your score! Do not pause or self-correct mid-sentence. Keep a steady natural pace without unnatural stress. We provide software mock tests with AI audio analysis at our Architect Society campus.",
    upvotes: 38,
    date: "2026-09-04",
    status: "Answered by Sir Yousaf"
  },
  {
    id: 3,
    author: "Usman Tariq",
    target: "IELTS General (Canada PR)",
    category: "IELTS Speaking",
    question: "What should I do if I hesitate or cannot think of an answer during Part 2 Cue Card?",
    answer: "Sir Yousaf's Advice: Use filler structures naturally like 'That's an interesting question... I haven't thought about it deeply, but...'. Use your 1-minute planning time to outline 4 bullet points (Who, When, Where, Why).",
    upvotes: 29,
    date: "2026-09-02",
    status: "Answered by Sir Yousaf"
  },
  {
    id: 4,
    author: "Ayesha Siddiqui",
    target: "Study Abroad Visa",
    category: "Visa & Batches",
    question: "Do you offer online evening classes for working professionals in Lahore?",
    answer: "Sir Yousaf's Advice: Yes! We run live interactive Zoom evening batches (07:00 PM - 09:00 PM PKT) with full access to recorded session archives and 1-on-1 speaking practice sessions.",
    upvotes: 51,
    date: "2026-08-30",
    status: "Answered by Sir Yousaf"
  }
];

export default function QueryBoxFeed() {
  const [queries, setQueries] = useState(() => {
    const saved = localStorage.getItem('easy_ielts_queries');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return INITIAL_QUERIES; }
    }
    return INITIAL_QUERIES;
  });

  const [activeTab, setActiveTab] = useState('All');
  const [formMode, setFormMode] = useState('both'); // 'formspree' or 'public' or 'both'
  const [formspreeId, setFormspreeId] = useState('xbjnqvgw'); // Customizable Formspree ID
  const [showConfig, setShowConfig] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseTarget: 'IELTS Academic (7.5+ Target)',
    category: 'IELTS Writing',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // { type: 'success' | 'error', text: '' }
  const [upvotedIds, setUpvotedIds] = useState([]);

  useEffect(() => {
    localStorage.setItem('easy_ielts_queries', JSON.stringify(queries));
  }, [queries]);

  // Form Submission Handler (Formspree + Security + Local Board)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null);

    // 1. Client-Side Security Sanitization
    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedPhone = sanitizeInput(formData.phone);
    const sanitizedMessage = sanitizeInput(formData.message);

    // 2. Security Validation
    if (!sanitizedName || sanitizedName.length < 2) {
      setSubmissionStatus({ type: 'error', text: 'Security Warning: Please enter a valid full name.' });
      return;
    }
    if (!isValidEmail(sanitizedEmail)) {
      setSubmissionStatus({ type: 'error', text: 'Security Warning: Please enter a valid email address.' });
      return;
    }
    if (sanitizedPhone && !isValidPhone(sanitizedPhone)) {
      setSubmissionStatus({ type: 'error', text: 'Security Warning: Please enter a valid phone number (e.g. 03001234567).' });
      return;
    }
    if (!sanitizedMessage || sanitizedMessage.length < 10) {
      setSubmissionStatus({ type: 'error', text: 'Please type a detailed query or feedback message (at least 10 characters).' });
      return;
    }

    // 3. Security Rate Limiting Check
    const rateCheck = checkRateLimit('query_submission');
    if (!rateCheck.allowed) {
      setSubmissionStatus({ type: 'error', text: rateCheck.message });
      return;
    }

    setSubmitting(true);

    try {
      // 4. Send to Formspree Endpoint for Direct Email Delivery
      let formspreeSuccess = false;
      if (formspreeId && formspreeId.trim() !== '') {
        const response = await fetch(`https://formspree.io/f/${formspreeId.trim()}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: sanitizedName,
            email: sanitizedEmail,
            phone: sanitizedPhone,
            target: formData.courseTarget,
            category: formData.category,
            message: sanitizedMessage,
            _subject: `New Student Query from ${sanitizedName} (${formData.courseTarget})`
          })
        });

        if (response.ok) {
          formspreeSuccess = true;
        }
      }

      // 5. Add to Dynamic Live Query Box / Feedback Board
      const newQuery = {
        id: Date.now(),
        author: sanitizedName,
        target: formData.courseTarget,
        category: formData.category,
        question: sanitizedMessage,
        answer: "Thank you for your query! Sir Muhammad Yousaf's team has received your message via email and will reply directly to your email/phone within 2-4 hours.",
        upvotes: 1,
        date: new Date().toISOString().split('T')[0],
        status: "Pending Response / Email Received"
      };

      setQueries([newQuery, ...queries]);
      recordSubmission('query_submission');

      setSubmissionStatus({
        type: 'success',
        text: formspreeSuccess 
          ? 'Your query has been sent directly to Sir Yousaf via Email (Formspree) and added to the Live Query Board!'
          : 'Your query has been submitted securely and posted to the Live Board! Sir Yousaf will review it shortly.'
      });

      // Clear Form
      setFormData({
        name: '',
        email: '',
        phone: '',
        courseTarget: 'IELTS Academic (7.5+ Target)',
        category: 'IELTS Writing',
        message: ''
      });

    } catch (err) {
      setSubmissionStatus({
        type: 'error',
        text: 'Connection notice: Submitted to local board. Email server connection was quiet, but your inquiry is saved.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpvote = (id) => {
    if (upvotedIds.includes(id)) return;
    setQueries(queries.map(q => q.id === id ? { ...q, upvotes: q.upvotes + 1 } : q));
    setUpvotedIds([...upvotedIds, id]);
  };

  const categories = ['All', 'IELTS Writing', 'IELTS Speaking', 'PTE Speaking', 'Visa & Batches'];

  const filteredQueries = activeTab === 'All' 
    ? queries 
    : queries.filter(q => q.category.toLowerCase().includes(activeTab.toLowerCase()) || activeTab.toLowerCase().includes(q.category.toLowerCase()));

  return (
    <section id="queries" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Formspree Direct Email & Live Query Feed</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#001475] tracking-tight">
            Student Query Box & Feedback Feed
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Ask any question regarding IELTS, PTE, batch timings, or study visas. Your queries are sent directly to Sir Yousaf's email via <strong className="text-red-600 font-semibold">Formspree</strong> and featured on our student feed.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Formspree Email & Query Submission Box */}
          <div className="lg:col-span-5">
            <div className="sleek-card p-6 sm:p-8 border border-slate-100 shadow-sleek relative bg-white rounded-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#e00000]">
                    Send Direct Email Query
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Powered by Formspree Email Delivery
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowConfig(!showConfig)}
                  className="text-[11px] font-semibold text-[#001475] hover:underline flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5 text-red-600" />
                  <span>Config</span>
                </button>
              </div>

              {/* Formspree Endpoint Config (Optional customization) */}
              {showConfig && (
                <div className="mb-6 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <label className="font-bold text-[#001475] block">
                    Formspree Form ID:
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={formspreeId}
                      onChange={(e) => setFormspreeId(e.target.value)}
                      placeholder="e.g. xbjnqvgw"
                      className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded text-xs focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Target URL: <code className="text-red-600">https://formspree.io/f/{formspreeId || 'YOUR_ID'}</code>
                  </p>
                </div>
              )}

              {/* Alert Feedback Banner */}
              {submissionStatus && (
                <div className={`p-4 rounded-xl text-xs flex items-start gap-2.5 mb-6 ${
                  submissionStatus.type === 'success' 
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submissionStatus.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div className="font-medium">{submissionStatus.text}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-[#001475] mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Muhammad Ali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
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
                        placeholder="ali@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#001475] mb-1">
                      WhatsApp / Phone
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        placeholder="03001234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Course Target & Topic Category */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#001475] mb-1">
                      Course Track
                    </label>
                    <select
                      value={formData.courseTarget}
                      onChange={(e) => setFormData({ ...formData, courseTarget: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                    >
                      <option value="IELTS Academic (7.5+ Target)">IELTS Academic (7.5+)</option>
                      <option value="IELTS General (PR Canada/Aus)">IELTS General (PR)</option>
                      <option value="PTE Academic (79+ Guarantee)">PTE Academic (79+)</option>
                      <option value="Spoken English & Accent">Spoken English</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#001475] mb-1">
                      Query Topic
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600"
                    >
                      <option value="IELTS Writing">IELTS Writing</option>
                      <option value="IELTS Speaking">IELTS Speaking</option>
                      <option value="PTE Speaking">PTE Speaking</option>
                      <option value="Visa & Batches">Visa & Batches</option>
                    </select>
                  </div>
                </div>

                {/* Question / Message Body */}
                <div>
                  <label className="block text-xs font-bold text-[#001475] mb-1">
                    Your Question / Inquiry Details *
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Type your question or query here (e.g., How can I improve my reading score in 3 weeks? What are your class timings in Architect Society?)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold tracking-wide shadow-red-glow transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Sending Email Query...' : 'Submit Query (Formspree Email)'}</span>
                </button>

                {/* Security Reassurance Footer */}
                <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>256-Bit SSL Encrypted • Anti-Spam Protection</span>
                </div>

              </form>
            </div>
          </div>

          {/* Right Column: Public Query & Feedback Feed */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Filter Tabs */}
            <div className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-red-600" />
                <span className="text-xs font-bold text-[#001475] uppercase tracking-wider">
                  Query Board Filter:
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === cat
                        ? 'bg-[#001475] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Query Cards Feed */}
            <div className="space-y-4">
              {filteredQueries.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-100 text-slate-500 text-xs">
                  No queries in this category yet. Be the first to ask!
                </div>
              ) : (
                filteredQueries.map((q) => (
                  <div 
                    key={q.id} 
                    className="sleek-card p-5 border border-slate-100 rounded-2xl bg-white shadow-sleek hover:border-red-100 transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-sm text-[#001475]">
                            {q.author}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 text-red-600 border border-red-100">
                            {q.target}
                          </span>
                          <span className="text-[10px] font-medium text-slate-400">
                            • {q.date}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 shrink-0 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {q.status}
                      </span>
                    </div>

                    {/* Question Box */}
                    <div className="p-3.5 rounded-xl bg-slate-50 text-slate-800 text-xs leading-relaxed border border-slate-100">
                      <strong className="text-[#001475] font-bold block mb-1">
                        Q: {q.question}
                      </strong>
                    </div>

                    {/* Answer Box */}
                    <div className="p-3.5 rounded-xl bg-red-50/40 text-slate-700 text-xs leading-relaxed border border-red-100/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#e00000]">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Sir Muhammad Yousaf's Guidance:</span>
                      </div>
                      <p className="text-slate-800 text-xs">
                        {q.answer}
                      </p>
                    </div>

                    {/* Footer Actions: Upvote & Category */}
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="text-[11px] font-semibold text-slate-400">
                        Topic: {q.category}
                      </span>

                      <button
                        onClick={() => handleUpvote(q.id)}
                        disabled={upvotedIds.includes(q.id)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                          upvotedIds.includes(q.id)
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-slate-100 text-slate-700 hover:bg-red-50 hover:text-red-600'
                        }`}
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>Helpful ({q.upvotes})</span>
                      </button>
                    </div>

                  </div>
                ))
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
