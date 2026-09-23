"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function CareersLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [statusMessage, setStatusMessage] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              role: "driver",
              full_name: fullName,
            },
          },
        });

        if (error) throw error;

        if (data.session) {
          router.push("/careers/apply");
          router.refresh();
        } else {
          setStatusMessage({
            type: "success",
            text: "Driver profile created! Check your email for confirmation.",
          });
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        router.push("/careers/apply");
        router.refresh();
      }
    } catch (err: any) {
      setStatusMessage({
        type: "error",
        text: err.message || "Failed to authenticate driver account.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-navy">
            {isSignUp ? "Driver Registration" : "Driver & Careers Portal"}
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            {isSignUp
              ? "Join Gallant Line Haul Corp's certified driver team."
              : "Access your driver profile, dispatch runs, and settlement reports."}
          </p>
        </div>

        {statusMessage && (
          <div
            className={`p-4 rounded-xl text-sm font-medium mb-6 ${
              statusMessage.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-rose-50 text-rose-800 border border-rose-200"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-5">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Smith"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 outline-none text-slate-900"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="driver@gmail.com"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 outline-none text-slate-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 outline-none text-slate-900"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full gradient-teal text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? "Authenticating..." : isSignUp ? "Register Driver" : "Driver Log In"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          {isSignUp ? (
            <p>
              Already registered?{" "}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(false);
                  setStatusMessage(null);
                }}
                className="text-teal-600 font-semibold hover:underline"
              >
                Sign In
              </button>
            </p>
          ) : (
            <p>
              New driver applying?{" "}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(true);
                  setStatusMessage(null);
                }}
                className="text-teal-600 font-semibold hover:underline"
              >
                Create Driver Account
              </button>
            </p>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-slate-100 text-center">
          <Link
            href="/login/client"
            className="text-xs text-slate-500 hover:text-navy transition-colors"
          >
            Looking for shipper or client tracking? Switch to Client Login →
          </Link>
        </div>
      </div>
    </div>
  );
}