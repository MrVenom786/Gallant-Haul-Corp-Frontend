import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative text-white py-32 px-6 lg:px-20 bg-slate-900 flex items-center justify-center overflow-hidden"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center section-fade">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
            Driven by Safety. <br/><span className="text-gradient">Defined by Reliability.</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Gallant Line Haul Corp is a premier Canadian freight brokerage and bonded carrier delivering exceptional cross-border logistics solutions across North America.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & MISSION */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="section-fade">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6 tracking-tight">Our Corporate Story</h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-lg">
              Established with a clear vision to bridge the gap in North American supply chain security and efficiency, Gallant Line Haul Corp has grown into a trusted industry leader. We specialize in complex cross-border logistics, full truckload (FTL), intermodal distribution, and specialized freight handling.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our culture is built around treating our clients and independent carrier networks like family. By combining advanced dispatch technology with personalised customer care, we ensure your freight moves securely and on schedule every single time.
            </p>
            <div className="flex gap-4">
              <Link href="/quote" className="gradient-teal text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:scale-105 transition-all">
                Request a Quote
              </Link>
              <Link href="/contact" className="bg-white border-2 border-slate-300 text-slate-800 font-bold py-3.5 px-8 rounded-xl hover:bg-slate-100 transition-all">
                Contact Our Team
              </Link>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 space-y-6 section-fade" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-navy mb-4 border-b pb-3">Core Certifications</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl bg-teal-50 p-3 rounded-2xl">🍁</span>
                <div>
                  <h4 className="font-bold text-navy">Canadian Bonded Carrier</h4>
                  <p className="text-slate-600 text-sm">Authorized for secure in-bond freight transport across Canadian borders without immediate duty clearance delays.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl bg-teal-50 p-3 rounded-2xl">🛡️</span>
                <div>
                  <h4 className="font-bold text-navy">C-TPAT Certified</h4>
                  <p className="text-slate-600 text-sm">Rigorous supply chain security standards minimizing border crossing times and maximizing cargo safety.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl bg-teal-50 p-3 rounded-2xl">🌱</span>
                <div>
                  <h4 className="font-bold text-navy">CARB California Certified</h4>
                  <p className="text-slate-600 text-sm">Environmentally compliant low-emissions fleet standards meeting strict California Air Resources Board regulations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CORE VALUES GRID */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Our Core Values</h2>
          <div className="w-20 h-1 gradient-teal mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 gradient-teal text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md">🛡️</div>
            <h3 className="text-xl font-bold text-navy mb-3">Uncompromising Safety</h3>
            <p className="text-slate-600 leading-relaxed text-sm">Safety is woven into every mile we drive, protecting our drivers, your cargo, and the general public.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 gradient-teal text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md">⚡</div>
            <h3 className="text-xl font-bold text-navy mb-3">Operational Agility</h3>
            <p className="text-slate-600 leading-relaxed text-sm">Fast decision-making and 24/7 dispatch support ensure your supply chain never misses a beat.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 gradient-teal text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md">🤝</div>
            <h3 className="text-xl font-bold text-navy mb-3">Long-Term Partnership</h3>
            <p className="text-slate-600 leading-relaxed text-sm">We view our shippers and carrier networks as true partners, fostering mutual growth and trust.</p>
          </div>
        </div>
      </section>

    </div>
  );
}