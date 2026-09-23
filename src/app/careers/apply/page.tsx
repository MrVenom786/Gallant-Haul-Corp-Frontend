"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function ApplyNowPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  
  const [step, setStep] = useState<"form" | "verify" | "success">("form");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const supabase = createClient();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      // 1. Create the user account with password & metadata
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName, phone_number: phone, role: 'driver' }
        }
      });

      if (signUpError) throw signUpError;

      // 2. Immediately request a 6-digit OTP code to verify ownership
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: false }
      });

      if (otpError) throw otpError;

      // 3. Force state update to show the OTP typing box
      setStep("verify");
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to process sign up. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: 'email'
      });

      if (error) throw error;
      setStep("success");
    } catch (err: any) {
      setErrorMsg(err.message || "Invalid code. Please check your email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex w-full bg-slate-50">
      
      {/* Left Visual Panel */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop" 
          alt="Fleet logistics" 
          fill 
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-teal-950/90"></div>
        <div className="relative z-10 p-16 text-white max-w-xl section-fade">
          <Link href="/" className="inline-block mb-12 text-3xl font-bold tracking-tight hover:text-teal-400 transition-colors">
            Gallant Line Haul
          </Link>
          <h1 className="text-5xl font-bold mb-6 leading-tight text-white">
            Join our elite carrier network.
          </h1>
          <p className="text-xl text-slate-200 font-light leading-relaxed">
            Set up your professional driver credentials in minutes and hit the best lanes across Canada and the US.
          </p>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-20 bg-slate-50 relative">
        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 section-fade">
          
          {errorMsg && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg font-medium text-center">
              {errorMsg}
            </div>
          )}

          {/* STEP 1: INITIAL SIGN UP FORM */}
          {step === "form" && (
            <>
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Driver Sign Up</h2>
                <p className="text-slate-500 font-medium">Create your secure portal login.</p>
              </div>

              <form onSubmit={handleSignUp} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                  <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-550 focus:bg-white focus:border-teal-500 outline-none text-slate-900" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 outline-none text-slate-900" placeholder="driver@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 outline-none text-slate-900" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 outline-none text-slate-900 tracking-widest" placeholder="••••••••" />
                </div>

                <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 mt-2">
                  {isLoading ? "Sending Verification Code..." : "Continue & Send OTP"}
                </button>
              </form>
            </>
          )}

          {/* STEP 2: OTP VERIFICATION BOX */}
          {step === "verify" && (
            <form onSubmit={handleVerifyEmail} className="space-y-6 text-center section-fade">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Enter Verification Code</h2>
              <p className="text-slate-600 text-sm">We sent a 6-digit code to <br/><span className="font-bold text-slate-900">{email}</span></p>
              
              <input 
                type="text" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)} 
                required 
                maxLength={6} 
                className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 outline-none text-slate-900 font-bold tracking-[1em] text-center text-xl" 
                placeholder="------" 
              />

              <button type="submit" disabled={isLoading || otp.length < 6} className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all">
                {isLoading ? "Verifying..." : "Confirm & Complete Sign Up"}
              </button>
            </form>
          )}

          {/* STEP 3: SUCCESS STATE */}
          {step === "success" && (
            <div className="text-center py-6 section-fade">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Account Verified!</h2>
              <p className="text-slate-600 mb-8">Your email has been confirmed and your driver account is ready.</p>
              <Link href="/login/careers" className="block w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors">
                Sign In to Portal
              </Link>
            </div>
          )}

          {step !== "success" && (
            <div className="mt-8 pt-6 border-t-2 border-slate-100 text-center">
              <p className="text-slate-600 font-medium text-sm">
                Already have an account?{' '}
                <Link href="/login/careers" className="text-teal-600 font-bold hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}