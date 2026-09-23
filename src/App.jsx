import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutTrainer from './components/AboutTrainer';
import Courses from './components/Courses';
import InternationalStudents from './components/InternationalStudents';
import PteTemplates from './components/PteTemplates';
import SlotBooking from './components/SlotBooking';
import QueryBoxFeed from './components/QueryBoxFeed';
import ToolsCalculator from './components/ToolsCalculator';
import StudyMaterial from './components/StudyMaterial';
import VideoLibrary from './components/VideoLibrary';
import Testimonials from './components/Testimonials';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import AdminManager from './components/AdminManager';

const INITIAL_TESTIMONIALS = [
  {
    id: 1,
    name: "Bilal Ahmad",
    score: "IELTS Band 8.0",
    target: "University of Toronto, Canada",
    review: "Sir Yousaf's 1-on-1 essay feedback changed everything for me. I was stuck at Band 6.5 in writing twice. With his templates and daily corrections, I jumped straight to Band 7.5 in writing and Band 8.0 overall!",
    stars: 5,
    image: null
  },
  {
    id: 2,
    name: "Mahnoor Fatima",
    score: "PTE Academic 84/90",
    target: "Sydney University, Australia",
    review: "The PTE software practice lab at Architect Society campus is amazing. Sir Yousaf taught me exact oral fluency tricks for Describe Image and Summarize Spoken Text. Achieved 84 on my first attempt!",
    stars: 5,
    image: null
  },
  {
    id: 3,
    name: "Shahzaib Khan",
    score: "IELTS General Band 8.0",
    target: "Canada Express Entry PR",
    review: "Got CLB 9 (Listening 8.5, Reading 8.0, Writing 7.5, Speaking 8.0). Sir Yousaf's evening online Zoom classes fit perfectly with my job schedule. Best IELTS academy in Lahore!",
    stars: 5,
    image: null
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [adminOpen, setAdminOpen] = useState(false);

  // Dynamic Testimonials State
  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem('easy_ielts_testimonials');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return INITIAL_TESTIMONIALS; }
    }
    return INITIAL_TESTIMONIALS;
  });

  useEffect(() => {
    localStorage.setItem('easy_ielts_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  // Secret Admin Shortcut: Ctrl + Shift + A OR #admin / ?admin=true
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setAdminOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    if (window.location.search.includes('admin') || window.location.hash.includes('admin')) {
      setAdminOpen(true);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-red-100 selection:text-red-600">
      
      {/* Top Navbar (Streamlined & Clean) */}
      <Navbar 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="bg-white">
        <Hero scrollToSection={scrollToSection} />
        <AboutTrainer scrollToSection={scrollToSection} />
        <Courses scrollToSection={scrollToSection} />
        <InternationalStudents scrollToSection={scrollToSection} />
        <PteTemplates scrollToSection={scrollToSection} />
        <SlotBooking />
        
        {/* Formspree Email Queries & Live Feedback Feed */}
        <QueryBoxFeed />

        <ToolsCalculator scrollToSection={scrollToSection} />
        <StudyMaterial scrollToSection={scrollToSection} />
        <VideoLibrary />
        
        {/* Public Student Reviews + Student Submit Form */}
        <Testimonials 
          testimonials={testimonials} 
          setTestimonials={setTestimonials}
        />

        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer 
        scrollToSection={scrollToSection} 
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Floating Instant WhatsApp Button */}
      <WhatsAppFloating />

      {/* Secret Teacher Admin Modal (Hidden from public, unlocked via shortcut Ctrl+Shift+A or #admin) */}
      <AdminManager 
        isOpen={adminOpen} 
        onClose={() => setAdminOpen(false)}
        testimonials={testimonials}
        setTestimonials={setTestimonials}
      />

    </div>
  );
}
