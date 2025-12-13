import React from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-brand-900/60 z-10"></div>
        <img 
          src="https://picsum.photos/1920/1080?random=10" 
          alt="Strategic Consulting Meeting" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full min-h-[70vh]">
        <div className="max-w-3xl">
          {/* Compliance Alert Banner */}
          <a href="#blog" className="group block mb-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 backdrop-blur-md hover:bg-amber-500/20 transition-all cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="p-1 bg-amber-500/20 rounded-full flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              </div>
              <div className="flex-1">
                <p className="text-amber-100 font-bold text-sm mb-0.5">2026 Employer Compliance Alert</p>
                <p className="text-amber-200/80 text-xs leading-relaxed">
                  SARS Mandatory Income Tax Numbers deadline approaching. Submissions without numbers will be rejected. 
                  <span className="text-amber-400 font-bold ml-1 group-hover:underline">Read the Blueprint <ArrowRight className="inline w-3 h-3 ml-0.5" /></span>
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