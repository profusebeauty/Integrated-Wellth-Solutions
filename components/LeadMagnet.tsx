import React, { useState } from 'react';
import { Download, CheckCircle, Loader2 } from 'lucide-react';

const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-20 bg-brand-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 lg:flex items-center gap-12 shadow-2xl">
          
          <div className="flex-1 mb-10 lg:mb-0">
            <div className="inline-block bg-brand-500 text-brand-950 font-bold text-xs px-3 py-1 rounded-full mb-4">
              FREE RESOURCE
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Unlock Your Financial Clarity
            </h2>
            <p className="text-brand-100 text-lg mb-8 max-w-lg">
              Download our exclusive <strong>"Money Mindset & Compliance Toolkit"</strong>. 
              Get a self-assessment workbook and a SARS compliance checklist for your business.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-brand-100">
                <CheckCircle className="w-5 h-5 text-brand-400" />
                <span>Identification of financial stress triggers</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-100">
                <CheckCircle className="w-5 h-5 text-brand-400" />
                <span>Essential tax compliance checklist for SMEs</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-100">
                <CheckCircle className="w-5 h-5 text-brand-400" />
                <span>3-step goal setting framework</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 w-full bg-white text-slate-900 p-6 md:p-8 rounded-2xl shadow-lg">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">You're all set!</h3>
                <p className="text-slate-500 mb-6">Check your inbox for your free toolkit.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-brand-600 font-bold hover:underline"
                >
                  Send to another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-bold mb-2">Get Instant Access</h3>
                <p className="text-slate-500 text-sm mb-6">Join 1,200+ subscribers transforming their wealth.</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full py-3 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition-colors shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Download Now
                        <Download className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;