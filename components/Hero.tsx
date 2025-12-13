import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-brand-900/60 z-10"></div>
        <img 
          src="https://res.cloudinary.com/dka0498ns/image/upload/v1765644818/Accountability_Partnership._SMMEs_review_session._egzihs.jpg" 
          alt="Accountability Partnership - Strategic Consulting Meeting" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full min-h-[70vh]">
        <div className="max-w-3xl">
          {/* Upcoming Event Banner */}
          <a href="#upcoming-event" className="group block mb-8 bg-brand-900/60 border border-brand-500/30 rounded-xl p-4 backdrop-blur-md hover:bg-brand-900/80 transition-all cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="p-1 bg-brand-500/20 rounded-full flex-shrink-0 mt-0.5">
                <Calendar className="w-5 h-5 text-brand-400" />
              </div>
              <div className="flex-1">
                <p className="text-brand-100 font-bold text-sm mb-0.5">Upcoming Event: Financial Clarity Workshop</p>
                <p className="text-brand-200/80 text-xs leading-relaxed">
                  Join us on 28 Feb 2026 at Munyaka Waterfall City. 
                  <span className="text-brand-400 font-bold ml-1 group-hover:underline">View Details <ArrowRight className="inline w-3 h-3 ml-0.5" /></span>
                </p>
              </div>
            </div>
          </a>

          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-400/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
            <span className="text-brand-100 font-semibold text-xs tracking-widest uppercase">Pretoria-Based Strategic Consultancy</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8 text-white">
            Where Financial Clarity Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">Emotional Wellness</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
            We don't just look at where you've been. We focus on <strong>where you are going</strong>. 
            Transform your business and life with a holistic approach blending technical finance and behavioral psychology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <a href="#assessment" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-brand-950 bg-brand-400 hover:bg-brand-300 transition-all shadow-xl hover:shadow-brand-500/20 transform hover:-translate-y-1">
              Book Your Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-base font-medium rounded-lg text-slate-200 hover:bg-white/5 hover:border-white transition-all backdrop-blur-sm">
              Explore Our Framework
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;