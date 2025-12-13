import React from 'react';
import { Cloud, Check } from 'lucide-react';

const SYSTEMS = [
  {
    name: 'Zoho',
    description: 'The operating system for business. A single, integrated platform to run your entire organization—from finance to CRM.',
    bestFor: 'All-in-One Management',
    icon: Cloud,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50'
  }
];

const Systems: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">Our Technology Stack</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Which System Should You Use?
          </h3>
          <p className="text-slate-600 text-lg">
            We specialize in implementing the world's most comprehensive business suite.
          </p>
        </div>

        <div className="flex justify-center">
          {SYSTEMS.map((sys) => (
            <div 
              key={sys.name} 
              className="rounded-2xl border border-slate-100 p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-white max-w-md w-full"
            >
              <div className={`w-14 h-14 ${sys.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <sys.icon className={`w-7 h-7 ${sys.color}`} />
              </div>
              
              <div className="mb-4">
                <h4 className="text-xl font-bold text-slate-900">{sys.name}</h4>
                <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">
                  Best For: {sys.bestFor}
                </div>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {sys.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-bold text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <Check className="w-4 h-4" /> Certified Partner
              </div>
            </div>
          ))}
        </div>

        {/* Integration Banner */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h4 className="text-2xl font-serif font-bold text-white mb-2">Ready to streamline?</h4>
            <p className="text-slate-300">
              Moving to Zoho can consolidate your apps and reduce costs. Let us assess your business needs and recommend the perfect setup.
            </p>
          </div>
          <div className="relative z-10">
            <a 
              href="#contact" 
              className="inline-flex px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-brand-50 transition-colors"
            >
              Get a Recommendation
            </a>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-10 -mb-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Systems;