import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Protect Nature — Embrace Nature's Harmony",
  description: "A premium portfolio celebrating nature and sustainability",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          {/* Background */}
          <div className="fixed inset-0 bg-nature-scene" />
          <div className="leaves-pattern" />
          
          {/* Floating Light Orbs */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nature-500/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-nature-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-nature-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1.5s" }} />
          </div>

          {/* Content */}
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
