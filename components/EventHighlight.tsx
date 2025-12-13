import React from 'react';
import { Calendar, MapPin, Clock, CheckCircle2, User, ArrowRight, Laptop, TrendingUp } from 'lucide-react';

const EventHighlight: React.FC = () => {
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/enquiries-integratedwellth/30min'
      });
    } else {
      window.open('https://calendly.com/enquiries-integratedwellth/30min', '_blank');
    }
  };

  return (
    <section id="upcoming-event" className="py-20 bg-white border-b border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Featured Event
          </div>
          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-slate-100">
               <img 
                 src="https://res.cloudinary.com/dka0498ns/image/upload/v1765658087/Financial_Clarity_For_Non-Financial_Business_Owners._IWS_event_Post_icwvbb.png" 
                 alt="Financial Clarity For Non-Financial Business Owners Event Flyer" 
                 className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Join us for a transformative day of financial empowerment.</p>
               </div>
             </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Financial Clarity For <br className="hidden md:block" /> 
              <span className="text-brand-600">Non-Financial Business Owners</span>
            </h2>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                 <div className="bg-white p-2 rounded-lg shadow-sm text-brand-600">
                   <Calendar className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase font-bold">Date</p>
                   <p className="text-slate-900 font-semibold">28 February 2026</p>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="bg-white p-2 rounded-lg shadow-sm text-brand-600">
                   <Clock className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase font-bold">Time</p>
                   <p className="text-slate-900 font-semibold">09:00 – 16:30</p>
                 </div>
              </div>
              <div className="flex items-center gap-3 md:col-span-2">
                 <div className="bg-white p-2 rounded-lg shadow-sm text-brand-600">
                   <MapPin className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase font-bold">Venue</p>
                   <p className="text-slate-900 font-semibold">Munyaka Waterfall City, Gauteng</p>
                 </div>
              </div>
            </div>

            <div className="space-y-6 text-slate-600 mb-8">
              <p className="font-medium text-slate-800 text-lg border-l-4 border-brand-500 pl-4 bg-brand-50/50 py-2">
                Did you know that 70% of small businesses fail due to poor financial management?
              </p>
              <p>
                If you’re great at your craft but in the dark about your numbers, you’re not alone—but you are at risk. 
                This isn't just a workshop; it's a financial survival toolkit for entrepreneurs who want to build businesses that last.
              </p>
              <p>
                In just one day, you’ll go from financial fear to financial control. We’ll help you set up a simple, effective system to track your money, stay compliant, and make decisions with confidence—not guesswork.
              </p>
            </div>

            {/* Facilitator */}
            <div className="flex items-start gap-4 mb-8 p-4 bg-slate-50 rounded-xl">
               <div className="bg-slate-200 p-3 rounded-full">
                 <User className="w-6 h-6 text-slate-600" />
               </div>
               <div>
                 <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Facilitated By</h4>
                 <p className="font-serif font-bold text-lg text-brand-700">Marcia Kgaphola</p>
                 <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                   Chartered Business Accountant with 16+ years of corporate financial management, NPO/Grant finance expert, and Founder of Integrated Wellth Solutions.
                 </p>
               </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Laptop className="w-5 h-5 text-brand-600" />
                What We Will Cover:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm text-slate-600 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                  <span>Configure Free Accounting Software</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                  <span>Develop Chart of Accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                  <span>Setup Bookkeeping & Journals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                  <span>Choose Accounting Methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                  <span>Budgeting & Forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                  <span>Automation & Customer Discovery</span>
                </li>
              </ul>

              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-600" />
                You'll Leave With:
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-1.5"></div>
                  <span>A live bookkeeping system set up in free software</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-1.5"></div>
                  <span>Clarity on SARS & CIPC compliance basics and calendar</span>
                </li>
                 <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-1.5"></div>
                  <span>A cash flow forecast template & budgeting confidence</span>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <button 
                onClick={openCalendly}
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/30"
              >
                Book Your Spot <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <p className="text-xs text-slate-400 mt-3 text-center sm:text-left">
                Limited seats available for this hands-on session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHighlight;