import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
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
        className={`${inter.variable} ${bebasNeue.variable} antialiased bg-byn-black text-white font-sans`}
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
