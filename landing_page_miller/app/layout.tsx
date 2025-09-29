import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-blue-600">
                  ScaleUp
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Home
                  </a>
                  <a href="/about" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    About
                  </a>
                  <a href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Contact
                  </a>
                </div>
              </div>
              <div className="md:hidden">
                <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">ScaleUp</h3>
        <p className="text-gray-400">Professional web development services for small businesses.</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
          </li>
          <li>
            <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 text-left">
        <h3 className="text-lg font-semibold mb-4">Contact</h3>
        <a
          href="mailto:evan05miller@gmail.com"
          className="bg-blue-600 text-white text-sm font-medium py-2 rounded hover:bg-blue-500 transition inline-block w-32 text-center"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/evan-miller-896b26301"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white text-sm font-medium py-2 rounded hover:bg-blue-500 transition inline-block w-32 text-center"
        >
          LinkedIn Profile
        </a>
      </div>
    </div>

    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
      <p className="text-gray-400">&copy; 2025 ScaleUp. All rights reserved.</p>
    </div>
  </div>
</footer>
      </body>
    </html>
  );
}
