import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// server side client (service role key)
// ONLY use this in server-side contexts (API routes, Server Actions)
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-key";
export const supabaseAdmin = createClient(
    supabaseUrl,
    serviceRoleKey,
    { auth: { persistSession: false } }
);
