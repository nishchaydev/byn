import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BYN - Create. Connect. Conquer.",
  description: "Premium website theme & component system for BYN.",
};

import { DevelopmentBadge } from "@/components/ui/development-badge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-byn-black text-white font-sans`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <DevelopmentBadge />
        <Footer />
      </body>
    </html>
  );
}
