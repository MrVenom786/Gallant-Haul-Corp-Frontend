import Link from 'next/link';

export default function IntermodalPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <section className="relative text-white py-28 px-6 lg:px-20 bg-slate-900" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center section-fade">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">Intermodal Logistics</h1>
          <p className="text-lg text-slate-200 mb-8 leading-relaxed">Cost-effective, environmentally sustainable rail and truck shipping solutions across long hauls.</p>
          <Link href="/quote" className="gradient-teal text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:scale-105 transition-all inline-block">Book Intermodal Freight</Link>
        </div>
      </section>
      <section className="py-20 px-6 lg:px-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-navy mb-6">Combining Rail & Highway Efficiency</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-8">Our intermodal services optimize your long-distance shipping overhead while reducing carbon footprints. We coordinate seamless transfers between rail terminals and final-destination highway fleets.</p>
      </section>
    </div>
  );
}
