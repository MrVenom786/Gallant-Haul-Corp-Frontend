import Link from 'next/link';

export default function LtlPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <section className="relative text-white py-28 px-6 lg:px-20 bg-slate-900" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center section-fade">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">Less Than Truckload (LTL)</h1>
          <p className="text-lg text-slate-200 mb-8 leading-relaxed">Flexible, economical shipping for smaller freight loads without compromising transit speeds.</p>
          <Link href="/quote" className="gradient-teal text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:scale-105 transition-all inline-block">Get LTL Quote</Link>
        </div>
      </section>
      <section className="py-20 px-6 lg:px-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-navy mb-6">Pay Only For The Space You Need</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-8">Gallant Line Haul Corp connects your partial shipments into optimized consolidated routes with trusted partner networks across North America.</p>
      </section>
    </div>
  );
}