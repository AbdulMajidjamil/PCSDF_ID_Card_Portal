// PCSDF Portal public Supabase configuration.
// This file is intended for GitHub Pages/browser use.
// Only use a Supabase publishable key here — NEVER a secret/service-role key.
window.PCSDF_SUPABASE_URL = "https://orgbjapjdfqdtynwiaod.supabase.co";
window.PCSDF_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_U7o1VLfV1cyJzvlLLLo8vg_eLDsmVuk";

if (window.supabase && window.PCSDF_SUPABASE_URL && window.PCSDF_SUPABASE_PUBLISHABLE_KEY) {
  window.supabaseClient = window.supabase.createClient(
    window.PCSDF_SUPABASE_URL,
    window.PCSDF_SUPABASE_PUBLISHABLE_KEY
  );
} else {
  window.supabaseClient = null;
}
