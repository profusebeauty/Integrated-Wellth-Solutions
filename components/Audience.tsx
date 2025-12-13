import React, { useState } from 'react';
import { AUDIENCES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Audience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(AUDIENCES[0].id);

  const activeAudience = AUDIENCES.find(a => a.id === activeTab) || AUDIENCES[0];

  return (
    <section id="audience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">Target Audience</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Solutions Tailored For You
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {AUDIENCES.map((audience) => (
            <button
              key={audience.id}
              onClick={() => setActiveTab(audience.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeTab === audience.id
                  ? 'bg-brand-600 text-white border-brand-600 shadow-lg scale-105'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600'
              }`}
            >
              {audience.title}
            </button>
          ))}
        </div>

        <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg border border-slate-100">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-4 text-center">
              {activeAudience.title}
            </h4>
            <p className="text-lg text-slate-600 mb-8 text-center max-w-3xl mx-auto">
              {activeAudience.description}
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h5 className="font-semibold text-brand-800 mb-4 uppercase text-xs tracking-wider text-center md:text-left">Key Interventions</h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeAudience.services.map((service, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;