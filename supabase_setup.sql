-- Run this in your Supabase SQL editor to set up the contact form table

create table if not exists contact_messages (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table contact_messages enable row level security;

-- Allow anyone to INSERT (contact form submissions)
create policy "Anyone can submit contact form"
  on contact_messages
  for insert
  to anon
  with check (true);

-- Only authenticated users (you) can read messages
create policy "Only authenticated users can read"
  on contact_messages
  for select
  to authenticated
  using (true);
