-- PCSDF Supabase hardening / verification setup
-- This script is for the pcsdf_students table and register_pcsdf_student() function already created.

create or replace function public.get_pcsdf_verification(p_id text)
returns table(
  registration_number text,
  full_name text,
  role text,
  department text,
  issue_date date,
  expiry_date date,
  status text
)
language sql
security definer
set search_path = public
as $$
  select
    s.registration_number,
    s.full_name,
    s.role,
    s.department,
    s.issue_date,
    s.expiry_date,
    s.status
  from public.pcsdf_students s
  where s.registration_number = p_id
  limit 1;
$$;

revoke all on function public.get_pcsdf_verification(text) from public;
grant execute on function public.get_pcsdf_verification(text) to anon;

-- Force anonymous registration through the controlled RPC instead of direct table insert.
revoke insert on public.pcsdf_students from anon;

-- Verification uses the limited RPC above, so anonymous clients do not need direct table SELECT access.
revoke select on public.pcsdf_students from anon;

-- The registration RPC is the only public write path.
grant execute on function public.register_pcsdf_student(
  text, text, date, date, text, text, text
) to anon;
