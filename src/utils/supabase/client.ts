import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    // Fallback prevents the entire app and Navbar layout from crashing immediately
    console.warn("Supabase keys are missing in .env.local! Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
    return createBrowserClient(
      url || "https://placeholder.supabase.co",
      anonKey || "placeholder-key"
    )
  }

  return createBrowserClient(url, anonKey)
}