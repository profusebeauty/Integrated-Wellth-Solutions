import React from 'react';

const GALLERY_IMAGES = [
  {
    src: "https://res.cloudinary.com/dka0498ns/image/upload/v1765321879/Integrated_Wellth_Business_Lunch_raaj59.jpg",
    alt: "Business Lunch Strategy Session"
  },
  {
    src: "https://res.cloudinary.com/dka0498ns/image/upload/v1765321877/Integrated_Wellth_Solution_Founder._Marcia_Kgaphola_t5u2ea.jpg",
    alt: "Founder Marcia Kgaphola"
  },
  {
    src: "https://res.cloudinary.com/dka0498ns/image/upload/v1765321879/Integrated_Wellth_with_HEIR_pdqsye.jpg",
    alt: "Collaborating with HEIR"
  },
  {
    src: "https://res.cloudinary.com/dka0498ns/image/upload/v1765321879/Integrated_Wellth_War_room_mfqafl.jpg",
    alt: "The War Room - Strategy in Action",
    className: "md:col-span-2"
  },
  {
    src: "https://res.cloudinary.com/dka0498ns/image/upload/v1765321879/Integrated_Wellth_kids_Miss_Tembisa_oizqwt.jpg",
    alt: "Community Outreach with Miss Tembisa"
  },
  {
    src: "https://res.cloudinary.com/dka0498ns/image/upload/v1765321878/Integrated_Wellth_Financial_Literacy_b5ix0r.jpg",
    alt: "Financial Literacy Workshop"
  },
  {
    src: "https://res.cloudinary.com/dka0498ns/image/upload/v1765321878/Integrated_Wellth_Financial_Literacy_sessions_gkvdll.jpg",
    alt: "Interactive Learning Sessions"
  },
  {
    src: "https://res.cloudinary.com/dka0498ns/image/upload/v1765321878/Integrated_Wellth_Financial_Literacy._nscht7.jpg",
    alt: "Financial Literacy Education",
    className: "md:col-span-2"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">Moments of Impact</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Integrated Wellth in Action
          </h3>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            From strategic boardrooms to community classrooms, see how we are transforming lives through financial and emotional wellness.
          </p>
        </div>

        {/* Hero Gallery Image */}
        <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-8 group">
          <img 
            src="https://res.cloudinary.com/dka0498ns/image/upload/v1765321879/Integrated_Wellth_-_Women_empowerment_tahf5l.jpg" 
            alt="Women Empowerment Event" 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-8 md:p-12">
             <div className="max-w-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               <h4 className="text-white text-3xl md:text-5xl font-serif font-bold mb-4">Empowering Women & Communities</h4>
               <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed">
                 We believe in building wealth that goes beyond the bank account—fostering resilience, leadership, and lasting impact.
               </p>
             </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-xl overflow-hidden shadow-md group ${img.className || ''}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-900/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6">
                <span className="text-white font-serif font-bold text-xl text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;