-- users (admin)
create table if not exists users (
  id uuid default uuid_generate_v4() primary key,
  email text unique,
  password_hash text, -- bcrypt
  role text default 'admin',
  created_at timestamptz default now()
);

-- projects
create table if not exists projects (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  status text default 'planning', -- planning, in_progress, completed
  description text,
  budget numeric,
  client_name text,
  start_date date,
  end_date date,
  cover_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- invoices
create table if not exists invoices (
  id uuid default uuid_generate_v4() primary key,
  project_id uuid references projects(id) on delete set null,
  invoice_number text unique,
  items jsonb,
  total numeric,
  due_date date,
  paid boolean default false,
  created_at timestamptz default now()
);

-- quotations
create table if not exists quotations (
  id uuid default uuid_generate_v4() primary key,
  project_id uuid references projects(id) on delete set null,
  items jsonb,
  total numeric,
  valid_until date,
  created_at timestamptz default now()
);

-- leads
create table if not exists leads (
  id uuid default uuid_generate_v4() primary key,
  name text,
  email text,
  phone text,
  message text,
  status text default 'new',
  created_at timestamptz default now()
);

-- services (CMS)
create table if not exists services (
  id uuid default uuid_generate_v4() primary key,
  title text,
  slug text unique,
  summary text,
  content text,
  icon_url text,
  created_at timestamptz default now()
);

-- portfolio
create table if not exists portfolio_items (
  id uuid default uuid_generate_v4() primary key,
  title text,
  slug text unique not null,
  summary text,
  images jsonb,
  video_url text,
  created_at timestamptz default now()
);
