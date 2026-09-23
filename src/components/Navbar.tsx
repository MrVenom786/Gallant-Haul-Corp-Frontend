"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    // 1. Fetch current logged-in user on load
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // 2. Listen to real-time auth changes (login, logout, session update)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    closeAll();
    router.push('/');
    router.refresh();
  };

  const toggleMobileMenu = (menu: string) => {
    setActiveMobileMenu(activeMobileMenu === menu ? null : menu);
  };

  const closeAll = () => {
    setIsOpen(false);
    setActiveMobileMenu(null);
  };

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 w-full shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative z-50 bg-slate-900">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeAll} className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors duration-300">
              Gallant Line Haul Corp
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center h-full">
            
            {/* Client Services Dropdown */}
            <div className="relative group h-full flex items-center">
              <button className="text-sm font-medium hover:text-blue-400 transition-colors flex items-center gap-1 py-8 cursor-pointer">
                Client Services
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute top-[80px] left-0 w-64 bg-white text-slate-900 rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 border-t-4 border-blue-600 flex flex-col py-2">
                <Link href="/services/truckload" className="px-4 py-2 text-sm hover:bg-slate-100 hover:text-blue-600 transition-colors">Truckload</Link>
                <Link href="/services/intermodal" className="px-4 py-2 text-sm hover:bg-slate-100 hover:text-blue-600 transition-colors">Intermodal</Link>
                <Link href="/services/ltl" className="px-4 py-2 text-sm hover:bg-slate-100 hover:text-blue-600 transition-colors">Less Than Truckload (LTL)</Link>
                <Link href="/services/warehousing" className="px-4 py-2 text-sm hover:bg-slate-100 hover:text-blue-600 transition-colors">Warehousing</Link>
                <Link href="/services/port-services" className="px-4 py-2 text-sm hover:bg-slate-100 hover:text-blue-600 transition-colors">Port Services</Link>
                <Link href="/services/technology" className="px-4 py-2 text-sm hover:bg-slate-100 hover:text-blue-600 transition-colors">Technology</Link>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative group h-full flex items-center">
              <button className="text-sm font-medium hover:text-blue-400 transition-colors flex items-center gap-1 py-8 cursor-pointer">
                About
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute top-[80px] left-0 w-48 bg-white text-slate-900 rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 border-t-4 border-blue-600 flex flex-col py-2">
                <Link href="/about" className="px-4 py-2 text-sm hover:bg-slate-100 hover:text-blue-600 transition-colors">About Us</Link>
                <Link href="/about/leadership" className="px-4 py-2 text-sm hover:bg-slate-100 hover:text-blue-600 transition-colors">Leadership</Link>
              </div>
            </div>

            <Link href="/carriers" className="text-sm font-medium hover:text-blue-400 transition-colors duration-300">Careers</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-400 transition-colors duration-300">Contact Us</Link>

            {/* Dynamic Supabase Authentication Section */}
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-xs bg-slate-800 text-blue-300 border border-blue-500/30 px-3 py-1.5 rounded-full font-medium max-w-[150px] truncate">
                  {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="relative group h-full flex items-center">
                <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1 py-8 cursor-pointer">
                  Login
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className="absolute top-[80px] right-0 w-48 bg-white text-slate-900 rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 border-t-4 border-blue-600 flex flex-col py-2">
                  <Link href="/login/client" className="px-4 py-2 text-sm hover:bg-slate-100 hover:text-blue-600 transition-colors">Client Login</Link>
                  <Link href="/login/careers" className="px-4 py-2 text-sm hover:bg-slate-100 hover:text-blue-600 transition-colors">Careers Login</Link>
                </div>
              </div>
            )}

            {/* Get Quote CTA */}
            <Link 
              href="/quote" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded shadow-lg font-semibold transition-transform duration-200 hover:scale-105 active:scale-95 ml-2"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button 
              type="button"
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white focus:outline-none p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg className="h-7 w-7 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-slate-900 shadow-2xl border-t border-slate-700 z-40 max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-8 flex flex-col">
            
            {/* Mobile Client Services */}
            <div className="border-b border-slate-800">
              <button onClick={() => toggleMobileMenu('services')} className="w-full text-left py-4 text-base font-medium text-white flex justify-between items-center cursor-pointer">
                Client Services
                <svg className={`w-5 h-5 transition-transform duration-300 ${activeMobileMenu === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className={`bg-slate-800 rounded-md overflow-hidden transition-all duration-300 ${activeMobileMenu === 'services' ? 'max-h-96 mb-4' : 'max-h-0'}`}>
                <div className="flex flex-col py-2 px-4 space-y-3">
                  <Link href="/services/truckload" onClick={closeAll} className="text-sm text-slate-300 hover:text-white block">Truckload</Link>
                  <Link href="/services/intermodal" onClick={closeAll} className="text-sm text-slate-300 hover:text-white block">Intermodal</Link>
                  <Link href="/services/ltl" onClick={closeAll} className="text-sm text-slate-300 hover:text-white block">Less Than Truckload (LTL)</Link>
                  <Link href="/services/warehousing" onClick={closeAll} className="text-sm text-slate-300 hover:text-white block">Warehousing</Link>
                  <Link href="/services/port-services" onClick={closeAll} className="text-sm text-slate-300 hover:text-white block">Port Services</Link>
                  <Link href="/services/technology" onClick={closeAll} className="text-sm text-slate-300 hover:text-white block">Technology</Link>
                </div>
              </div>
            </div>

            {/* Mobile About */}
            <div className="border-b border-slate-800">
              <button onClick={() => toggleMobileMenu('about')} className="w-full text-left py-4 text-base font-medium text-white flex justify-between items-center cursor-pointer">
                About
                <svg className={`w-5 h-5 transition-transform duration-300 ${activeMobileMenu === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className={`bg-slate-800 rounded-md overflow-hidden transition-all duration-300 ${activeMobileMenu === 'about' ? 'max-h-40 mb-4' : 'max-h-0'}`}>
                <div className="flex flex-col py-2 px-4 space-y-3">
                  <Link href="/about" onClick={closeAll} className="text-sm text-slate-300 hover:text-white block">About Us</Link>
                  <Link href="/about/leadership" onClick={closeAll} className="text-sm text-slate-300 hover:text-white block">Leadership</Link>
                </div>
              </div>
            </div>

            <Link href="/carriers" onClick={closeAll} className="block py-4 border-b border-slate-800 text-base font-medium text-white hover:text-blue-400">Careers</Link>
            <Link href="/contact" onClick={closeAll} className="block py-4 border-b border-slate-800 text-base font-medium text-white hover:text-blue-400">Contact Us</Link>

            {/* Mobile Dynamic Auth State */}
            {user ? (
              <div className="py-4 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs text-blue-300 bg-slate-800 px-3 py-1.5 rounded-full truncate max-w-[200px]">
                  {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm font-semibold text-rose-400 hover:text-rose-300 cursor-pointer"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="border-b border-slate-800">
                <button onClick={() => toggleMobileMenu('login')} className="w-full text-left py-4 text-base font-medium text-slate-300 flex justify-between items-center cursor-pointer">
                  Login
                  <svg className={`w-5 h-5 transition-transform duration-300 ${activeMobileMenu === 'login' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className={`bg-slate-800 rounded-md overflow-hidden transition-all duration-300 ${activeMobileMenu === 'login' ? 'max-h-40 mb-4' : 'max-h-0'}`}>
                  <div className="flex flex-col py-2 px-4 space-y-3">
                    <Link href="/login/client" onClick={closeAll} className="text-sm text-slate-300 hover:text-white block">Client Login</Link>
                    <Link href="/login/careers" onClick={closeAll} className="text-sm text-slate-300 hover:text-white block">Careers Login</Link>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-8 pb-4">
              <Link 
                href="/quote" 
                onClick={closeAll}
                className="w-full flex justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-4 rounded shadow-md font-bold transition-colors text-lg"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}