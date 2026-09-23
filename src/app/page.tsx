import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative text-white py-32 px-6 lg:px-20 min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center section-fade">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
            Moving Freight Forward.<br/> 
            <span className="text-gradient">Across Canada & Beyond.</span>
          </h1>
          <p className="text-xl mb-12 max-w-3xl text-slate-200 leading-relaxed font-light">
            Professionalism accompanied by safety. We are a Canadian Bonded Carrier and freight brokerage providing unmatched capacity, reliability, and C-TPAT certified security for your supply chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link 
              href="/quote" 
              className="gradient-teal text-white font-bold py-4 px-10 rounded-lg shadow-[0_0_20px_rgba(13,148,136,0.4)] transition-all duration-300 text-center hover:scale-105 hover:-translate-y-1"
            >
              Request a Freight Quote
            </Link>
            <Link 
              href="/carriers" 
              className="bg-transparent border-2 border-white/80 hover:bg-white hover:text-slate-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 text-center hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
            >
              Join Our Carrier Network
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST & CERTIFICATIONS BAR */}
      <section className="gradient-navy text-white py-10 relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-8 px-4">
          <div className="flex items-center gap-3 font-semibold text-lg hover:text-teal-400 transition-colors cursor-default">
            <span className="text-3xl bg-white/10 p-3 rounded-full">🍁</span> 
            Canadian Bonded Carrier
          </div>
          <div className="flex items-center gap-3 font-semibold text-lg hover:text-teal-400 transition-colors cursor-default">
            <span className="text-3xl bg-white/10 p-3 rounded-full">🛡️</span> 
            C-TPAT Certified
          </div>
          <div className="flex items-center gap-3 font-semibold text-lg hover:text-teal-400 transition-colors cursor-default">
            <span className="text-3xl bg-white/10 p-3 rounded-full">🌱</span> 
            CARB California Certified
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES OVERVIEW */}
      <section className="py-24 px-6 lg:px-20 bg-slate-light relative">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-20 section-fade">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 tracking-tight">Comprehensive Transportation Solutions</h2>
            <div className="w-24 h-1 gradient-teal mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">More than just trucking — we manage your entire logistical puzzle with precision and care.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover p-10 bg-white border border-slate-200 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="w-14 h-14 gradient-teal text-white rounded-xl flex items-center justify-center text-2xl mb-8 shadow-lg">
                🚛
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy group-hover:text-teal-700 transition-colors">Full Truckload (FTL)</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Dedicated capacity for your large shipments. Safe, secure, and expedited across North America with real-time tracking.</p>
              <Link href="/services/truckload" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-800 transition-colors group/link">
                Learn more 
                <svg className="w-5 h-5 ml-2 transform transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
            
            <div className="card-hover p-10 bg-white border border-slate-200 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="w-14 h-14 gradient-teal text-white rounded-xl flex items-center justify-center text-2xl mb-8 shadow-lg">
                🌐
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy group-hover:text-teal-700 transition-colors">Cross-Border Freight</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Seamless USA/Canada border crossings handled by our C-TPAT certified compliance experts to eliminate delays.</p>
              <Link href="/services" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-800 transition-colors group/link">
                Learn more 
                <svg className="w-5 h-5 ml-2 transform transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
            
            <div className="card-hover p-10 bg-white border border-slate-200 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="w-14 h-14 gradient-teal text-white rounded-xl flex items-center justify-center text-2xl mb-8 shadow-lg">
                🤝
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy group-hover:text-teal-700 transition-colors">Carrier Logistics</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">We treat our carriers like family. Enjoy fast pay options, reliable dedicated lanes, and true 24/7 dispatch support.</p>
              <Link href="/carriers" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-800 transition-colors group/link">
                View benefits 
                <svg className="w-5 h-5 ml-2 transform transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CALL TO ACTION */}
      <section 
        className="relative py-24 px-6 lg:px-20 overflow-hidden bg-slate-900"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-navy/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center section-fade">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to optimize your supply chain?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Join hundreds of satisfied customers who trust Gallant Line Haul Corp with their most critical freight.</p>
          <Link 
            href="/quote" 
            className="inline-block bg-white text-teal-700 font-bold py-4 px-12 rounded-lg shadow-xl transition-all duration-300 hover:bg-slate-50 hover:scale-105 hover:-translate-y-1"
          >
            Get Started Today
          </Link>
        </div>
      </section>
      
    </div>
  );
}