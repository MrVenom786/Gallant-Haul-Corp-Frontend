import Link from 'next/link';
import Image from 'next/image';

export default function CarriersPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative text-white py-32 px-6 lg:px-20 bg-slate-950 flex items-center justify-center overflow-hidden min-h-[60vh]">
        <Image 
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" 
          alt="Carrier Network Highway" 
          fill 
          className="object-cover opacity-40 mix-blend-luminosity"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 gradient-hero opacity-80"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center lg:text-left w-full section-fade">
          <span className="bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 inline-block backdrop-blur-md">
            Carrier Partner Program
          </span>
          <h1 className="text-4xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
            More Than Freight.<br/><span className="text-gradient">We Treat Carriers Like Family.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
            Join thousands of trusted owner-operators and fleet owners who enjoy dedicated cross-border lanes, fast payment schedules, and 24/7 dispatch backing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="/careers/apply" className="gradient-teal text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:scale-105 transition-all">
              Apply to Join Network
            </Link>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-4 px-10 rounded-xl backdrop-blur-sm transition-all">
              Contact US
            </Link>
          </div>
        </div>
      </section>

      {/* Carrier Benefits Grid */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Why Top Carriers Partner With Gallant</h2>
          <div className="w-20 h-1 gradient-teal mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-xl mx-auto">We keep your trucks loaded, moving, and paid on time with zero friction.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 gradient-teal text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">⚡</div>
            <h3 className="text-2xl font-bold text-navy mb-3">Fast & Reliable Pay</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Enjoy flexible quick-pay options and guaranteed settlements so your cash flow remains uninterrupted.</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 gradient-teal text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">🛣️</div>
            <h3 className="text-2xl font-bold text-navy mb-3">Dedicated Lanes</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Say goodbye to empty backhauls. Access high-volume, predictable cross-border lanes between Canada and the US.</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 gradient-teal text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">🛡️</div>
            <h3 className="text-2xl font-bold text-navy mb-3">24/7 Dispatch Support</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Our experienced logistics coordinators are on standby around the clock to assist with border crossings and routing.</p>
          </div>
        </div>

        {/* Onboarding Call to Action Banner */}
        <div className="gradient-navy rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl section-fade text-center">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-5 [background-size:16px_16px]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">Ready to hit the road with Gallant?</h3>
            <p className="text-slate-300 mb-10 leading-relaxed font-light">
              Submit your carrier profile and verify your insurance in minutes through our secure digital onboarding portal.
            </p>
            <Link href="/careers/apply" className="gradient-teal text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:scale-105 transition-all inline-block">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}