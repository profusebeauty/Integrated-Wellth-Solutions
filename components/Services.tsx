import React from 'react';
import { PILLARS } from '../constants';

interface ServicesProps {
  onNavigate: (view: 'home' | 'blog') => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">The 5-Pillar Framework</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            A Holistic Approach to Success
          </h3>
          <p className="text-slate-600 text-lg">
            We organize our expertise around five core disciplines to ensure no aspect of your personal or organizational health is overlooked.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div 
              key={pillar.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-8 border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-colors duration-300">
                <pillar.icon className="text-brand-600 group-hover:text-white w-7 h-7 transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-slate-600 mb-6">
                {pillar.description}
              </p>
              <ul className="space-y-2">
                {pillar.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                    {detail === 'Tax Compliance (SARS, VAT, PAYE)' ? (
                      <button 
                        onClick={() => onNavigate('blog')}
                        className="text-brand-600 font-medium hover:underline hover:text-brand-700 text-left transition-colors"
                      >
                        {detail}
                      </button>
                    ) : (
                      detail
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;