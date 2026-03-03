# Fenrir Security Dashboard

A modern, responsive security scan management dashboard built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

This application provides an intuitive interface for managing vulnerability scans, monitoring scan progress, and analyzing security findings in real time.

---

## Features

### Authentication
- Create Account flow
- Login flow with dashboard redirection
- Client-side form toggling (Create Account ↔ Login)

### Scan Management
- Paginated scan table
- Fixed-width responsive table with horizontal scroll
- Clickable scan rows (route-based navigation)
- Real-time progress indicators
- Vulnerability severity breakdown (Critical / High / Medium / Low)

### Responsive Layout
- Desktop persistent sidebar
- Mobile slide-in drawer sidebar
- Animated transitions (Framer Motion)
- Mobile menu toggle with overlay backdrop

### Notifications
- Toast notifications for system feedback
- Success / Error states supported

---

## Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**
- Custom UI components (Badge, StatusChip, Button)

---

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/aps.git

# Navigate into the project
cd aps

# Install dependencies
npm install

# Run development server
npm run dev
```

Application runs at: http://localhost:3000

## Core UI Patterns

Authentication Flow

- Default view: Create Account
- On submit or clicking "Log in": switches to Login
- Successful login → redirects to /dashboard

