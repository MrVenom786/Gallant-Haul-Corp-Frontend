import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 w-full">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 tracking-tight">Gallant Line Haul Corp</h3>
            <p className="mb-4 max-w-sm text-sm leading-relaxed">
              More than trucking — we are a family on the road. Trusted cross-border supply chain security, C-TPAT & CARB Certified.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li className="transform transition-transform hover:translate-x-2">
                <Link href="/services/services" className="hover:text-teal-400 transition-colors text-sm">Transportation Solutions</Link>
              </li>
              <li className="transform transition-transform hover:translate-x-2">
                <Link href="/carriers" className="hover:text-teal-400 transition-colors text-sm">Join Carrier Network</Link>
              </li>
              <li className="transform transition-transform hover:translate-x-2">
                <Link href="/about" className="hover:text-teal-400 transition-colors text-sm">Our Company</Link>
              </li>
              <li className="transform transition-transform hover:translate-x-2">
                <Link href="/contact" className="hover:text-teal-400 transition-colors text-sm">Contact & Apply</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center">
                <span className="mr-3 text-lg">📧</span>
                <a href="mailto:info@gallant-corp.com" className="hover:text-teal-400 transition-colors break-all">
                  info@gallant-corp.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-3 text-lg">📞</span>
                <a href="tel:+14167355356" className="hover:text-teal-400 transition-colors whitespace-nowrap">
                  +1 (416) 735-5356
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Gallant Line Haul Corp. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}