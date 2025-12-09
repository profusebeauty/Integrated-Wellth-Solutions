import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Audience from './components/Audience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Testimonials from './components/Testimonials';
import LeadMagnet from './components/LeadMagnet';
import BlogPost from './components/BlogPost';
import WhatsAppButton from './components/WhatsAppButton';

type ViewState = 'home' | 'blog';

function App() {
  const [view, setView] = useState<ViewState>('home');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar onNavigate={setView} />
      
      {view === 'home' ? (
        <main>
          <Hero />
          <Philosophy />
          <Services onNavigate={setView} />
          <Testimonials />
          <Audience />
          <LeadMagnet />
          <Contact />
        </main>
      ) : (
        <BlogPost onBack={() => setView('home')} />
      )}

      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </div>
  );
}

export default App;