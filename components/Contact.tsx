import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Clock, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-brand-400 font-bold tracking-wide uppercase text-sm mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Transform Your Wealth?
            </h3>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Whether you need to file your taxes, restructure your organization, or manage financial stress, our Pretoria team is here to help you move forward.
            </p>

            {/* Semantic Address Wrapper for Local SEO */}
            <address className="space-y-6 mb-10 not-italic">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="bg-slate-800 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="text-brand-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Visit Our Offices</h4>
                  <p className="text-slate-400">Fred Messenger Ave, Pretoria<br/>Gauteng, South Africa</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="bg-slate-800 p-3 rounded-lg flex-shrink-0">
                  <Mail className="text-brand-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Email Us</h4>
                  <a href="mailto:enquiries@integratedwellth.co.za" className="text-slate-400 hover:text-brand-300 transition-colors">enquiries@integratedwellth.co.za</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="bg-slate-800 p-3 rounded-lg flex-shrink-0">
                  <Phone className="text-brand-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Call Us</h4>
                  <a href="tel:+27812355910" className="text-slate-400 hover:text-brand-300 transition-colors">+27 (0) 81 235 5910</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="bg-slate-800 p-3 rounded-lg flex-shrink-0">
                  <Clock className="text-brand-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Operational Hours</h4>
                  <p className="text-slate-400">08:00 AM - 16:30 PM</p>
                </div>
              </div>
            </address>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/17SByrB4zi/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-brand-600 transition-colors text-white hover:text-white" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/integratedwellth" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-brand-600 transition-colors text-white hover:text-white" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@prestigemarciak?_r=1&_t=ZS-92596TEURxE" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-brand-600 transition-colors text-white hover:text-white" aria-label="TikTok">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.55-1.09-.01 2.52.01 5.03-.01 7.54-.09 2.84-1.5 5.51-3.9 6.72-2.42 1.27-5.36.97-7.58-.71-2.01-1.5-3.02-4.12-2.49-6.58.56-2.58 2.65-4.58 5.27-4.99.27-.05.54-.07.82-.07V13.9c-1.13.12-2.13.79-2.71 1.76-.57.97-.57 2.17-.03 3.16.53.98 1.55 1.62 2.66 1.66 1.12.02 2.16-.54 2.72-1.5.56-.95.53-2.14.07-3.13-.03-2.29-.01-4.57-.01-6.86-.01-1.04-.01-2.07-.01-3.1 0-1.89 0-3.78 0-5.67h3.91z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-100 relative overflow-hidden flex flex-col">
            <h4 className="text-2xl font-serif font-bold mb-2 px-4 pt-4">Book Your Consultation</h4>
            <p className="text-slate-500 mb-6 text-sm px-4">
              Schedule a 30-minute discovery call directly on our calendar.
            </p>

            {/* Calendly Embed */}
            <div className="flex-1 w-full min-h-[600px] bg-slate-50 rounded-lg overflow-hidden">
               <div 
                 className="calendly-inline-widget w-full h-full" 
                 data-url="https://calendly.com/enquiries-integratedwellth/30min?hide_landing_page_details=1&hide_gdpr_banner=1" 
                 style={{ minWidth: '320px', height: '100%' }} 
               />
            </div>
            
            <div className="text-center py-4">
              <a 
                href="https://calendly.com/enquiries-integratedwellth/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-sm hover:underline"
              >
                Open Calendar in New Tab <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Map for Fred Messenger Ave */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.123456789!2d28.2293!3d-25.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFred%20Messenger%20Ave%2C%20Pretoria!5e0!3m2!1sen!2sza!4v1709856000000!5m2!1sen!2sza" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             title="Integrated Wellth Solutions Location"
           ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
