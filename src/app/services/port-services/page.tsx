import Link from 'next/link';

export default function PortServicesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-28 px-6 lg:px-20 bg-slate-900" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center section-fade">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">Port Drayage & Container Services</h1>
          <p className="text-lg text-slate-200 mb-8 leading-relaxed">Streamlined ocean container transport, port drayage coordination, and customs-compliant border transfers.</p>
          <Link href="/quote" className="gradient-teal text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:scale-105 transition-all inline-block">Request Drayage Support</Link>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">Seamless Terminal-to-Destination Transit</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">Navigating port congestion requires experienced dispatching and reliable carrier relationships. We coordinate container pickups, chassis provisioning, and secure inland transport to ensure zero demurrage penalties.</p>
            <ul className="space-y-3 text-slate-700 font-medium">
              <li className="flex items-center gap-2"><span className="text-teal-600 font-bold">✓</span> Fast Terminal Turnaround Times</li>
              <li className="flex items-center gap-2"><span className="text-teal-600 font-bold">✓</span> Bonded Carrier Freight Movement</li>
              <li className="flex items-center gap-2"><span className="text-teal-600 font-bold">✓</span> Direct Port-to-Warehouse Shuttles</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
            <h3 className="text-xl font-bold text-navy mb-4">Operations Overview</h3>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex justify-between border-b pb-2 font-medium"><span>Container Types</span><span className="text-slate-900 font-bold">20ft, 40ft, 53ft HC</span></div>
              <div className="flex justify-between border-b pb-2 font-medium"><span>Customs Clearance</span><span className="text-slate-900 font-bold">Fully Integrated PARS/PAPRS</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}