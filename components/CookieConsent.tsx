import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieConsentProps {
  onOpenPolicy: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenPolicy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 flex flex-col md:flex-row items-start md:items-center gap-6 relative">
        <button 
          onClick={handleDecline} 
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 md:hidden"
        >
          <X size={20} />
        </button>

        <div className="bg-brand-50 p-3 rounded-full hidden md:block">
          <Cookie className="w-8 h-8 text-brand-600" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 md:hidden">
            <Cookie className="w-5 h-5 text-brand-600" />
            <h4 className="font-bold text-slate-900">Cookie Usage</h4>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies in accordance with the <strong>POPI Act</strong> and <strong>GDPR</strong>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button
            onClick={onOpenPolicy}
            className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors whitespace-nowrap"
          >
            Privacy Policy
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-bold hover:bg-brand-700 transition-colors shadow-lg hover:shadow-brand-500/20 whitespace-nowrap"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
