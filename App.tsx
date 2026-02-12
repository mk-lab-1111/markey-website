
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import SalesConsultant from './components/SalesConsultant';
import EventList from './components/EventList';
import VideoArchive from './components/VideoArchive';
import DownloadPreview from './components/DownloadPreview';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MemberResources from './components/MemberResources';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState<'landing' | 'member'>('landing');

  useEffect(() => {
    if (currentPage === 'landing') {
      const handleScroll = () => {
        const sections = ['home', 'about', 'consultant', 'events', 'archive', 'downloads', 'pricing'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= 300;
          }
          return false;
        });
        if (current) setActiveSection(current);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentPage]);

  // 会員ページへ遷移
  const goToMemberPage = () => {
    setCurrentPage('member');
    window.scrollTo(0, 0);
  };

  // ランディングページに戻る
  const goToLandingPage = () => {
    setCurrentPage('landing');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'member') {
    return <MemberResources onBack={goToLandingPage} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} onMemberAccess={goToMemberPage} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <Features />
        <section id="consultant">
          <SalesConsultant />
        </section>
        <section id="events" className="bg-white">
          <EventList />
        </section>
        <section id="archive" className="bg-slate-50">
          <VideoArchive />
        </section>
        <section id="downloads" className="bg-white">
          <DownloadPreview onNavigate={goToMemberPage} />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="join" className="bg-markey-navy text-white">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
