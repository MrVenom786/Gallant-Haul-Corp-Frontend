import Link from 'next/link';
import Image from 'next/image';

export default function AllServicesPage() {
  const services = [
    {
      title: "Full Truckload (FTL)",
      slug: "truckload",
      description: "Dedicated 53' air-ride dry vans and reefers providing secure, direct point-to-point transit across North America with real-time GPS geofencing.",
      icon: "🚛",
      badge: "High Capacity"
    },
    {
      title: "Intermodal Logistics",
      slug: "intermodal",
      description: "Cost-effective, environmentally sustainable long-haul shipping combining rail efficiency with seamless highway drayage and transfers.",
      icon: "🌐",
      badge: "Eco-Friendly"
    },
    {
      title: "Less Than Truckload (LTL)",
      slug: "ltl",
      description: "Flexible, economical consolidation for smaller freight loads across North America without compromising transit speeds or reliability.",
      icon: "📦",
      badge: "Cost-Effective"
    },
    {
      title: "Warehousing & Storage",
      slug: "warehousing",
      description: "Secure, climate-controlled storage facilities with real-time inventory tracking, pick-and-pack fulfillment, and cross-docking services.",
      icon: "🏭",
      badge: "Secure Facility"
    },
    {
      title: "Port & Drayage Services",
      slug: "port-services",
      description: "Swift container drayage, customs clearance coordination (PARS/PAPRS), and port terminal logistics management to eliminate demurrage delays.",
      icon: "⚓",
      badge: "Customs Bonded"
    },
    {
      title: "Logistics Technology",
      slug: "technology",
      description: "Enterprise-grade visibility platforms providing 24/7 web access, instant digital document archiving, and automated EDI/API ERP integrations.",
      icon: "💻",
      badge: "Real-Time Tracking"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-white py-36 px-6 lg:px-20 bg-slate-950 flex items-center justify-center overflow-hidden min-h-[60vh]">
        <Image 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
          alt="Transportation Solutions Hub" 
          fill 
          className="object-cover opacity-35 mix-blend-luminosity"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent"></div>
        <div className="absolute inset-0 gradient-hero opacity-85"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center lg:text-left w-full section-fade">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-md">
            Comprehensive Supply Chain Portfolio
          </div>
          <h1 className="text-4xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
            End-to-End <br/><span className="text-gradient">Transportation Solutions.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
            More than just moving freight — we manage your entire logistical puzzle with C-TPAT security, Canadian Bonded expertise, and 24/7 active oversight.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="/quote" className="gradient-teal text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:scale-105 transition-all">
              Request a Custom Quote
            </Link>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-4 px-8 rounded-xl backdrop-blur-sm transition-all">
              Speak With An Expert
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Explore Our Core Divisions</h2>
          <div className="w-20 h-1 gradient-teal mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-xl mx-auto">Select a service below to review detailed specifications, equipment standards, and operational workflows.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 section-fade flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="w-14 h-14 gradient-teal text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    {service.icon}
                  </span>
                  <span className="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1.5 rounded-full border border-teal-100">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                  {service.description}
                </p>
              </div>

              <Link 
                href={`/services/${service.slug}`} 
                className="inline-flex items-center text-teal-600 font-bold hover:text-teal-800 transition-colors group/link mt-auto pt-4 border-t border-slate-100"
              >
                View full specifications 
                <svg className="w-5 h-5 ml-2 transform transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* 3. BOTTOM CTA BANNER */}
        <div className="mt-24 gradient-navy rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl section-fade text-center">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-5 [background-size:16px_16px]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">Need a specialized transport solution?</h3>
            <p className="text-slate-300 mb-10 leading-relaxed font-light">
              We handle complex, oversize, and high-security freight tailored to your exact supply chain requirements.
            </p>
            <Link href="/quote" className="gradient-teal text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:scale-105 transition-all inline-block">
              Request Your Rate Today
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}