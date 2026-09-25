# PCSDF ID Card Portal

GitHub Pages frontend for the PCSDF ID Card Portal. The portal assigns registration numbers beginning at `PCSDF-2026-051` and saves registration records through a secure Supabase RPC backend.

## Important architecture note
GitHub Pages is static hosting and cannot securely write private student records into a GitHub repository from browser JavaScript. This package therefore keeps the portal and signature on GitHub while using Supabase for the database. Do **not** put a GitHub personal access token in the browser.

## Files
- `index.html` — ID card generator and registration UI
- `verify.html` — public verification page
- `js/config.js` — Supabase project configuration
- `supabase/schema.sql` — database table, sequence, RPCs, and security setup
- `assets/signature.png` — fixed PCSDF authorized signature

## Setup
1. Create a Supabase project.
2. Open SQL Editor and run `supabase/schema.sql`.
3. Copy your Supabase Project URL and anon/publishable key into `js/config.js`.
4. Upload the whole folder to GitHub with `index.html` at repository root.
5. Enable GitHub Pages from the `main` branch and `/ (root)`.
6. Open the live site and click **Register & Save Record**.

The database sequence is initialized so the first assigned registration number is `PCSDF-2026-051`. Every successful registration receives the next number from the database, preventing the browser from deciding the official ID.

## Security
Only the public verification fields should be exposed by `get_pcsdf_verification`. Private data should remain protected by database policies and administrative access controls. The Supabase anon key is designed for browser use; never place a service-role key in `config.js`.
