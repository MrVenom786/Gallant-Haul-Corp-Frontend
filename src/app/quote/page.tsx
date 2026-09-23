"use client";

import { useState } from "react";
import Image from "next/image";

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "loading" | null;
    text: string;
  }>({ type: null, text: "" });

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    pickup: "",
    destination: "",
    equipment: "Dry Van",
    date: "",
    notes: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendQuote = async () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.pickup || !formData.destination || !formData.date) {
      setStatusMessage({
        type: "error",
        text: "Please fill in all required fields (Name, Email, Phone, Pickup, Destination, Date)."
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ type: "loading", text: "Connecting to server and sending emails..." });

    try {
      const response = await fetch("http://localhost:5000/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage({
          type: "success",
          text: `Email successfully sent! Confirmation delivered.`
        });
        setFormData({
          fullName: "",
          company: "",
          email: "",
          phone: "",
          pickup: "",
          destination: "",
          equipment: "Dry Van",
          date: "",
          notes: ""
        });
      } else {
        setStatusMessage({
          type: "error",
          text: `Server Error: ${result.error || "Failed to dispatch email."}`
        });
      }
    } catch (err: unknown) {
      console.error("Transmission error:", err);
      setStatusMessage({
        type: "error",
        text: "Connection Refused: Make sure your backend terminal is running on port 5000 (node server.js)."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 section-fade">
          <h1 className="text-4xl font-bold text-navy mb-4">Request a Freight Quote</h1>
          <p className="text-lg text-slate-600">
            Provide your shipment details below, and our logistics team will get back to you within 30 minutes.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          {/* Main Input Area */}
          <div className="w-full lg:w-2/3 p-8 lg:p-12 space-y-8">
            
            {/* 1. Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-navy mb-4 border-b pb-2">1. Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-900"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-900"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-900"
                    placeholder="jane@acme.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-900"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>

            {/* 2. Shipment Details */}
            <div>
              <h3 className="text-xl font-semibold text-navy mb-4 border-b pb-2">2. Shipment Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Pickup Location *</label>
                  <input
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-900"
                    placeholder="Toronto, ON"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Delivery Location *</label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-900"
                    placeholder="Chicago, IL"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Equipment Type</label>
                  <select
                    name="equipment"
                    value={formData.equipment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white text-slate-900"
                  >
                    <option value="Dry Van">Dry Van</option>
                    <option value="Refrigerated (Reefer)">Refrigerated (Reefer)</option>
                    <option value="Flatbed">Flatbed</option>
                    <option value="Step Deck">Step Deck</option>
                    <option value="LTL (Less Than Truckload)">LTL (Less Than Truckload)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Pickup Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Additional Details</label>
                <textarea
                  rows={4}
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none text-slate-900"
                  placeholder="E.g., 40,000 lbs, 24 pallets of auto parts..."
                ></textarea>
              </div>
            </div>

            {/* LIVE ON-SCREEN STATUS BANNER */}
            {statusMessage.type && (
              <div
                className={`p-4 rounded-xl border text-sm font-semibold flex items-center gap-3 transition-all ${
                  statusMessage.type === "loading"
                    ? "bg-amber-50 border-amber-200 text-amber-800 animate-pulse"
                    : statusMessage.type === "success"
                    ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                    : "bg-rose-50 border-rose-300 text-rose-800"
                }`}
              >
                <span className="text-lg">
                  {statusMessage.type === "loading" && "⏳"}
                  {statusMessage.type === "success" && "✅"}
                  {statusMessage.type === "error" && "⚠️"}
                </span>
                <span>{statusMessage.text}</span>
              </div>
            )}

            <button
              type="button"
              onClick={handleSendQuote}
              disabled={isSubmitting}
              className="w-full gradient-teal text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex justify-center items-center cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? "Dispatching Email..." : "Submit Quote Request"}
            </button>
          </div>

          {/* Right Column: Information */}
          <div className="hidden lg:block w-1/3 bg-slate-900 relative">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
              alt="Warehouse logistics"
              fill
              className="object-cover opacity-40"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Gallant?</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-3">✓</span> 24/7 Live Support & Tracking
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-3">✓</span> C-TPAT & CARB Certified
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-3">✓</span> Canadian Bonded Carrier
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-3">✓</span> Cross-Border Experts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}