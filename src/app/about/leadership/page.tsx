import Link from 'next/link';
import Image from 'next/image';

export default function LeadershipPage() {
  const leadershipPillars = [
    {
      code: "01",
      title: "Executive Direction & Strategy",
      focus: "Long-Term Fleet Scalability & Cross-Border Expansion",
      description: "Our executive framework focuses on sustainable growth, building robust multi-modal transport corridors across Canada and the United States, and maintaining an agile response to global supply chain shifts.",
      metric: "100% Bonded & Certified",
      icon: "🌐"
    },
    {
      code: "02",
      title: "Operational & Terminal Excellence",
      focus: "Day-to-Day Dispatch, Routing, & Real-Time Logistics",
      description: "Driven by automated dispatch protocols and expert terminal controllers, our operations ensure that every shipment moves through optimized routes with zero unnecessary dwell time.",
      metric: "24/7 Live Monitoring",
      icon: "⚡"
    },
    {
      code: "03",
      title: "Safety, Compliance & Security",
      focus: "C-TPAT, CARB Standards, & Highway Risk Mitigation",
      description: "Security is non-negotiable. Our compliance committees enforce rigorous safety audits, low-emissions standards, and strict cargo protection protocols to safeguard every mile.",
      metric: "Zero-Incident Benchmark",
      icon: "🛡️"
    },
    {
      code: "04",
      title: "Financial Governance & Treasury",
      focus: "Capital Optimization & Transparent Shipper/Carrier Accounting",
      description: "We maintain bulletproof fiscal management, providing independent carriers with rapid payment options and offering enterprise shippers predictable, transparent freight billing.",
      metric: "Fast Pay Guarantee",
      icon: "📊"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION WITH MODERN CORPORATE STRATEGY IMAGE */}
      <section className="relative text-white py-36 px-6 lg:px-20 bg-slate-950 flex items-center justify-center overflow-hidden min-h-[70vh]">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Corporate Management Architecture" 
          fill 
          className="object-cover opacity-35 mix-blend-luminosity"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent"></div>
        <div className="absolute inset-0 gradient-hero opacity-85"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center lg:text-left w-full section-fade">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Corporate Governance & Architecture
          </div>
          <h1 className="text-4xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
            Leadership Rooted in <br/><span className="text-gradient">Systemic Reliability.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
            At Gallant Line Haul Corp, leadership is structured into core operational pillars, rigorous safety benchmarks, and transparent technological accountability rather than traditional individual hierarchy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="/contact" className="gradient-teal text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:scale-105 transition-all">
              Connect With Management
            </Link>
            <Link href="/services" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-4 px-8 rounded-xl backdrop-blur-sm transition-all">
              Explore Our Standards
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CORE PILLARS GRID */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">The Four Pillars of Our Command Structure</h2>
          <div className="w-20 h-1 gradient-teal mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-xl mx-auto">How our management framework guarantees top-tier performance across every shipping lane.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipPillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 section-fade"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="flex justify-between items-start mb-6">
                <span className="w-14 h-14 gradient-teal text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                  {pillar.icon}
                </span>
                <span className="text-4xl font-black text-slate-200 group-hover:text-teal-600/20 transition-colors">
                  {pillar.code}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-navy mb-2">{pillar.title}</h3>
              <p className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-4">{pillar.focus}</p>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">{pillar.description}</p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Benchmark Standard</span>
                <span className="bg-slate-100 text-slate-900 font-bold text-xs px-3 py-1.5 rounded-lg">{pillar.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3. INNOVATIVE ETHOS BANNER */}
        <div className="mt-24 gradient-navy rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl section-fade">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-5 [background-size:16px_16px]"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">Built on Transparency, Powered by Data</h3>
            <p className="text-slate-300 mb-10 leading-relaxed font-light">
              By removing traditional corporate bottlenecks and automating logistics workflows through our digital portal infrastructure, Gallant Line Haul Corp delivers unmatched predictability for modern supply chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="gradient-teal text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:scale-105 transition-all">
                Get in Touch Today
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}