// PCSDF Portal public Supabase configuration.
// GitHub Pages / browser use.
// Use ONLY the Supabase publishable key here.

window.PCSDF_SUPABASE_URL = "https://yolwnkcrikfbetsrmynx.supabase.co";

window.PCSDF_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_U7o1VLfV1cyJzvlLLLo8vg_eLDsmVuk";

if (
  window.supabase &&
  window.PCSDF_SUPABASE_URL &&
  window.PCSDF_SUPABASE_PUBLISHABLE_KEY
) {
  window.supabaseClient = window.supabase.createClient(
    window.PCSDF_SUPABASE_URL,
    window.PCSDF_SUPABASE_PUBLISHABLE_KEY
  );
} else {
  window.supabaseClient = null;
}
