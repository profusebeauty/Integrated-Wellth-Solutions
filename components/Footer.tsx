import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h5 className="text-white font-serif font-bold text-lg mb-4">Integrated Wellth</h5>
            <p className="text-sm">
              Combining financial expertise with behavioral psychology to transform lives and businesses.
            </p>
          </div>
          <div>
            <h5 className="text-white font-serif font-bold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-brand-400">Services</a></li>
              <li><a href="#philosophy" className="hover:text-brand-400">Philosophy</a></li>
              <li><a href="#audience" className="hover:text-brand-400">Clients</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-serif font-bold text-lg mb-4">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-400">PAIA Manual</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-serif font-bold text-lg mb-4">Connect</h5>
             <div className="flex gap-4">
              <a href="https://www.facebook.com/share/17SByrB4zi/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/integratedwellth" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@prestigemarciak?_r=1&_t=ZS-92596TEURxE" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.55-1.09-.01 2.52.01 5.03-.01 7.54-.09 2.84-1.5 5.51-3.9 6.72-2.42 1.27-5.36.97-7.58-.71-2.01-1.5-3.02-4.12-2.49-6.58.56-2.58 2.65-4.58 5.27-4.99.27-.05.54-.07.82-.07V13.9c-1.13.12-2.13.79-2.71 1.76-.57.97-.57 2.17-.03 3.16.53.98 1.55 1.62 2.66 1.66 1.12.02 2.16-.54 2.72-1.5.56-.95.53-2.14.07-3.13-.03-2.29-.01-4.57-.01-6.86-.01-1.04-.01-2.07-.01-3.1 0-1.89 0-3.78 0-5.67h3.91z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Integrated Wellth Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;