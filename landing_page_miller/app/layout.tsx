import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Navbar from './components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScaleUp - Professional Web Development for Small Businesses",
  description: "Custom websites and web development services for small businesses. Modern, responsive, and affordable solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <footer className="bg-emerald-950 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-300">ScaleUp</h3>
                <p className="text-emerald-100/70">
                  Professional web development services for small businesses.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-300">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-emerald-100/70 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-emerald-100/70 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-emerald-100/70 hover:text-white transition-colors">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold mb-2 text-emerald-300">Contact</h3>
                <a
                  href="mailto:evan05miller@gmail.com"
                  className="inline-flex items-center justify-center w-36 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors"
                >
                  Email Me
                </a>
                <a
                  href="https://www.linkedin.com/in/evan-miller-896b26301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-36 py-2.5 rounded-lg border border-emerald-600 text-emerald-300 hover:bg-emerald-900/50 text-sm font-medium transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="border-t border-emerald-800/60 mt-8 pt-8 text-center">
              <p className="text-emerald-100/50">&copy; 2026 ScaleUp. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
