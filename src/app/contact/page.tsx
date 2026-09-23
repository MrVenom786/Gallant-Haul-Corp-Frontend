"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative text-white py-28 px-6 lg:px-20 bg-slate-950 flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop" 
          alt="Contact Gallant Line Haul" 
          fill 
          className="object-cover opacity-30"
          unoptimized
        />
        <div className="absolute inset-0 gradient-hero opacity-85"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center section-fade">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
            Get in Touch With Our Team
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Have questions about cross-border shipping, carrier onboarding, or freight quotes? Our logistics experts are available 24/7.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information Column */}
          <div className="lg:col-span-1 space-y-8 section-fade">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 space-y-6">
              <h3 className="text-2xl font-bold text-navy mb-4">Direct Contacts</h3>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl bg-teal-50 p-3 rounded-2xl">📞</span>
                <div>
                  <h4 className="font-bold text-navy">Phone Support</h4>
                  <p className="text-slate-600 text-sm">+1 (416) 735-5356</p>
                  <p className="text-xs text-teal-600 font-semibold mt-1">Available 24/7 for Active Loads</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl bg-teal-50 p-3 rounded-2xl">📧</span>
                <div>
                  <h4 className="font-bold text-navy">Email Inquiry</h4>
                  <p className="text-slate-600 text-sm break-all">info@gallant-corp.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl bg-teal-50 p-3 rounded-2xl">📍</span>
                <div>
                  <h4 className="font-bold text-navy">Corporate Headquarters</h4>
                  <p className="text-slate-600 text-sm">Brampton, Ontario, Canada</p>
                  <p className="text-xs text-slate-400 mt-1">C-TPAT & Bonded Operations</p>
                </div>
              </div>
            </div>

            {/* Certifications Badge Card */}
            <div className="gradient-navy p-8 rounded-3xl text-white shadow-xl space-y-4">
              <h4 className="font-bold text-lg">Compliance Standards</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Operating strictly under Canadian Bonded, C-TPAT, and CARB California environmental requirements to ensure smooth North American trade corridors.
              </p>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2 section-fade" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">✓</div>
                  <h3 className="text-3xl font-bold text-navy">Message Sent Successfully!</h3>
                  <p className="text-slate-600 max-w-md mx-auto">Thank you for reaching out. A Gallant logistics specialist will review your inquiry and respond within 30 minutes.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 gradient-teal text-white font-bold py-3 px-8 rounded-xl shadow-md">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input type="text" required className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 outline-none text-slate-900 font-medium" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                      <input type="text" required className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 outline-none text-slate-900 font-medium" placeholder="Acme Logistics" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input type="email" required className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 outline-none text-slate-900 font-medium" placeholder="john@acme.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input type="tel" required className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 outline-none text-slate-900 font-medium" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Inquiry Type</label>
                    <select className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 outline-none text-slate-900 font-medium">
                      <option>General Freight Inquiry</option>
                      <option>Cross-Border Customs Question</option>
                      <option>Carrier Network Partnership</option>
                      <option>Billing & Accounting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                    <textarea rows={5} required className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 outline-none text-slate-900 font-medium resize-none" placeholder="Provide details about your shipping requirements or questions..."></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full gradient-teal text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    {isSubmitting ? "Sending Message..." : "Submit Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}