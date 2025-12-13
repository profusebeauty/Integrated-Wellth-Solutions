import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Audience from './components/Audience';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Testimonials from './components/Testimonials';
import LeadMagnet from './components/LeadMagnet';
import BlogPost from './components/BlogPost';
import WhatsAppButton from './components/WhatsAppButton';
import FinancialHealthScore from './components/FinancialHealthScore';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookieConsent from './components/CookieConsent';
import Systems from './components/Systems';

type ViewState = 'home' | 'blog' | 'privacy';

function App() {
  const [view, setView] = useState<ViewState>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'blog' || hash === 'privacy') {
        setView(hash as ViewState);
        window.scrollTo(0, 0);
      } else {
        setView('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (newView: ViewState) => {
    if (newView === 'home') {
      window.location.hash = '';
      if (view !== 'home') window.scrollTo(0, 0);
    } else {
      window.location.hash = newView;
    }
  };

  let content;
  if (view === 'home') {
    content = (
      <main>
        <Hero />
        <Philosophy />
        <Services onNavigate={handleNavigate} />
        <Systems />
        <FinancialHealthScore />
        <Testimonials />
        <Audience />
        <Gallery />
        <LeadMagnet />
        <Contact />
      </main>
    );
  } else if (view === 'blog') {
    content = <BlogPost onBack={() => handleNavigate('home')} />;
  } else if (view === 'privacy') {
    content = <PrivacyPolicy onBack={() => handleNavigate('home')} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar onNavigate={handleNavigate} />
      
      {content}

      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
      <ChatWidget />
      <CookieConsent onOpenPolicy={() => handleNavigate('privacy')} />
    </div>
  );
}

export default App;
