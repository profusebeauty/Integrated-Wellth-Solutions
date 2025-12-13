import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText, Server, Globe } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-brand-900 p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Shield className="w-4 h-4" />
                Legal & Compliance
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Privacy Policy</h1>
              <p className="text-brand-100 text-lg max-w-2xl">
                We are committed to protecting your personal information and your right to privacy in compliance with the POPI Act (South Africa) and GDPR.
              </p>
            </div>
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-10 -mt-10"></div>
          </div>

          <div className="p-8 md:p-12 space-y-10 text-slate-700 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-brand-600" />
                1. Introduction
              </h2>
              <p>
                Integrated Wellth Solutions ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>
              <p className="mt-4">
                This policy complies with the <strong>Protection of Personal Information Act (POPIA)</strong> of South Africa and the <strong>General Data Protection Regulation (GDPR)</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-brand-600" />
                2. Information We Collect
              </h2>
              <p>We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together follows:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers provided via our contact forms.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website, products, and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-brand-600" />
                3. How We Use Your Information
              </h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To provide the services you have requested (e.g., booking a consultation).</li>
                <li>To improve our website, services, marketing, and customer relationships.</li>
                <li>To comply with a legal obligation (e.g., SARS tax compliance record-keeping).</li>
                <li>To communicate with you regarding updates to our services or policies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Server className="w-6 h-6 text-brand-600" />
                4. Cookies and Tracking Technologies
              </h2>
              <p>
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and allows us to improve our site.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg mt-4 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Cookie Usage:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                  <li><strong>Analytical Cookies:</strong> Help us understand how visitors interact with the website (e.g., Google Analytics).</li>
                  <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant ads.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-brand-600" />
                5. Data Security & Retention
              </h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. Access to your personal data is limited to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
              <p className="mt-4">
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">6. Your Rights</h2>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Withdraw consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">7. Contact Details</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us:
              </p>
              <div className="mt-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <p><strong>Integrated Wellth Solutions</strong></p>
                <p><strong>Information Officer:</strong> Marcia Kgaphola</p>
                <p><strong>Email:</strong> enquiries@integratedwellth.co.za</p>
                <p><strong>Phone:</strong> +27 (0) 81 235 5910</p>
                <p><strong>Address:</strong> Fred Messenger Ave, Pretoria, Gauteng, South Africa</p>
              </div>
            </section>

            <div className="text-sm text-slate-400 pt-8 border-t border-slate-100">
              Last Updated: December 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;