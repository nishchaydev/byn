# BYN Agency Website Upgrade

This project is a premium agency website built with Next.js 15, React Three Fiber, and Tailwind CSS. It features a cinematic WebGL hero section, a secret admin dashboard, and automated quotation/invoice generation.

## Features

- **Cinematic Hero**: GPU-accelerated 3D network mesh using `react-three-fiber`.
- **Premium Design**: "Cyber-Luxury" aesthetic with neon gradients and glassmorphism.
- **Motion System**: Smooth transitions powered by `framer-motion`.
- **Secret Admin Console**: Protected route at `/admin-network-console-byn-2025`.
- **Tools**: Built-in Quotation and Invoice generators (HTML/PDF print).

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the site.

3.  **Access Admin Console**:
    - Go to [http://localhost:3000/admin-network-console-byn-2025/login](http://localhost:3000/admin-network-console-byn-2025/login)
    - Default Password: `admin123` (Set `ADMIN_PASSWORD` in `.env.local` to override)

## Environment Variables

Create a `.env.local` file in the root directory:

```env
ADMIN_PASSWORD=your_secure_password_here
NEXT_PUBLIC_BYN_ACCENT_START=#3A8DFF
NEXT_PUBLIC_BYN_ACCENT_END=#8A2BE2
```

## Deployment

This project is optimized for Vercel.

1.  Push to GitHub.
2.  Import project in Vercel.
3.  Add environment variables in Vercel project settings.
4.  Deploy.

## Project Structure

- `/app`: Next.js App Router pages and layouts.
- `/components`: Reusable UI components.
  - `/components/MeshBackground.tsx`: The 3D WebGL scene.
  - `/components/Hero.tsx`: Main hero section.
- `/lib`: Utilities and animation configs.
- `/public`: Static assets.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **3D/WebGL**: Three.js, React Three Fiber, Drei
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Space Grotesk, Inter (Google Fonts)

## License

Private and Confidential. Property of BYN.
