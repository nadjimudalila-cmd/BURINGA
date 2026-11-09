# Bulinga TSS Management System

A responsive React + Vite starter frontend for Bulinga Technical Secondary School.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Routes
### Public website
- `/` — Home (`src/pages/Home.jsx`)
- `/about` — About Us
- `/programs` — Programs
- `/contact` — Contact

### Nested dashboard
- `/dashboard` — Overview
- `/dashboard/students` — Students
- `/dashboard/staff` — Staff
- `/dashboard/classes` — Classes
- `/dashboard/reports` — Reports
- `/dashboard/settings` — Settings

The dashboard uses a parent layout with React Router's `Outlet`, so all dashboard pages share the same sidebar and top bar.

## Important
This is a frontend starter template. It currently uses sample/placeholder dashboard data and does not include a database, real sign-in, permissions, or persistent create/update/delete operations. Connect a backend (for example, Node/Express with PostgreSQL or Firebase/Supabase) before using it for real school records.

The supplied school crest is stored at `src/assets/school-logo.png`.
