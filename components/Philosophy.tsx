import React from 'react';
import { Quote } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute top-0 left-0 -mt-6 -ml-6 w-24 h-24 bg-brand-100 rounded-full z-0 opacity-50"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dka0498ns/image/upload/v1765057729/Founder_Marcia_Kgaphola_agebxi.jpg" 
                alt="Marcia Kgaphola - Founder" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden md:block z-20">
              <p className="font-serif font-bold text-brand-900">Marcia Kgaphola</p>
              <p className="text-sm text-slate-500">Founder & Lead Strategist</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">Our Core Philosophy</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              True Wealth Requires a Healthy Mindset
            </h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Unlike traditional accounting firms that focus solely on historical data—telling you "where you have been"—Integrated Wellth Solutions focuses on forward-looking strategy: <strong>"where you are going."</strong>
              </p>
              <p>
                We believe that financial success cannot be sustained without addressing the human side of money. Stress, behavior, and emotional intelligence play a critical role in your financial outcomes.
              </p>
              
              <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 mt-8">
                <Quote className="text-brand-400 h-8 w-8 mb-4" />
                <p className="text-brand-900 font-serif italic text-xl">
                  "Transforming lives through emotional, financial and personal wellness."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;