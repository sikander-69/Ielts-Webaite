import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  Plus, 
  Trash2, 
  Upload, 
  Image as ImageIcon, 
  Star, 
  CheckCircle2, 
  X, 
  ShieldAlert, 
  Download,
  Edit3
} from 'lucide-react';
import { sanitizeInput } from '../utils/security';

export default function AdminManager({ isOpen, onClose, testimonials, setTestimonials }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');

  // New Testimonial Form State
  const [newReview, setNewReview] = useState({
    name: '',
    score: 'IELTS Band 8.0',
    target: '',
    review: '',
    stars: 5,
    image: ''
  });

  const [imagePreview, setImagePreview] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  // Default Passcode for Sir Yousaf (Can be changed)
  const ADMIN_PIN = "1234";

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin.trim() === ADMIN_PIN) {
      setAuthenticated(true);
      setPinError('');
    } else {
      setPinError('Incorrect PIN code. Default PIN is 1234');
    }
  };

  // Image Upload Reader (Converts uploaded image to Base64 Data URL)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB max
        alert("Image size should be under 2MB for smooth loading.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setNewReview({ ...newReview, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTestimonial = (e) => {
    e.preventDefault();
    
    const name = sanitizeInput(newReview.name);
    const target = sanitizeInput(newReview.target);
    const review = sanitizeInput(newReview.review);

    if (!name || !review) {
      alert("Please provide at least a student name and review text.");
      return;
    }

    const item = {
      id: Date.now(),
      name: name,
      score: newReview.score,
      target: target || "Study Abroad Applicant",
      review: review,
      stars: parseInt(newReview.stars, 10),
      image: newReview.image || null,
      date: new Date().toISOString().split('T')[0]
    };

    const updated = [item, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem('easy_ielts_testimonials', JSON.stringify(updated));

    setStatusMsg('New student testimonial published successfully!');
    setNewReview({
      name: '',
      score: 'IELTS Band 8.0',
      target: '',
      review: '',
      stars: 5,
      image: ''
    });
    setImagePreview('');

    setTimeout(() => setStatusMsg(''), 4000);
  };

  const handleDeleteTestimonial = (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      const updated = testimonials.filter(t => t.id !== id);
      setTestimonials(updated);
      localStorage.setItem('easy_ielts_testimonials', JSON.stringify(updated));
    }
  };

  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(testimonials, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "easy_ielts_testimonials_backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#001475] text-white">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#e00000]" />
            <h3 className="font-extrabold text-base text-white">
              Teacher Admin Panel — Testimonial & Scorecard Manager
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 text-xs">
          
          {!authenticated ? (
            /* Passcode Verification Screen */
            <div className="max-w-md mx-auto text-center space-y-4 py-8">
              <div className="w-12 h-12 rounded-full bg-red-50 text-[#e00000] mx-auto flex items-center justify-center">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#001475]">
                Admin Authentication Required
              </h4>
              <p className="text-slate-500 text-xs">
                Enter Sir Yousaf's security PIN code to upload new student testimonials or scorecards. (Default PIN: <strong className="text-red-600 font-bold">1234</strong>)
              </p>

              <form onSubmit={handleLogin} className="space-y-3 pt-2">
                {pinError && (
                  <div className="p-2.5 rounded-lg bg-red-50 text-red-700 font-semibold border border-red-200">
                    {pinError}
                  </div>
                )}
                <input
                  type="password"
                  required
                  placeholder="Enter Passcode (e.g. 1234)"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-center font-mono text-sm focus:outline-none focus:border-red-600"
                />
                <button
                  type="submit"
                  className="w-full btn-primary py-3 rounded-xl font-bold uppercase tracking-wider text-xs"
                >
                  Unlock Admin Panel
                </button>
              </form>
            </div>
          ) : (
            /* Admin Panel Dashboard */
            <div className="space-y-8">
              
              {statusMsg && (
                <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{statusMsg}</span>
                </div>
              )}

              {/* SECTION 1: ADD NEW TESTIMONIAL FORM */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-extrabold text-[#001475] flex items-center gap-2">
                    <Plus className="w-4 h-4 text-red-600" />
                    <span>Upload New Student Testimonial / Result</span>
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Instant Publishing
                  </span>
                </div>

                <form onSubmit={handleAddTestimonial} className="space-y-3">
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-[#001475] mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ali Raza"
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs focus:outline-none focus:border-red-600"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#001475] mb-1">
                        Band Score / Result *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. IELTS Band 8.5 or PTE 84/90"
                        value={newReview.score}
                        onChange={(e) => setNewReview({ ...newReview, score: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-[#001475] mb-1">
                        Target Country / University
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. University of Melbourne, Australia"
                        value={newReview.target}
                        onChange={(e) => setNewReview({ ...newReview, target: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs focus:outline-none focus:border-red-600"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#001475] mb-1">
                        Star Rating
                      </label>
                      <select
                        value={newReview.stars}
                        onChange={(e) => setNewReview({ ...newReview, stars: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs focus:outline-none focus:border-red-600"
                      >
                        <option value={5}>5 Stars (★★★★★ Outstanding)</option>
                        <option value={4}>4 Stars (★★★★ Very Good)</option>
                      </select>
                    </div>
                  </div>

                  {/* Student Review Text */}
                  <div>
                    <label className="block font-bold text-[#001475] mb-1">
                      Student Review / Success Feedback *
                    </label>
                    <textarea
                      rows="3"
                      required
                      placeholder="Enter student review details (e.g. Sir Yousaf's templates helped me score Band 8.0 on first attempt!)"
                      value={newReview.review}
                      onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs focus:outline-none focus:border-red-600 resize-none"
                    />
                  </div>

                  {/* Image Upload / Scorecard Attachment */}
                  <div>
                    <label className="block font-bold text-[#001475] mb-1">
                      Upload Scorecard / Student Photo (Optional)
                    </label>
                    <div className="flex items-center gap-3">
                      <label className="cursor-pointer btn-outline px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border-slate-300">
                        <Upload className="w-3.5 h-3.5 text-red-600" />
                        <span>Choose Image File</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>

                      {imagePreview && (
                        <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                          <img src={imagePreview} alt="Preview" className="w-8 h-8 rounded object-cover border" />
                          <span className="text-[11px] text-emerald-800 font-semibold">Image Loaded</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary py-3 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Publish Testimonial to Live Website</span>
                  </button>

                </form>
              </div>

              {/* SECTION 2: MANAGE EXISTING TESTIMONIALS */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <h4 className="font-extrabold text-[#001475] text-sm">
                    Existing Testimonials ({testimonials.length})
                  </h4>
                  <button
                    onClick={handleExportData}
                    className="text-[11px] font-bold text-red-600 hover:underline flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Backup Backup JSON</span>
                  </button>
                </div>

                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                  {testimonials.map((t, idx) => (
                    <div key={t.id || idx} className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {t.image ? (
                          <img src={t.image} alt={t.name} className="w-10 h-10 rounded-lg object-cover border border-slate-200" />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 font-bold flex items-center justify-center text-xs">
                            {t.name.charAt(0)}
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <strong className="text-[#001475]">{t.name}</strong>
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-50 text-red-600">
                              {t.score}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1">{t.review}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeleteTestimonial(t.id)}
                        className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        title="Delete Testimonial"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-[11px] text-slate-500">
          <span>EASY IELTS/PTE Admin System</span>
          <button onClick={onClose} className="font-bold text-[#001475] hover:underline">
            Close Panel
          </button>
        </div>

      </div>
    </div>
  );
}
