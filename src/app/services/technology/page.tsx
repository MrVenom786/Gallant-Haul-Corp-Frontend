import Link from 'next/link';

export default function TechnologyPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-28 px-6 lg:px-20 bg-slate-900" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center section-fade">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">Advanced Logistics Technology</h1>
          <p className="text-lg text-slate-200 mb-8 leading-relaxed">Driving supply chain excellence through intelligent automation, predictive analytics, and real-time shipment visibility.</p>
          <Link href="/login/client" className="gradient-teal text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:scale-105 transition-all inline-block">Access Client Portal</Link>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">Complete Visibility and Control</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">At Gallant Line Haul Corp, we leverage enterprise-grade logistics software to streamline communication and eliminate blind spots. Our digital infrastructure empowers shippers with instantaneous data access from pickup to final delivery.</p>
            <ul className="space-y-3 text-slate-700 font-medium">
              <li className="flex items-center gap-2"><span className="text-teal-600 font-bold">✓</span> Live GPS Geofencing & Milestone Tracking</li>
              <li className="flex items-center gap-2"><span className="text-teal-600 font-bold">✓</span> Electronic Document Interchange (EDI & API)</li>
              <li className="flex items-center gap-2"><span className="text-teal-600 font-bold">✓</span> Automated Proactive Exception Management</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
            <h3 className="text-xl font-bold text-navy mb-4">Platform Architecture</h3>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex justify-between border-b pb-2 font-medium"><span>System Availability</span><span className="text-slate-900 font-bold">99.9% Uptime Guarantee</span></div>
              <div className="flex justify-between border-b pb-2 font-medium"><span>Data Protection</span><span className="text-slate-900 font-bold">Enterprise-Grade Encryption</span></div>
              <div className="flex justify-between border-b pb-2 font-medium"><span>Reporting</span><span className="text-slate-900 font-bold">Custom KPI & Analytics Dashboards</span></div>
            </div>
          </div>
        </div>

        {/* Secondary Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-200">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
            <div className="w-12 h-12 gradient-teal text-white rounded-xl flex items-center justify-center text-xl mb-6 font-bold">01</div>
            <h3 className="text-xl font-bold text-navy mb-3">Instant Dispatch & Booking</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Streamline order entry with automated load matching and instant confirmation protocols designed for high-volume shippers.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
            <div className="w-12 h-12 gradient-teal text-white rounded-xl flex items-center justify-center text-xl mb-6 font-bold">02</div>
            <h3 className="text-xl font-bold text-navy mb-3">Digital Paperwork Archive</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Access Bills of Lading (BOL), Customs paperwork, and signed Proof of Delivery (POD) documents seconds after delivery.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
            <div className="w-12 h-12 gradient-teal text-white rounded-xl flex items-center justify-center text-xl mb-6 font-bold">03</div>
            <h3 className="text-xl font-bold text-navy mb-3">Seamless Integrations</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Connect your ERP or WMS directly into our operational workflows for automated status updates and frictionless freight execution.</p>
          </div>
        </div>
      </section>
    </div>
  );
}