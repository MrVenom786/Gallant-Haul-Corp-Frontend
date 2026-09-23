import Link from 'next/link';

export default function TruckloadPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <section className="relative text-white py-28 px-6 lg:px-20 bg-slate-900" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center section-fade">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">Full Truckload (FTL) Freight</h1>
          <p className="text-lg text-slate-200 mb-8 leading-relaxed">Dedicated capacity across North America with real-time tracking, C-TPAT border compliance, and guaranteed delivery schedules.</p>
          <Link href="/quote" className="gradient-teal text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:scale-105 transition-all inline-block">Request FTL Quote</Link>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">Reliable Capacity When You Need It</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">At Gallant Line Haul Corp, our FTL solutions provide exclusive trailer use for your large shipments. Whether standard dry vans or temperature-controlled reefers, we ensure direct point-to-point transit without handling delays.</p>
            <ul className="space-y-3 text-slate-700 font-medium">
              <li className="flex items-center gap-2"><span className="text-teal-600 font-bold">✓</span> 53' Air-Ride Dry Vans & Reefers</li>
              <li className="flex items-center gap-2"><span className="text-teal-600 font-bold">✓</span> 24/7 Satellite Tracking & Geofencing</li>
              <li className="flex items-center gap-2"><span className="text-teal-600 font-bold">✓</span> C-TPAT & CARB Certified Fleet</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
            <h3 className="text-xl font-bold text-navy mb-4">FTL Specifications</h3>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex justify-between border-b pb-2 font-medium"><span>Max Weight</span><span className="text-slate-900 font-bold">44,000 lbs</span></div>
              <div className="flex justify-between border-b pb-2 font-medium"><span>Trailer Length</span><span className="text-slate-900 font-bold">53 Foot</span></div>
              <div className="flex justify-between border-b pb-2 font-medium"><span>Cross-Border</span><span className="text-slate-900 font-bold">Canada / USA Bonded</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}