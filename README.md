# ✈️ Travel App Demo

Welcome to the **Travel App**, a modern web application built with **Next.js** and **React**, designed to help users discover and explore various travel destinations. This project demonstrates robust frontend development practices, API integration, and responsive UI/UX design.

## 🚀 Live Demo

👉 [Experience the app live here](https://travel-app-demo-ecru.vercel.app/)

---

## ✨ Features

- **Responsive Design**  
  Fully responsive layout using **Tailwind CSS**, optimized for mobile, tablet, and desktop.

- **Destination Listing**  
  Browse a curated list of travel destinations with details like name, location, price, and tags.

- **Search Functionality**  
  Instantly find destinations by name or location.

- **Tag-Based Filtering**  
  Filter destinations by tags (e.g., _beach_, _mountain_, _luxury_) for refined exploration.

- **Pagination**  
  Smoothly navigate large result sets using intuitive pagination controls.

- **Dynamic Detail Pages**  
  Click any destination to view a dedicated detail page with expanded information.

- **API Integration**  
  Data is served from an internal Next.js API route (`/api/places`) demonstrating full-stack capabilities.

- **Error Handling & Loading States**  
  Provides loading indicators and user-friendly error messages on API call failures.

---

## 🛠️ Technologies Used

- **Next.js (App Router)** – For routing, SSG, SSR, and API routes.
- **React** – Core UI library.
- **TypeScript** – Type safety and better DX.
- **Tailwind CSS** – Utility-first CSS for fast and consistent design.
- **Node.js** – Runtime environment.

---

## ⚙️ Getting Started (Local Setup)

Follow these steps to run the project locally:

### Prerequisites

- Node.js (v18.x or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd travel-app-demo

   

2. **Install dependencies:**

   ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
   
### Environment Variables
Create a .env.local file in the project root with:

   ```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
⚠️ This variable is essential for runtime data fetching in server components.
   ```

### Run the Development Server
   ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
   ```
Then open http://localhost:3000 in your browser.

## ✅ Best Practices & Optimization
This project follows modern best practices for performance, structure, and maintainability:

- Modular Architecture
Code organized under src/app, src/components, src/hooks, and src/types.

- Custom Hooks (useTravelData)
Encapsulates filtering, pagination, and fetching logic for reuse and clarity.

- Next.js App Router
Leverages the latest routing system for clean URLs and built-in server components.

- Server Components
PlaceDetailPage uses async server rendering for faster performance and improved SEO.

- Client Components
Interactive pages like HomePage use "use client" for client-side interactivity.

- next/image Optimization
Automatic image optimization with proper layout fill, lazy loading, and remote image config.

- Performance Hooks (useMemo)
Optimizes render cycles by memoizing computed values and filtered results.

- Full TypeScript Coverage
Strong typing across components, hooks, and utilities.

- Tailwind CSS
Efficient utility-based styling with responsive, dark mode-ready classes.

- next.config.js Tweaks
Uses reactStrictMode, swcMinify, and output: 'standalone' for deployment readiness.

