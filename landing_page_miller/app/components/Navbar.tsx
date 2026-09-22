'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
];

const serviceLinks = [
  {
    href: '/design-process',
    label: 'Design Process',
    subheading: 'From concept to launch',
  },
  {
    href: '/seo',
    label: 'SEO',
    subheading: 'Rank higher on Google',
  },
  {
    href: '/aeo',
    label: 'AEO',
    subheading: 'Visible to AI agents',
  },
  {
    href: '/accessibility',
    label: 'Accessibility',
    subheading: 'Sites for everyone',
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesActive = serviceLinks.some((link) => pathname === link.href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const linkClass = (href: string) => {
    const active = pathname === href || (href !== '/' && pathname.startsWith(href));
    return active
      ? 'text-emerald-700 font-semibold'
      : 'text-gray-600 hover:text-emerald-700';
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md shadow-emerald-900/5 border-b border-emerald-100'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="text-3xl font-bold gradient-text tracking-tight transition-opacity hover:opacity-80"
          >
            ScaleUp
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2.5 rounded-lg text-base font-medium transition-colors ${linkClass(link.href)}`}
              >
                {link.label}
              </Link>
            ))}

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((o) => !o)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`px-5 py-2.5 rounded-lg text-base font-medium transition-colors flex items-center gap-1 ${
                  isServicesActive
                    ? 'text-emerald-700 font-semibold'
                    : 'text-gray-600 hover:text-emerald-700'
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-emerald-100 py-1 transition-all origin-top ${
                  servicesOpen
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setServicesOpen(false)}
                    className={`group block px-4 py-3 transition-colors hover:bg-emerald-50 ${
                      pathname === link.href ? 'bg-emerald-50/60' : ''
                    }`}
                  >
                    <span
                      className={`block text-base font-medium transition-colors ${
                        pathname === link.href
                          ? 'text-emerald-700'
                          : 'text-gray-700 group-hover:text-emerald-700'
                      }`}
                    >
                      {link.label}
                    </span>
                    <span className="block text-xs text-gray-500 overflow-hidden max-h-0 opacity-0 group-hover:max-h-6 group-hover:opacity-100 group-hover:mt-0.5 transition-all duration-200">
                      {link.subheading}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/#contact"
              className="ml-2 btn-primary text-white px-6 py-3 rounded-lg text-base font-semibold"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2.5 rounded-lg text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
          >
            {mobileOpen ? (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? 'max-h-[36rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-5 pt-3 space-y-1 bg-white border-t border-emerald-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3.5 rounded-lg text-lg font-medium transition-colors ${linkClass(link.href)}`}
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => setMobileServicesOpen((o) => !o)}
            aria-expanded={mobileServicesOpen}
            className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg text-lg font-medium transition-colors ${
              isServicesActive ? 'text-emerald-700 font-semibold' : 'text-gray-600'
            }`}
          >
            Services
            <svg
              className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileServicesOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pl-4 space-y-1">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg transition-colors ${linkClass(link.href)}`}
                >
                  <span className="block text-base font-medium">{link.label}</span>
                  <span className="block text-xs text-gray-500 mt-0.5">{link.subheading}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/#contact"
            className="block text-center btn-primary text-white py-3.5 rounded-lg text-lg font-semibold mt-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
